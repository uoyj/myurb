import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  sobreInfo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sobreInfo= 'comoFunciona';
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

}
