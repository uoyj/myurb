import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { HomePage } from '../home/home';

import { HorarioDetalhesPage } from './horario-detalhes/horario-detalhes';
import { HorarioProvider } from '../../providers/horario/horario';
import { Linha } from '../../providers/linha';

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
  categorias:string[] = [];
  linhas:Linha[] = [];
  linhas_filtradas:Linha[] = [];
  linhas_filtradas_categorias:any[] = [];

  buscaControl:FormControl;
  buscando:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HorarioProvider: HorarioProvider) {
    this.buscaControl = new FormControl();
    this.buscando = true;
  }

  ionViewDidLoad() {
    let vm = this;

    vm.HorarioProvider.getLinhas()
    .then(
      data => {
        vm.categorias = data.categorias;
        vm.linhas = data.linhas;
        vm.filtrarLinhas('');
        vm.buscando = false;
      },
      error => console.error(error)
    );    

    vm.buscaControl.valueChanges.debounceTime(700)
    .subscribe(input => {
      vm.filtrarLinhas(input);
      vm.buscando = false;
    });
  }

  filtrarLinhas(input) {
    let vm = this;
    vm.linhas_filtradas = vm.linhas.filter((item) => {
      return (input===''|| item.nome.toLowerCase().indexOf(input.toLowerCase()) > -1
        || item.codigo == input);
    });    
  }

  onBuscaInput() {
    this.buscando = true;
  }

  exibirHorario(linha: Linha) {
    this.navCtrl.push(HorarioDetalhesPage, linha);
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }
}