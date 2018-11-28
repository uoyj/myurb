import * as moment from 'moment-timezone';

import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Rota } from '../../../providers/rota';
import { CrowdsourcingProvider } from '../../../providers/crowdsourcing/crowdsourcing';
import { tuplaCrowdsourcingLinha } from '../../../providers/types';



@IonicPage()
@Component({
  selector: 'page-home-view-viagem-reportar',
  templateUrl: 'home-view-viagem-reportar.html',
})
export class HomeViewViagemReportarPage {

  rota: Rota;
  data: string ;
  report: Report;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
              public viewCtrl: ViewController, public datePipe: DatePipe, public crowdProv: CrowdsourcingProvider) {
    this.rota = navParams.data;
    /* this.data = new Date();
    this.data.setMinutes(this.data.getMinutes() - this.data.getTimezoneOffset()); */
    
    this.data = moment().tz('America/Sao_Paulo').format("YYYY-MM-DDTHH:mm");
    this.report = {tipo: '1', data: this.data, linha: this.rota.linha.nome}    
  }

  ionViewDidLoad() {
  }

  Fechar(){
    this.viewCtrl.dismiss();
  }

  Enviar() {
    let obj:tuplaCrowdsourcingLinha = {
      nivel: +this.report.tipo,
      tipo: +this.report.tipo,
      codigo_linha: ''+this.rota.codigo_linha,
      dia: moment(this.report.data).format("YYYY-MM-DD"),
      horario: moment(this.report.data).tz('America/Sao_Paulo').format("HH:mm"),
      lat: 0,
      lon: 0,
    };

    let toast = this.toastCtrl.create({
      message: 'Reportado!',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'OK',
      dismissOnPageChange: true
    });
    
    this.crowdProv.crowdsourcingLinhas(obj).subscribe((data)=>{
      toast.present();
    },(error)=>{
      console.error("erro", error);
      toast.present();
    });
    this.Fechar();
  }

}

type Report = {
  tipo: string;
  data: string ;
  linha?: string;
  pontos?: string;
}
