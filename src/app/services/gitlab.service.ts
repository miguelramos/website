import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { map } from 'rxjs/operators';

import { UrlService } from '@dev/rest';
import { environment } from '@dev/env/environment';

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

    return this.httpService
      .get(url, assign({}, { params: { action: 'pushed' } }, this.getHeaders())).pipe(
        map((response: {push_data: {commit_count: number}}[]) => {
          const serie = {
            name: 'Gitlab',
            series: []
          };

          serie.series = response.map((item, idx) => ({ name: idx, value: item.push_data.commit_count }));

          return [serie];
        })
      );
  }
}
