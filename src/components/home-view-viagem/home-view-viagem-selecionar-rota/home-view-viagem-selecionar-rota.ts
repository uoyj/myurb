import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Rota } from '../../../providers/rota';
import { CaminhoFeature } from '../../../providers/caminhoFeature';
import { RotaComposta } from '../../../providers/rotaComposta';


@IonicPage()
@Component({
  selector: 'page-home-view-viagem-selecionar-rota',
  templateUrl: 'home-view-viagem-selecionar-rota.html',
})
export class HomeViewViagemSelecionarRotaPage {

  rotas: Rota[];
  rotasCompostas: RotaComposta[];
  caminhando: CaminhoFeature;
  filtro: string;
  minOcorrenciasIndex: number;
  maxOcorrenciasIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.rotas = navParams.data.rotas || [];
    this.rotasCompostas = navParams.data.rotasCompostas || [];
    this.caminhando = navParams.data.caminhando;    
    this.filtro = 'distancia';
    this.filtroChange(this.filtro);
  }

  Fechar(){
    this.viewCtrl.dismiss();
  }
  
  Caminhando(){
    this.viewCtrl.dismiss({
      rotaSelecionada: this.caminhando,
    });
  }

  SelecionaRota(rota:Rota|RotaComposta){
    this.viewCtrl.dismiss({
      rotaSelecionada: rota,
    });
  }

  ionViewDidLoad() {
  }

  filtroChange(event: string){
    if (event == "distancia") {
      this.rotas.sort((a, b) => {
        return this.rotaDist(a) - this.rotaDist(b);
      });
    } else if (event == "ocorrencias") {
      this.rotas.sort((a, b) => {
        return this.ocorrenciasQuantizadas(a) - this.ocorrenciasQuantizadas(b);
      });
      
      this.minOcorrenciasIndex = null;
      this.rotas.forEach((r,index)=>{
        if(this.minOcorrenciasIndex === null && this.ocorrenciasQuantizadas(r) !== null) this.minOcorrenciasIndex = index;
      })
      this.maxOcorrenciasIndex = this.rotas.length - 1;      
      
    } else if (event == "preco") {

    }
  }

  rotaDist(rota:Rota|RotaComposta){
    if(rota instanceof Rota){
      if(!rota.trecho_destino || !rota.trecho_origem) return null;
      return rota.trecho_destino.properties.distancia + rota.trecho_origem.properties.distancia;
    } else if (rota instanceof RotaComposta){
      let d_o =  this.rotaDist(rota.origem_terminal[0]);
      let t_d = this.rotaDist(rota.terminal_destino[0]);
       
      if(d_o == null && t_d == null) return null;
      else return d_o + t_d;
    }
  }

  ocorrenciasQuantizadas(rota:Rota|RotaComposta){
    if(rota instanceof Rota){
      if(!rota.linha || !rota.linha.ocorrencias) return null;
      let total = 0;
      rota.linha.ocorrencias.forEach((o)=>{
        total += o.peso * o.count_tipos;
      });
      return total;
    } else if (rota instanceof RotaComposta){
      return this.ocorrenciasQuantizadas(rota.origem_terminal[0]) + this.ocorrenciasQuantizadas(rota.terminal_destino[0]);
    }
  }
  
}
