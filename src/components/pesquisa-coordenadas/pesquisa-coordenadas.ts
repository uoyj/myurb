import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PesquisaCoordenadasModalPage } from './pesquisa-coordenadas-modal/pesquisa-coordenadas-modal';
import { LatLngTuple } from 'leaflet';

@Component({
  selector: 'pesquisa-coordenadas',
  templateUrl: 'pesquisa-coordenadas.html'
})
export class PesquisaCoordenadasComponent {

  @Input() placeholder: string;
  @Input() coords: LatLngTuple;
  @Output() coordsChange= new EventEmitter<LatLngTuple>();
  @Output() selecionarCoords= new EventEmitter();
  model: string;
  
  constructor(public modalCtrl: ModalController) {
  }

  coordsEstado(estado:LatLngTuple){
    this.coords = estado;
    this.coordsChange.emit(this.coords);
  }

  Pesquisar(){
    let modal = this.modalCtrl.create(PesquisaCoordenadasModalPage, {placeholder:this.placeholder, model:this.model});
    modal.onDidDismiss((data) => {
      if(data){
        if(data.SelecionarCoordenadas === true){
          this.selecionarCoords.emit();
        } else {
          this.model = data.model;
          this.coordsEstado(data.coords);
        }
      }
    });
    modal.present();
  }
}
