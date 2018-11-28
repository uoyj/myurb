import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { HomePage } from '../home/home';
import { ItinerarioDetalhesPage } from './itinerario-detalhes/itinerario-detalhes';
import { ItinerarioProvider } from '../../providers/itinerario/itinerario';
import { LinhaFeature } from '../../providers/linhaFeature';

@IonicPage()
@Component({
  selector: 'page-itinerario',
  templateUrl: 'itinerario.html',
})
export class ItinerarioPage {
  categorias:string[] = [];
  linhas:LinhaFeature[] = [];
  linhas_filtradas:LinhaFeature[] = [];

  buscaControl:FormControl;
  buscando:boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private ItinerarioProvider: ItinerarioProvider) {
    this.buscaControl = new FormControl();
    this.buscando = true;
  }

  ionViewDidLoad() {
    let vm = this;

    vm.ItinerarioProvider.get()
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
      return (input===''|| item.properties.nome.toLowerCase().indexOf(input.toLowerCase()) > -1
        || item.properties.codigo == input);
    });    
  }

  onBuscaInput() {
    this.buscando = true;
  }

  exibirItinerario(l: LinhaFeature) {
    this.navCtrl.push(ItinerarioDetalhesPage, l);
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

}
