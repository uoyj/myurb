import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { QrcodePage } from './qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    QrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrcodePage),
  ],
  providers: [
    BarcodeScanner 
  ]
})
export class QrcodePageModule {}
