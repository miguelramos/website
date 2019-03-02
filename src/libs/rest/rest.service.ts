import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, EmptyError, throwError } from 'rxjs';

import { ResponseSpec, HttpOptions } from './typings';

@Injectable()
export class RestHttpService {
  constructor(@Inject(HttpClient) protected client: HttpClient) {}

  request<JsonModel>(request: HttpRequest<ResponseSpec<JsonModel>>) {
    return this.client.request(request).pipe(catchError(this.handleError()));
  }

  get<JsonModel>(
    url: string,
    options?: HttpOptions
  ): Observable<ResponseSpec<JsonModel>> {
    return this.client
      .get<ResponseSpec<JsonModel>>(url, options)
      .pipe(catchError(this.handleError()));
  }

  post<JsonModel>(
    url: string,
    payload: any,
    options?: HttpOptions
  ): Observable<ResponseSpec<JsonModel>> {
    return this.client
      .post(url, payload, options)
      .pipe(catchError(this.handleError()));
  }

  put<JsonModel>(
    url: string,
    payload: any,
    options?: HttpOptions
  ): Observable<ResponseSpec<JsonModel>> {
    return this.client
      .put(url, payload, options)
      .pipe(catchError(this.handleError()));
  }

  delete<JsonModel>(
    url: string,
    options?: HttpOptions
  ): Observable<ResponseSpec<JsonModel>> {
    return this.client
      .delete(url, options)
      .pipe(catchError(this.handleError()));
  }

  private handleError() {
    return (error: HttpErrorResponse | EmptyError) => {
      if (error instanceof HttpErrorResponse || EmptyError) {
        Object.defineProperty(error, 'type', {
          enumerable: true,
          value: 'HTTP FAILURE'
        });
      }

      return throwError(error);
    };
  }
}
