import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-alerta',
  templateUrl: 'alerta.html',
})
export class AlertaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

}
