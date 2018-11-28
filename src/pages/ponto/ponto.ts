import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

import { HomePage } from '../home/home';

import { PontosProvider } from "../../providers/pontos/pontos"

import 'leaflet';
import 'leaflet.markercluster';
import { Map, GeoJSON } from 'leaflet'
import { PontoFeature } from '../../providers/pontoFeature';
import { Ponto } from '../../providers/ponto';
const L = window['L'];


@IonicPage()
@Component({
  selector: 'page-ponto',
  templateUrl: 'ponto.html',
})
export class PontoPage {
  @ViewChild('pontomap') mapContainer: ElementRef;
  map: Map;
  loading: Loading;
  loadingIsDismissed: boolean = false;
  clusterGroup: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private PontosProvider: PontosProvider, public loadingCtrl: LoadingController) {

              this.clusterGroup = L.markerClusterGroup({maxClusterRadius: this.zoomRadius, animate: true, chunkedLoading: true});
  }

  private zoomRadius(zoom){
    if(zoom > 16) return 0;
    else if (zoom == 16) return 50;
    else return 80;
  }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.initializeMap();

    this.PontosProvider.getArray()
    .then(data =>{
      let pontosLayer: GeoJSON<Ponto> = L.geoJSON(data, {onEachFeature: PontoFeature.onEachPonto, pointToLayer: PontoFeature.pontoToLayer});
      this.clusterGroup.addLayer(pontosLayer);
      this.map.addLayer(this.clusterGroup);
      this.loading.dismiss();
    }, error => console.error(error));
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

  initializeMap(){
    this.map = L.map("pontomap", { zoomControl: true });
    this.map.zoomControl.setPosition('bottomright');

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
    }).addTo(this.map);

    this.map.setView(new L.LatLng(-25.4284, -49.2733), 12); //Curitiba    
  }

  ionViewWillLeave() {
    this.map.off();
    this.map.remove();
    document.getElementById('pontomap').innerHTML = "<div id='pontomap'></div>";
  }

}
