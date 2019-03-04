import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GithubService } from './github.service';
import { ProfileService } from './profile.service';
import { RestModule, UrlService, RestHttpService } from '@dev/rest';
import { GitlabService } from './gitlab.service';

@NgModule({
  imports: [RestModule],
  providers: [
    {
      useClass: ProfileService,
      provide: ProfileService,
      deps: [UrlService, RestHttpService]
    },
    {
      provide: GithubService,
      useClass: GithubService,
      deps: [UrlService, HttpClient]
    },
    {
      provide: GitlabService,
      useClass: GitlabService,
      deps: [UrlService, HttpClient]
    }
  ]
})
export class ServicesModule {}
