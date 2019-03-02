import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface DomainHostType {
  HOST: string;
  KEY: string;
}

export interface RouteDescriptorType {
  name: string;
  prefix: string;
  uri: string;
  endpoint: string;
}

export interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface JsonSpec<SpecType> {
  type: string;
  id: string;
  attributes: SpecType;
}

export interface ResponseSpec<Model> {
  data?: Array<JsonSpec<Model>> | JsonSpec<Model>;
}

export interface UrlObject {
  path: string;
  paramaters?: {};
}
