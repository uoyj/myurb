import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Linha } from '../../../providers/linha';
import { HorarioProvider } from '../../../providers/horario/horario';
import { Parada } from '../../../providers/parada';
import { FavoritosProvider } from '../../../providers/favoritos/favoritos';

@IonicPage()
@Component({
  selector: 'page-horario-detalhes',
  templateUrl: 'horario-detalhes.html',
})
export class HorarioDetalhesPage {
  linha:Linha;
  paradas:Parada[] = [];
  carregou:boolean;
  diaSelecionado:string = "diasUteis";
  favoritado: boolean;
  modalIndicador: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private HorarioProvider: HorarioProvider,
              public FavoritosProvider:FavoritosProvider, public viewCtrl:ViewController) {
    this.linha = navParams.data;
    if(navParams.data.modalIndicador) this.modalIndicador = true;
    this.carregou = false;
  }

  ionViewDidLoad() {
    this.HorarioProvider.get(this.linha.codigo)
    .then(
      data => {
        this.paradas = data; 
        this.carregou = true;
      },
      error => console.error(error)
    );
    this.FavoritosProvider.baseHorarios().then((b)=>{          
      if(b && b[this.linha.codigo]) this.favoritado = true;
      else this.favoritado = false;
    });
  }

  favoritar(){
    this.FavoritosProvider.favoritarHorario(this.linha).then((r)=>{
      this.favoritado = !this.favoritado;
      /* this.FavoritosProvider.baseHorarios().then((b)=>{      
        console.log(b);
      }); */
    });
  }

  Fechar(){
    this.viewCtrl.dismiss();
  }

}
