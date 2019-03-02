import { Injectable, Optional, Inject, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfigOptions } from './typings';
import { OPTIONS_TOKEN } from './configuration.token';
import { isObject, mapKeys, set, startsWith, get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class Configurator {
  listener = new Subject<ConfigOptions>();

  private repository: ConfigOptions = {} as ConfigOptions;

  constructor(
    @Optional()
    @SkipSelf()
    @Inject(OPTIONS_TOKEN)
    options?: ConfigOptions | undefined
  ) {
    this.options = options || {};
  }

  setOption(name: string, value: any): void {
    this.repository[name] = value;
    this.listener.next({ options: this.repository });
  }

  /**
   * Get a configuration value from the collection.
   *
   */
  getOption<O>(name: string, defaults: any = null): O {
    return this.hasOption(name) ? this.repository[name] : defaults;
  }

  getOptionTree<T>(rootKey: string, fromRoot: boolean = true): T {
    const tree = {};

    mapKeys(this.options, (value: any, key: string) => {
      if (startsWith(key, rootKey)) {
        set(tree, key, value);
      }

      return key;
    });

    return fromRoot ? tree : get(tree, rootKey);
  }

  get options(): ConfigOptions {
    return this.repository;
  }

  set options(opt: ConfigOptions) {
    this.flat(opt);
  }

  reset(): void {
    this.options = {};
    this.repository = {};
  }

  /**
   * Verify if option name exists on the collection.
   *
   */
  hasOption(name: string): boolean {
    return this.repository.hasOwnProperty(name);
  }

  /**
   * Converts a tree object keys in flat
   * key string in one level.
   *
   * {
   *  name: '',
   *  profile: {
   *    email: ''
   *  }
   * }
   *
   * to: {'name': '', 'profile.email': ''}
   *
   */
  private flat(config: any, key: string = ''): void {
    const path: string = +(key === '') ? key : key + '.';

    Object.keys(config).forEach((keyId: string) => {
      if (isObject(config[keyId])) {
        this.flat(config[keyId], path + keyId);
      } else {
        this.setOption(`${path + keyId}`, config[keyId]);
      }
    });
  }
}
