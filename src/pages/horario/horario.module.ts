import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorarioPage } from './horario';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HorarioPage,
  ],
  imports: [
    IonicPageModule.forChild(HorarioPage),
    PipesModule
  ],
})
export class HorarioPageModule {}
