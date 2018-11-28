import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { SobrePage } from '../pages/sobre/sobre';
//import { AlertaPage } from '../pages/alerta/alerta';
import { HorarioPage } from '../pages/horario/horario';
import { ItinerarioPage } from '../pages/itinerario/itinerario';
import { PontoPage } from '../pages/ponto/ponto';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { HorarioDetalhesPage } from '../pages/horario/horario-detalhes/horario-detalhes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  menuPages: any[];
  favoritosMeusHorarios: any[];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public FavoritosProvider:FavoritosProvider, public modalCtrl: ModalController) {
    this.initializeApp();

    this.menuPages = [
      { titulo: 'Início', component: HomePage, icone: "home" },
      { titulo: 'Itinerário', component: ItinerarioPage, icone: "bus" },
      { titulo: 'Horários', component: HorarioPage,icone: "clock" },
      { titulo: 'Pontos', component: PontoPage, icone: "pin" },
      { titulo: 'Gerenciar Favoritos', component: FavoritosPage, icone: "heart" },
      //{ titulo: 'Alertas', component: AlertaPage, icone: "alert" },
      { titulo: 'Código QR', component: QrcodePage, icone: "qr-scanner" },
      { titulo: 'Sobre', component: SobrePage, icone: "information-circle" }
    ];

    this.obterFavoritos();

  }

  abrirHorario(linha){
    linha.modalIndicador = true;
    let modal = this.modalCtrl.create(HorarioDetalhesPage, linha);
    modal.present();

  }

  obterFavoritos(){
    this.favoritosMeusHorarios = [];
    this.FavoritosProvider.baseHorarios().then(b=>{
      for (const key in b) {
        if (b.hasOwnProperty(key) && b[key]) {
          this.favoritosMeusHorarios.push(b[key]); //push linha
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}