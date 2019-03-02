import { NgModule, ModuleWithProviders } from '@angular/core';
import { OPTIONS_TOKEN, CONFIG_DEFAULT_OPTIONS } from './configuration.token';
import { Configurator } from './configuration.service';
import { ConfigOptions } from './typings';

@NgModule({})
export class ConfigurationModule {
  static forRoot(
    config: ConfigOptions = CONFIG_DEFAULT_OPTIONS
  ): ModuleWithProviders {
    return {
      ngModule: ConfigurationModule,
      providers: [
        { provide: OPTIONS_TOKEN, useValue: config },
        {
          provide: Configurator,
          useClass: Configurator,
          deps: [OPTIONS_TOKEN]
        }
      ]
    };
  }

  static forChild(
    config: ConfigOptions = CONFIG_DEFAULT_OPTIONS
  ): ModuleWithProviders {
    return {
      ngModule: ConfigurationModule,
      providers: [
        { provide: OPTIONS_TOKEN, useValue: config },
        {
          provide: Configurator,
          useClass: Configurator,
          deps: [OPTIONS_TOKEN]
        }
      ]
    };
  }
}
