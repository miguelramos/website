import { Injectable, Inject } from '@angular/core';

import { head, isEmpty, find } from 'lodash';

import { Configurator } from '@dev/configurator';
import { flatten, GenericType } from '@dev/support';
import { DomainHostType, RouteDescriptorType } from './typings';
import {
  UrlResolverValidationError,
  UrlResolverTestError
} from './url.exceptions';

@Injectable()
export class UrlService {
  static OPTION_ENDPOINT_NAME = 'ENDPOINTS';
  static OPTIONS_DOMAIN_NAME = 'DOMAINS_API';

  prefixes: DomainHostType[] = [];
  routes: Map<string, RouteDescriptorType> = new Map();

  constructor(@Inject(Configurator) private configurator: Configurator) {
    this.routes = new Map();
    this.init();
  }

  /**
   * Init setup for resolving routes collection.
   *
   */
  init(): void {
    const { keys } = Object;
    const endpoints = this.configurator.getOptionTree<GenericType>(
      UrlService.OPTION_ENDPOINT_NAME,
      false
    );

    this.prefixes = this.configurator.getOptionTree<DomainHostType[]>(
      UrlService.OPTIONS_DOMAIN_NAME,
      false
    );

    if (endpoints) {
      const flatEndpoints = flatten(endpoints);

      keys(flatEndpoints).forEach(key =>
        this.setupRoute(key, flatEndpoints[key])
      );
    }
  }

  /**
   * Setup regex routing and add it to Map.
   *
   */
  setupRoute(name: string, uri: string) {
    const verbal = new RegExp(/^@\w+\:/);
    const search = head(verbal.exec(uri)) || '';

    const urlDescriptor = {
      name,
      prefix: search,
      uri,
      endpoint: uri.replace(search, '')
    } as RouteDescriptorType;

    this.addRoute(name, urlDescriptor);
  }

  /**
   * Add route to Map.
   *
   */
  addRoute(name: string, descriptor: RouteDescriptorType) {
    this.routes.set(name, descriptor);
  }

  /**
   * Get the route from Map and resolve domain host. Pass parameters
   * to complete dynamic arguments on route, even overriding domain host is possible.
   *
   */
  get(name: string, params: GenericType = null, domain: string = null) {
    /*if (name.includes('.')) {
      name = name.substr(name.indexOf('.') + 1);
    }*/

    const routeDescriptor: RouteDescriptorType = this.routes.get(name);

    if (isEmpty(routeDescriptor)) {
      throw new UrlResolverValidationError(
        name,
        'Uri is not setup on mappings.'
      );
    } else {
      const resolved = this.resolve(routeDescriptor, params, domain);

      return resolved.url;
    }
  }

  hasRoute(name: string) {
    return this.routes.has(name);
  }

  /**
   * Resolve host domain and route.
   *
   */
  resolve(descriptor: RouteDescriptorType, args: GenericType, host = '') {
    const regex = this.expression(descriptor.endpoint);
    const test = regex.test(descriptor.endpoint);
    const prefix = descriptor.prefix.substring(0, descriptor.prefix.length - 1);

    if (test) {
      let url = null;
      const parameters = [];

      regex
        .exec(descriptor.endpoint)
        .slice(1)
        .forEach(arg => {
          if (arg) {
            parameters.push(decodeURIComponent(arg));
          }

          if (args && arg) {
            url = url
              ? url.replace(arg, args[arg.substring(1, arg.length)])
              : descriptor.endpoint.replace(
                  arg,
                  args[arg.substring(1, arg.length)]
                );
          }
        });

      const domain = find<DomainHostType>(this.prefixes, ['KEY', prefix]);
      const domainHost = isEmpty(host) ? domain.HOST || '' : host;

      return {
        name: descriptor.name,
        host: domainHost,
        url: url
          ? `${domainHost}${url}`
          : `${domainHost}${descriptor.endpoint}`,
        params: args,
        regex: regex.source
      };
    } else {
      throw new UrlResolverTestError(
        descriptor.name,
        'UrlResolver test didnt match any url.'
      );
    }
  }

  /**
   * Macth route arguments.
   *
   */
  expression(route: string) {
    const splatParam = /\*\w+/g;
    const namedParam = /(\(\?)?:\w+/g;
    const optionalParam = /\((.*?)\)/g;
    const escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    route = route
      .replace(escapeRegExp, '\\$&')
      .replace(optionalParam, '(?:$1)?')
      .replace(namedParam, (match, optional) => {
        return optional ? match : '([^/?]+)';
      })
      .replace(splatParam, '([^?]*?)');

    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
  }
}
