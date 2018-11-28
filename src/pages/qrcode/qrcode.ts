import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PontosProvider } from '../../providers/pontos/pontos';
import { PontoFeature } from '../../providers/pontoFeature';

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  testQR: string;
  ponto: PontoFeature;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner:BarcodeScanner,
              private PontosProvider: PontosProvider, public toastCtrl:ToastController,) {
  }

  voltar() {
    this.navCtrl.setRoot(HomePage);
  }

  Test(){
    this.PontosProvider.getLocal().
    then((data)=>{
      if(data[this.testQR]) this.ponto = data[this.testQR];
      else {
        let toast = this.toastCtrl.create({
          message: 'Não encontrei o ponto ' + this.testQR,
          position: 'bottom',
          showCloseButton: true,
          closeButtonText: 'OK',
          dismissOnPageChange: true
        });

        toast.present();
      }
    });
  }

  Click(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.PontosProvider.getLocal().
      then((data)=>{
        if(data[barcodeData.text]) this.ponto = data[barcodeData.text];
        else {
          let toast = this.toastCtrl.create({
            message: 'Não encontrei o ponto ' + barcodeData.text,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK',
            dismissOnPageChange: true
          });

          toast.present();
        }
      });
     }).catch(err => {
        let toast = this.toastCtrl.create({
          message: 'Erro na leitura.',
          position: 'bottom',
          showCloseButton: true,
          closeButtonText: 'OK',
          dismissOnPageChange: true
        });

        toast.present();
         console.log('Error', err);
     });
  }
}