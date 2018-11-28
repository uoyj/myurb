import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PontosProximosProvider } from '../../providers/pontos-proximos/pontos-proximos';
import { LatLngTuple } from 'leaflet';
import { ToastController } from 'ionic-angular';
import { FeatureCollection } from 'geojson';
import { PesquisaCoordenadasComponent } from '../pesquisa-coordenadas/pesquisa-coordenadas';
import { HomeView } from '../../providers/types';


@Component({
  selector: 'home-view-perto-de-mim',
  templateUrl: 'home-view-perto-de-mim.html'
})
export class HomeViewPertoDeMimComponent {

  @Input() buscando: boolean;
  @Output() buscandoChange = new EventEmitter<boolean>();

  @Input() debug: boolean;

  @Input() view: HomeView;
  @Output() viewChange = new EventEmitter<string>();
  

  @Output() desenharPontos = new EventEmitter<{pontos: FeatureCollection, gps:LatLngTuple}>(); 
  @Output() apagarPontos = new EventEmitter(); 

  @Output() selecionarCoordenadas = new EventEmitter<string>();

  @ViewChild(PesquisaCoordenadasComponent) pesquisarComp: PesquisaCoordenadasComponent;
  coords: LatLngTuple;

  constructor(private PontosProximosProvider: PontosProximosProvider, public toastCtrl: ToastController) {
  }

  viewEstado(estado:HomeView){
    this.view = estado;
    this.viewChange.emit(this.view);
  }

  buscandoEstado(estado:boolean){
    this.buscando = estado;
    this.buscandoChange.emit(this.buscando);
  }

  BuscarPontos(coords:LatLngTuple){
    if(coords){
      this.buscandoEstado(true);
      this.apagarPontos.emit();
      this.PontosProximosProvider.get(coords[0], coords[1])
        .then(
          data => {
            if(this.debug) console.log("Pontos Proximos", data);            
            this.buscandoEstado(false);
            if(this.view == "PertoDeMim"){
              //this.desenharPontos.emit({pontos: data, gps:[-25.439512, -49.268947]}); //teste UTF
              this.desenharPontos.emit({pontos: data, gps:coords});
              if(data.features.length < 1){
                let toast = this.toastCtrl.create({
                  message: 'Nenhum ponto encontrado nesta área.',
                  position: 'bottom',
                  duration: 3000,
                  dismissOnPageChange: true
                });
                toast.present();
              }
            }
          },
          error => {
            let toast = this.toastCtrl.create({
              message: 'Houve um erro ao buscar os pontos próximos, tente fazer uma busca.',
              position: 'bottom',
              showCloseButton: true,
              closeButtonText: 'OK',
              dismissOnPageChange: true
            });
            toast.present();
            this.buscandoEstado(false);
            console.error(error); 
          }
        );
      } else {
        let toast = this.toastCtrl.create({
          message: 'Clique na barra de pesquisa.',
          position: 'top',
          duration: 3000,
          dismissOnPageChange: true
        });
        toast.present();
      }
  }

  SelecionarNoMapa(){
    this.selecionarCoordenadas.emit("PertoDeMim");
  }

  Voltar(){
    this.buscandoEstado(false);
    this.apagarPontos.emit();
    this.viewEstado("Padrao");
  }
  
}
