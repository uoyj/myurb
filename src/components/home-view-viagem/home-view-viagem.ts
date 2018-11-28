import { Component, Input,  Output, EventEmitter} from '@angular/core';
import { ActionSheetController, ModalController, ToastController } from 'ionic-angular';

import { BuscaSimplesProvider } from '../../providers/busca-simples/busca-simples';
import { CoordenadasBusca } from '../../pages/home/home';
import { Rota } from '../../providers/rota';

import { HomeViewViagemReportarPage } from './home-view-viagem-reportar/home-view-viagem-reportar';
import { CaminhoProvider } from '../../providers/caminho/caminho';
import { CaminhoFeature } from '../../providers/caminhoFeature';
import { HomeView } from '../../providers/types';
import { HomeViewViagemSelecionarRotaPage } from './home-view-viagem-selecionar-rota/home-view-viagem-selecionar-rota';
import { RotaComposta } from '../../providers/rotaComposta';

@Component({
  selector: 'home-view-viagem',
  templateUrl: 'home-view-viagem.html'
})
export class HomeViewViagemComponent {

  @Input() buscando: boolean;
  @Output() buscandoChange = new EventEmitter<boolean>();
  
  @Input() view: HomeView;
  @Output() viewChange = new EventEmitter<HomeView>();

  @Input() debug: boolean;

  @Output() desenharRota = new EventEmitter<Rota>(); 
  @Output() apagarRota = new EventEmitter(); 

  @Output() desenharCaminho = new EventEmitter<CaminhoFeature>(); 
  @Output() apagarCaminhos = new EventEmitter(); 

  rotas: Rota[] | RotaComposta[] = []; //Rota[] | RotaComposta[]
  rotaSelecionada: Rota | CaminhoFeature | RotaComposta;
  caminhando: CaminhoFeature;

  inicio: any;
  fim: any;
  confirmado: boolean;
  

  constructor(public BuscaSimplesProvider: BuscaSimplesProvider, public actionSheetCtrl: ActionSheetController,
              public modalCtrl: ModalController, public toastCtrl:ToastController,
              public CaminhoProvider: CaminhoProvider) {
  }
  

  buscandoEstado(estado:boolean){
    this.buscando = estado;
    this.buscandoChange.emit(this.buscando);
  }

  viewEstado(estado:HomeView){
    this.view = estado;
    this.viewChange.emit(this.view);
  }

  Voltar(){
    this.buscandoEstado(false);
    this.apagarRota.emit();
    this.apagarCaminhos.emit();
    this.viewEstado("Padrao");
  }


  BuscarRotas(cBus:CoordenadasBusca){
    this.confirmado = false;
    this.rotaSelecionada = null;
    if(this.debug) console.log(cBus);
    Promise.all([
    this.BuscaSimplesProvider.get(
      cBus.origem, cBus.destino, this.debug
    ),
    this.CaminhoProvider.getTeste(cBus.origem, cBus.destino, this.debug),
    ]).then(rotas => {      
      this.rotas = rotas[0];
      this.caminhando = null
      //this.caminhando = rotas[1];
      if(this.debug) console.log("A pé obtido", this.caminhando);
      this.buscandoEstado(false);
      if(this.view == "Viagem"){
        if(this.rotas.length < 1){
          this.BuscarRotaComposta(cBus);
          this.buscandoEstado(true);
        } else {
          this.EscolherRota();
        }
      } 
    }, err =>{
      this.buscandoEstado(false);
      console.error(err);
    });
  }

  BuscarRotaComposta(cBus:CoordenadasBusca){
    this.confirmado = false;
    this.rotaSelecionada = null;
    if(this.debug) console.log(cBus);
    Promise.all([
    this.BuscaSimplesProvider.getComposta(
      cBus.origem, cBus.destino, this.debug
    ),
    this.CaminhoProvider.getTeste(cBus.origem, cBus.destino, this.debug),
    ]).then(rotas => {      
      this.rotas = rotas[0];
      this.caminhando = null
      //this.caminhando = rotas[1];
      if(this.debug) console.log("A pé obtido", this.caminhando);
      this.buscandoEstado(false);
      if(this.view == "Viagem") this.EscolherRota();
    }, err =>{
      this.buscandoEstado(false);
      console.error(err);
    });
  }

  EscolherRota(){
    if(this.buscando){
      let toast = this.toastCtrl.create({
        message: 'A busca ainda não terminou.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
    } else if(!this.caminhando && this.rotas.length < 1) {
      let toast = this.toastCtrl.create({
        message: 'Não foi possível encontrar nenhum caminho.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
    } else {
      let modal;
      if(this.rotas[0] instanceof Rota){
         modal = this.modalCtrl.create(HomeViewViagemSelecionarRotaPage, {rotas: this.rotas, caminhando: this.caminhando});
      } else {
         modal = this.modalCtrl.create(HomeViewViagemSelecionarRotaPage, {rotasCompostas: this.rotas, caminhando: this.caminhando});
      }
      modal.onDidDismiss((data) => {
        if(data){
          this.apagarCaminhos.emit()
          this.apagarRota.emit();
          this.rotaSelecionada = data.rotaSelecionada;
          console.log("Rota Selecionada:", this.rotaSelecionada);
          if(this.rotaSelecionada instanceof CaminhoFeature){
            this.desenharCaminho.emit(this.rotaSelecionada);
          } else if (this.rotaSelecionada instanceof Rota) {
            this.desenharRota.emit(this.rotaSelecionada);
          } else if (this.rotaSelecionada instanceof RotaComposta){            
            this.desenharRota.emit(this.rotaSelecionada.terminal_destino[0]);
            this.desenharRota.emit(this.rotaSelecionada.origem_terminal[0]);
          }
        }
      });
      modal.present();
    }
    
  }

  Reportar(){
    if(this.rotaSelecionada instanceof Rota){
      let modal = this.modalCtrl.create(HomeViewViagemReportarPage, this.rotaSelecionada);
      modal.present();
    } else if(this.rotaSelecionada instanceof RotaComposta) {
      let opts = [];
      let rS:RotaComposta = this.rotaSelecionada;
      opts.push({text:rS.origem_terminal[0].linha.nome,
        handler:()=>{
          let modal = this.modalCtrl.create(HomeViewViagemReportarPage, rS.origem_terminal[0]);
          modal.present();
        }
      });
      opts.push({text:rS.terminal_destino[0].linha.nome,
        handler:()=>{
          let modal = this.modalCtrl.create(HomeViewViagemReportarPage, rS.terminal_destino[0]);
          modal.present();
        }
      });
      opts.push({text:'Cancelar', role:'cancel'});

      let actionSheet = this.actionSheetCtrl.create({
        title: 'Reportar qual linha?',
        buttons: opts
      });
      actionSheet.present();
    } else if(this.rotaSelecionada instanceof CaminhoFeature) {
      let toast = this.toastCtrl.create({
        message: 'Não é possível reportar caminho a pé.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Selecione uma rota antes de reportar.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
    }
  }

  Confirmar(){
    if(this.rotaSelecionada ){
      this.confirmado = true;
    } else {
      let toast = this.toastCtrl.create({
        message: 'Selecione uma rota antes de prosseguir.',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'OK',
        dismissOnPageChange: true
      });
      toast.present();
    }
  }

}
