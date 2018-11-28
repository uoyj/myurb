import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Map, LatLngTuple, LeafletMouseEvent, Marker } from 'leaflet';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-pesquisa-coordenadas-modal-com-mapa',
  templateUrl: 'pesquisa-coordenadas-modal-com-mapa.html',
})
export class PesquisaCoordenadasModalComMapaPage {
  buscando: boolean;
  placeholder: string;
  model: string;
  coords: LatLngTuple;
  OSMProvider: OpenStreetMapProvider;
  listaResultados: any[] = [];
  
  map: Map;
  hiddenMapa: boolean = true;
  @ViewChild("pmap") mapContainer: ElementRef;
  selecaoLayer: Marker;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              private geolocation: Geolocation) {
    
    this.buscando = false;
    this.placeholder = navParams.data.placeholder;
    this.model = navParams.data.model;
    this.OSMProvider = new OpenStreetMapProvider();
    
  }

  ionViewDidLoad() {
    this.inicializarMapa();
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

  UsarLocal() {
    this.buscando = true;
    this.geolocation.getCurrentPosition().then((r) => {
      this.coords = [r.coords.latitude, r.coords.longitude];
      this.model = null;
      this.buscando = false;
      this.dismiss();
    });
  }

  SelecionarNoMapa() {
    this.coords = null;
    this.hiddenMapa = false;
  }

  ConfirmarNoMapa(){
    console.log(this.coords);
    if(this.coords){
      this.model = null;
      this.dismiss();
    }
  }

  VoltarDoMapa(){
    this.hiddenMapa = true;
  }

  private inicializarMapa() {
    this.map = L.map(this.mapContainer.nativeElement, { zoomControl: true });
    this.map.zoomControl.setPosition('bottomright');
    
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
    }).addTo(this.map);

    this.map.setView(new L.LatLng(-25.4284, -49.2733), 12); //Curitiba
    
    this.selecaoLayer = L.marker([0,0]).addTo(this.map);
    this.map.on('click', (ev:LeafletMouseEvent) => {
      this.map.removeLayer(this.selecaoLayer);
      this.coords =  [ev.latlng.lat, ev.latlng.lng];
      this.selecaoLayer = L.marker(this.coords).addTo(this.map);
    });
  }

}
