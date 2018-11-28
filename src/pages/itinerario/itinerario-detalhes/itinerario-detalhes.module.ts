import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItinerarioDetalhesPage } from './itinerario-detalhes';

@NgModule({
  declarations: [
    ItinerarioDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(ItinerarioDetalhesPage),
  ],
})
export class ItinerarioDetalhesPageModule {}
