import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import L, { Map, GeoJSON, GeoJSONOptions } from 'leaflet';
import { LinhaFeature } from '../../../providers/linhaFeature';
import { ItinerarioProvider } from '../../../providers/itinerario/itinerario';
import { Linha } from '../../../providers/linha';
import { PontoFeature } from '../../../providers/pontoFeature';
import { Ponto } from '../../../providers/ponto';
import { FavoritosProvider } from '../../../providers/favoritos/favoritos';

@IonicPage()
@Component({
  selector: 'page-itinerario-detalhes',
  templateUrl: 'itinerario-detalhes.html',
})
export class ItinerarioDetalhesPage {
  @ViewChild('itimap') mapContainer: ElementRef;
  map:Map;
  itinerarioLayer: GeoJSON<Linha>;
  pontosLayer: GeoJSON<Ponto>
  linha:LinhaFeature;
  favoritado: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ItinerarioProvider:ItinerarioProvider,
              public FavoritosProvider:FavoritosProvider) {
    this.linha = navParams.data;
  }

  ionViewDidLoad() {

    this.inicializarMapa();
    console.log(this.linha);
    this.itinerarioLayer = L.geoJSON(this.linha).addTo(this.map);
    this.map.fitBounds(this.itinerarioLayer.getBounds());

    this.ItinerarioProvider.getPontos(this.linha.properties.codigo)
    .then(
      data => {
        this.pontosLayer = L.geoJSON(data, <GeoJSONOptions>{ onEachFeature: PontoFeature.onEachPonto, pointToLayer: PontoFeature.pontoToLayer }).addTo(this.map);
      }, 
      error => console.error(error));

      this.FavoritosProvider.baseHorarios().then((b)=>{          
        if(b && b[this.linha.properties.codigo]) this.favoritado = true;
        else this.favoritado = false;
      });
  }

  ionViewWillLeave() {
    this.map.remove();
    document.getElementById('itimap').innerHTML = "<div id='itimap'></div>";
  }

  inicializarMapa() {
    this.map = L.map("itimap", { zoomControl: true });
    this.map.zoomControl.setPosition('bottomright');

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
    }).addTo(this.map);

    this.map.setView(new L.LatLng(-25.4284, -49.2733), 12); //Curitiba
  }

  favoritar(){
    this.FavoritosProvider.favoritarHorario(this.linha.properties).then((r)=>{
      this.favoritado = !this.favoritado;
      /* this.FavoritosProvider.baseHorarios().then((b)=>{
        console.log(b);
      }); */
    });
  }
}
