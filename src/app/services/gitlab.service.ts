import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { UrlService } from '@dev/rest';
import { environment } from '@dev/env/environment';
import { concatMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class GitlabService {
  constructor(
    @Inject(UrlService) private readonly urlService: UrlService,
    @Inject(HttpClient) private readonly httpService: HttpClient
  ) {}

  getHeaders() {
    return { headers: { 'Private-Token': `${environment.gl_token}` } };
  }

  getEvents() {
    const url = this.urlService.get('GITLAB.EVENTS', { id: environment.gl_id });
    const { assign } = Object;

    this.httpService
      .get(url, assign({}, { params: { action: 'pushed' } }, this.getHeaders()))
      .pipe(
        map((response: {}[]) => {
          return response;
        })
      );
  }
}
