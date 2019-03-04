import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbUserModule,
  NbProgressBarModule,
  NbSpinnerModule,
  NbCardModule
} from '@nebular/theme';
import { AreaChartModule } from '@swimlane/ngx-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CONFIGURATION } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigurationModule } from '@dev/configurator';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbUserModule,
    NbSidebarModule.forRoot(),
    CommonModule,
    HttpClientModule,
    ConfigurationModule.forRoot(CONFIGURATION),
    ServicesModule,
    FontAwesomeModule,
    NbProgressBarModule,
    AreaChartModule,
    NbSpinnerModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
