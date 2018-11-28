import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HomeView } from '../../providers/types';
import { LatLngTuple } from 'leaflet';

@Component({
  selector: 'home-view-selecionar-coordenadas',
  templateUrl: 'home-view-selecionar-coordenadas.html'
})
export class HomeViewSelecionarCoordenadasComponent {

  @Input() selecaoCoords: {tipo:string, coords:LatLngTuple};
  @Input() view: HomeView;
  @Output() viewChange = new EventEmitter<HomeView>();
  @Output("confirmar") confirmarChange = new EventEmitter<{tipo:string, coords:LatLngTuple}>();

  
  constructor() {
  }

  viewEstado(estado:HomeView){
    this.view = estado;
    this.viewChange.emit(this.view);
  }

  Voltar(){
    this.selecaoCoords.coords = null;
    this.confirmarChange.emit(null);
    if(this.selecaoCoords.tipo =="PertoDeMim") this.viewEstado("PertoDeMim");
    else this.viewEstado("Padrao");
  }

  Confirmar(){
    if(this.selecaoCoords.coords  == null){
    } else {
      this.confirmarChange.emit(this.selecaoCoords);
      if(this.selecaoCoords.tipo =="PertoDeMim") this.viewEstado("PertoDeMim");
      else this.viewEstado("Padrao");
    }
    
  }

}
