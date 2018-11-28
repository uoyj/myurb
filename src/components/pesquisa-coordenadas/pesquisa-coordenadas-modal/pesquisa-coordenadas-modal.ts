import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { LatLngTuple } from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { Geolocation } from '@ionic-native/geolocation';
import { FavoritosProvider } from '../../../providers/favoritos/favoritos';

@IonicPage()
@Component({
  selector: 'page-pesquisa-coordenadas-modal',
  templateUrl: 'pesquisa-coordenadas-modal.html',
})
export class PesquisaCoordenadasModalPage {
  buscando: boolean;
  placeholder: string;
  model: string;
  coords: LatLngTuple;
  OSMProvider: OpenStreetMapProvider;
  listaResultados: any[] = [];
  favoritos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              private geolocation: Geolocation, private FavoritosProvider:FavoritosProvider, private toastCtrl: ToastController) {
    this.buscando = false;
    this.placeholder = navParams.data.placeholder;
    this.model = navParams.data.model;
    this.OSMProvider = new OpenStreetMapProvider();
  }

  ionViewDidLoad() {
    this.FavoritosProvider.baseEnderecos().then(r=>{
      this.favoritos = r;
    });
  }

  Fechar(){
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss({
      model: this.model,
      coords: this.coords
    });
  }

  Buscar() {
    if(this.model.length > 0){
      this.BuscaOSM();
    } else {
      this.listaResultados = [];
    }
  }

  BuscaOSM(){
    this.buscando = true;
    this.OSMProvider.search({ query: this.model + " curitiba" })
    .then((result) => {
      this.listaResultados = result;
      this.buscando = false;
    },(error) => {
      console.error(error);
      this.listaResultados = [];
      this.buscando = false;
    });
  }

  ResultadoClick(r) {
    this.model = r.label;
    this.coords =  [r.y, r.x];
    this.dismiss();
  }

  FavoritoClick(f){
    if(f.coords){
      this.model = f.nome;
      this.coords =  f.coords;
      this.dismiss();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Este favorito não está configurado.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
    }
    
  }

  UsarLocal() {
    this.buscando = true;
    this.geolocation.getCurrentPosition().then((r) => {
      this.coords = [r.coords.latitude, r.coords.longitude];
      this.model = `${this.coords}`;
      this.buscando = false;
      this.dismiss();
    });
  }

  SelecionarNoMapa() {
    this.viewCtrl.dismiss({
      SelecionarCoordenadas: true
    });
  }

}
