import { Component, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { LatLngTuple } from 'leaflet';

import { HomeView } from '../../providers/types';
import { CoordenadasBusca } from '../../pages/home/home';
import { PesquisaCoordenadasComponent } from '../pesquisa-coordenadas/pesquisa-coordenadas';

@Component({
  selector: 'home-view-padrao',
  templateUrl: 'home-view-padrao.html'
})
export class HomeViewPadraoComponent {

  @Input() buscando: boolean;
  @Output() buscandoChange = new EventEmitter<boolean>();
  
  @Input() view: HomeView;
  @Output() viewChange = new EventEmitter<HomeView>();

  @Input() debug: boolean;

  @Output() pertoDeMimGPS = new EventEmitter<LatLngTuple>();
  @Output() buscarRotas = new EventEmitter<{coords:CoordenadasBusca, tipo:string}>();
  @Output() selecionarCoordenadas = new EventEmitter<string>();

  @ViewChildren(PesquisaCoordenadasComponent) pesquisarComp: QueryList<PesquisaCoordenadasComponent>;

  coordenadasBusca: CoordenadasBusca;

  constructor(private alertCtrl: AlertController, public toastCtrl: ToastController,
              private geolocation: Geolocation) {
    this.debug = true;
    this.coordenadasBusca = {origem: null, destino: null};
    //this.coordenadasBusca = {origem: [-25.4065781, -49.2526901], destino: [-25.43941425, -49.2687733035987]};
  }

  buscandoEstado(estado:boolean){
    this.buscando = estado;
    this.buscandoChange.emit(this.buscando);
  }

  viewEstado(estado:HomeView){
    this.view = estado;
    this.viewChange.emit(this.view);
  }

  BuscarRota() {

    if(this.coordenadasBusca.origem && this.coordenadasBusca.destino){
      this.buscandoEstado(true);
      this.viewEstado("Viagem");
      this.buscarRotas.emit({coords: this.coordenadasBusca, tipo:"Simples"});
    } else {
      let alert = null;
      if (!this.coordenadasBusca.origem && !this.coordenadasBusca.destino){
        alert = this.alertCtrl.create({
          title: 'Insira Origem e Destino',
          buttons: ['OK']
        });        
      } else if (!this.coordenadasBusca.origem){
        alert = this.alertCtrl.create({
          title: 'Insira Origem',
          buttons: ['OK']
        });        
      } else if (!this.coordenadasBusca.destino){
        alert = this.alertCtrl.create({
          title: 'Insira Destino',
          buttons: ['OK']
        });        
      }
      alert.present();
    }
  }

  BuscarRotaComposta() {    
    if(this.coordenadasBusca.origem && this.coordenadasBusca.destino){
      this.buscandoEstado(true);
      this.viewEstado("Viagem");
      this.buscarRotas.emit({coords: this.coordenadasBusca, tipo:"Composta"});
    } else {
      let alert = null;
      if (!this.coordenadasBusca.origem && !this.coordenadasBusca.destino){
        alert = this.alertCtrl.create({
          title: 'Insira Origem e Destino',
          buttons: ['OK']
        });        
      } else if (!this.coordenadasBusca.origem){
        alert = this.alertCtrl.create({
          title: 'Insira Origem',
          buttons: ['OK']
        });        
      } else if (!this.coordenadasBusca.destino){
        alert = this.alertCtrl.create({
          title: 'Insira Destino',
          buttons: ['OK']
        });        
      }
      alert.present();
    }
  }

  PertoDeMim(){
    this.buscandoEstado(true);   
    this.geolocation.getCurrentPosition().then((resp) => {
      this.pertoDeMimGPS.emit([resp.coords.latitude, resp.coords.longitude]);
      this.viewEstado("PertoDeMim");
     }).catch((error) => {
      let toast = this.toastCtrl.create({
        message: 'Não foi possível obter sua localização, mas você pode usar a barra de pesquisa.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
      console.error(error);
      this.buscandoEstado(false);
      this.viewEstado("PertoDeMim");
     });
  }

  SelecionarNoMapa(barra:string){
    this.selecionarCoordenadas.emit(barra);
  }

  setCoordenadasBusca(c: CoordenadasBusca){
    this.coordenadasBusca = c;
  }


}

