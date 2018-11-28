import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeViewViagemReportarPage } from './home-view-viagem-reportar';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    HomeViewViagemReportarPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeViewViagemReportarPage),
  ],
  providers: [
    DatePipe,
  ]
})
export class HomeViewViagemReportarPageModule {}
