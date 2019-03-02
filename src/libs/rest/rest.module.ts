import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from './url.service';
import { RestHttpService } from './rest.service';
import { Configurator, ConfigurationModule } from '@dev/configurator';

@NgModule({
  imports: [ConfigurationModule],
  providers: [
    {
      provide: RestHttpService,
      useClass: RestHttpService,
      deps: [HttpClient]
    },
    {
      provide: UrlService,
      useClass: UrlService,
      deps: [Configurator]
    }
  ]
})
export class RestModule {}
