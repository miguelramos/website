import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv.component';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { AreaChartModule } from '@swimlane/ngx-charts';
import { ServicesModule } from '../services/services.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CvComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    AreaChartModule,
    NbSpinnerModule,
    ServicesModule
  ],
  exports: [RouterModule],
  declarations: [CvComponent]
})
export class CvRoutingModule {}
