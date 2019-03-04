import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from '@dev/rest';
import { environment } from '@dev/env/environment';
import {
  concatMap,
  catchError,
  filter,
  take,
  toArray,
  map
} from 'rxjs/operators';
import { of, from } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(
    @Inject(UrlService) private readonly urlService: UrlService,
    @Inject(HttpClient) private readonly httpService: HttpClient
  ) {}

  getHeaders() {
    return { headers: { Authorization: `token ${environment.gh_token}` } };
  }

  getProfile() {
    const url = this.urlService.get('GITHUB.USER', { user: 'miguelramos' });

    return this.httpService.get(url, this.getHeaders());
  }

  getRepos() {
    const url = this.urlService.get('GITHUB.REPOS');

    return this.httpService.get(url, this.getHeaders());
  }

  getStatistics() {
    return this.getRepos().pipe(
      concatMap((response: { name: string; owner: { login: string } }[]) =>
        from(response)
      ),
      concatMap(repo => {
        const url = this.urlService.get('GITHUB.STATISTICS', {
          owner: repo.owner.login,
          repo: repo.name
        });

        return this.httpService.get(url, this.getHeaders()).pipe(
          concatMap(
            (
              response: {
                author: { login: string; id: number };
                total: number;
              }[]
            ) => from(response)
          ),
          filter(value => {
            return value.author.login === 'miguelramos' ? true : false;
          }),
          catchError(() => of({}))
        );
      }),
      toArray(),
      map(collection => {
        const serie = {
          name: 'Github',
          series: []
        };
        serie.series = collection.map(
          (
            item: { author: { login: string; id: number }; total: number },
            idx
          ) => {
            if (item && item.author) {
              return { name: idx, value: item.total };
            }
          }
        );

        return [serie];
      })
    );
  }

  getEvents() {
    const url = this.urlService.get('GITHUB.EVENTS', { user: 'miguelramos' });

    return this.httpService.get(url, this.getHeaders());
  }
}
