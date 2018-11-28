import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorarioDetalhesPage } from './horario-detalhes';

@NgModule({
  declarations: [
    HorarioDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(HorarioDetalhesPage),
  ],
})
export class HorarioDetalhesPageModule {}
