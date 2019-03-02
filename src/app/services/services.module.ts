import { NgModule } from '@angular/core';

import { ProfileService } from './profile.service';
import { RestModule, UrlService, RestHttpService } from '@dev/rest';

@NgModule({
  imports: [RestModule],
  providers: [
    {
      useClass: ProfileService,
      provide: ProfileService,
      deps: [UrlService, RestHttpService]
    }
  ]
})
export class ServicesModule {}
