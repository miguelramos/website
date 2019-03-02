import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProfileResourceInterface } from '../app.typings';
import { UrlService, RestHttpService, JsonSpec } from '@dev/rest';

@Injectable()
export class ProfileService {
  constructor(
    @Inject(UrlService) private readonly urlService: UrlService,
    @Inject(RestHttpService) private readonly restService: RestHttpService
  ) {}

  getProfile() {
    const url = this.urlService.get('PROFILE');

    return this.restService
      .get<ProfileResourceInterface>(url)
      .pipe(map(response => response.data[0])) as Observable<
      JsonSpec<ProfileResourceInterface>
    >;
  }
}
