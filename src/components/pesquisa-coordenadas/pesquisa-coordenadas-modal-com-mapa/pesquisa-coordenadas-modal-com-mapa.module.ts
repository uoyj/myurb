import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaCoordenadasModalComMapaPage } from './pesquisa-coordenadas-modal-com-mapa';

@NgModule({
  declarations: [
    PesquisaCoordenadasModalComMapaPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaCoordenadasModalComMapaPage),
  ],
})
export class PesquisaCoordenadasModalComMapaPageModule {}
