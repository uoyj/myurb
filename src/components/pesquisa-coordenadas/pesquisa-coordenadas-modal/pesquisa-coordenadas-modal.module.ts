import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaCoordenadasModalPage } from './pesquisa-coordenadas-modal';

@NgModule({
  declarations: [
    PesquisaCoordenadasModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaCoordenadasModalPage),
  ],
})
export class PesquisaCoordenadasModalPageModule {}
