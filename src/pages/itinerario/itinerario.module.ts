import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItinerarioPage } from './itinerario';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ItinerarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ItinerarioPage),
    PipesModule
  ],
})
export class ItinerarioPageModule {}
