import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from '@dev/rest';
import { environment } from '@dev/env/environment';

@Injectable()
export class GithubService {
  constructor(
    @Inject(UrlService) private readonly urlService: UrlService,
    @Inject(HttpClient) private readonly httpService: HttpClient
  ) {}

  getProfile() {}
}
