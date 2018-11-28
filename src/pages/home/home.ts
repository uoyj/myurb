import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Point, FeatureCollection } from 'geojson';
import { Map, GeoJSON, GeoJSONOptions, LatLngTuple, LeafletMouseEvent, Marker } from 'leaflet';
import L from 'leaflet';
//import 'leaflet.locatecontrol';
//const L = window['L'];

import { HomeView } from '../../providers/types';
import { Ponto } from '../../providers/ponto';
import { PontoFeature, PontoSimples } from '../../providers/pontoFeature';
import { Rota } from '../../providers/rota';
import { HomeViewPertoDeMimComponent } from '../../components/home-view-perto-de-mim/home-view-perto-de-mim';
import { HomeViewViagemComponent } from '../../components/home-view-viagem/home-view-viagem';
import { CaminhoFeature } from '../../providers/caminhoFeature';
import { HomeViewPadraoComponent } from '../../components/home-view-padrao/home-view-padrao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild("map") mapContainer: ElementRef;
  @ViewChild(HomeViewPertoDeMimComponent) pdmComponent: HomeViewPertoDeMimComponent;
  @ViewChild(HomeViewViagemComponent) viagemComponent: HomeViewViagemComponent;
  @ViewChild(HomeViewPadraoComponent) padraoComponent: HomeViewPadraoComponent;
  
  map: Map;
  debug: boolean
  buscando: boolean;

  view:HomeView;

  rotaLayer: GeoJSON<PontoSimples>;
  caminhoLayer: GeoJSON<{distancia: number}>;
  trechosLayer: GeoJSON<{distancia: number}>;
  selecaoCoords: {tipo:string, coords:LatLngTuple};
  selecaoLayer: Marker;
  pertoDeMimLayer: GeoJSON<Ponto>;

  constructor(public navCtrl: NavController) {
    this.debug = true;
    this.view="Padrao";
    this.rotaLayer = null;    
  }

  ionViewDidEnter() {    
    this.inicializarMapa();
    //Mostrar nivel de zoom
    /*this.map.on('zoom', (ev) => {
      console.log("Zoom change: " + this.map.getZoom());
    });*/
  }

  DesenharRota(event: Rota){
    if(this.rotaLayer){
      let layer = L.geoJSON( event.info_rota,
        <GeoJSONOptions>{ onEachFeature: PontoFeature.onEachPonto, pointToLayer: PontoFeature.pontoToLayerVerde }
      );

      this.DesenharRotaAuxFn(event);

      layer.addTo(this.rotaLayer);

    } else {
      this.rotaLayer = L.geoJSON( event.info_rota,
        <GeoJSONOptions>{ onEachFeature: PontoFeature.onEachPonto, pointToLayer: PontoFeature.pontoToLayer }
      );
      
       this.DesenharRotaAuxFn(event);
       this.rotaLayer.addTo(this.map);
    }
  }

  DesenharRotaAuxFn(event:Rota){
    if(event.trecho_origem && event.trecho_destino){
      this.DesenharTrechos(event);
    }
    let pontoInicial = <Point> event.info_rota.features[0].geometry;
    this.map.setView([pontoInicial.coordinates[1], pontoInicial.coordinates[0]], 14);
    let pontoFinal = <Point> event.info_rota.features[event.info_rota.features.length -1].geometry;

    let markers = [L.marker([pontoInicial.coordinates[1], pontoInicial.coordinates[0]]),
    L.marker([pontoFinal.coordinates[1], pontoFinal.coordinates[0]])];

    markers[0].bindPopup( L.popup().setContent(`Embarque na linha ${event.linha.nome}`) ).openPopup();
    markers[1].bindPopup( L.popup().setContent(`Desembarque em ${event.dados_ponto_destino.endereco}`) ).openPopup();
    L.layerGroup(markers).addTo(this.rotaLayer);
  }

  ApagarRota(){
    if(this.rotaLayer){
      this.map.removeLayer(this.rotaLayer);
      this.rotaLayer = null;
    } 
    if(this.trechosLayer) {
      this.map.removeLayer(this.trechosLayer);
      this.trechosLayer = null;
    }
  }

  DesenharTrechos(event: Rota){
    this.trechosLayer = L.geoJSON(event.trecho_origem);
    L.geoJSON(event.trecho_destino).addTo(this.trechosLayer);
    this.trechosLayer.addTo(this.map);
  }

  DesenharCaminho(event: CaminhoFeature){
    this.caminhoLayer = L.geoJSON(event);
    let pontoInicial = event.geometry.coordinates[0][event.geometry.coordinates[0].length -1];
    this.map.setView([pontoInicial[1], pontoInicial[0]], 14);
    let pontoFinal = event.geometry.coordinates[0][0];
    let markers = [L.marker([pontoInicial[1], pontoInicial[0]]),
                   L.marker([pontoFinal[1], pontoFinal[0]])];                   
    L.layerGroup(markers).addTo(this.caminhoLayer);
    this.caminhoLayer.addTo(this.map);
  }

  ApagarCaminhos(){
    if(this.caminhoLayer) this.map.removeLayer(this.caminhoLayer);
  }

  PertoDeMimGPS(event){
    this.pdmComponent.BuscarPontos(event);
  }

  /** Chamado pelo HomeViewPadrao */
  BuscarRotas(event:{coords:CoordenadasBusca, tipo:string}){
    console.log(event.tipo)
    if(event.tipo=="Simples")this.viagemComponent.BuscarRotas(event.coords);
    else if(event.tipo=="Composta")this.viagemComponent.BuscarRotaComposta(event.coords);
    
  }

  DesenharPontos(event: {pontos: FeatureCollection, gps: LatLngTuple}){
    this.pertoDeMimLayer = L.geoJSON( event.pontos,
                                <GeoJSONOptions>{ onEachFeature: PontoFeature.onEachPonto, pointToLayer: PontoFeature.pontoToLayer }
                               );

    L.marker(event.gps).addTo(this.pertoDeMimLayer);
    this.pertoDeMimLayer.addTo(this.map);
    
    this.map.setView(event.gps, 17);
  }

  ApagarPontos(){
    if(this.pertoDeMimLayer) this.map.removeLayer(this.pertoDeMimLayer);
  }

  SelecionarCoordenadas($event){
    this.view = "SelecionarCoordenadas";
    this.selecaoLayer = L.marker([0,0]).addTo(this.map);
    this.selecaoCoords = {tipo: $event, coords:null};
    this.map.on('click', (ev:LeafletMouseEvent) => {
      this.map.removeLayer(this.selecaoLayer);
      this.selecaoCoords.coords =  [ev.latlng.lat, ev.latlng.lng];
      this.selecaoLayer = L.marker(this.selecaoCoords.coords).addTo(this.map);
    });
  }

  SelecionarCoordenadasConfimar($event){
    this.map.off('click');
    this.map.removeLayer(this.selecaoLayer);
    if($event) {
      if(this.selecaoCoords.tipo == "PertoDeMim"){
        this.pdmComponent.coords = this.pdmComponent.pesquisarComp.coords = this.selecaoCoords.coords;
        this.pdmComponent.pesquisarComp.model=""+this.selecaoCoords.coords;
      } else {
        this.padraoComponent.coordenadasBusca[this.selecaoCoords.tipo] = this.selecaoCoords.coords;
        if(this.selecaoCoords.tipo == "origem") this.padraoComponent.pesquisarComp.first.model=""+this.selecaoCoords.coords;
        else this.padraoComponent.pesquisarComp.last.model=""+this.selecaoCoords.coords;
      }
    } //
  }

  InserirCasa(event) {
    console.log('CASA');
  }

  InserirTrabalho(event) {
    console.log('TRABALHO');
  }

  InserirFavorito(event) {
    console.log('FAVORITO');
  }

  ionViewWillLeave() {
    this.map.eachLayer(layer => {
      this.map.removeLayer(layer);
    });

    document.getElementById('map').innerHTML = "<div id='map'></div>";
  }

  private inicializarMapa() {
    this.map = L.map(this.mapContainer.nativeElement, { zoomControl: true });
    this.map.zoomControl.setPosition('bottomright');
    
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
    }).addTo(this.map);

    this.map.setView(new L.LatLng(-25.4284, -49.2733), 12); //Curitiba
  }
}

export type CoordenadasBusca = {
  origem: LatLngTuple,
  destino: LatLngTuple
}

