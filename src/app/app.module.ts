import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { QrcodePageModule } from '../pages/qrcode/qrcode.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { AlertaPageModule } from '../pages/alerta/alerta.module';
import { PontoPageModule } from '../pages/ponto/ponto.module';
import { HorarioPageModule } from '../pages/horario/horario.module';
import { HorarioDetalhesPageModule } from '../pages/horario/horario-detalhes/horario-detalhes.module';
import { ItinerarioPageModule } from '../pages/itinerario/itinerario.module';
import { ItinerarioDetalhesPageModule } from '../pages/itinerario/itinerario-detalhes/itinerario-detalhes.module';
import { HomeViewViagemReportarPageModule } from '../components/home-view-viagem/home-view-viagem-reportar/home-view-viagem-reportar.module'
import { FavoritosPageModule } from '../pages/favoritos/favoritos.module'

import { ItinerarioProvider } from '../providers/itinerario/itinerario';
import { HorarioProvider } from '../providers/horario/horario';
import { PontosProximosProvider } from '../providers/pontos-proximos/pontos-proximos';
import { BuscaSimplesProvider } from '../providers/busca-simples/busca-simples';
import { PontosProvider } from '../providers/pontos/pontos';
import { PesquisaCoordenadasModalPageModule } from '../components/pesquisa-coordenadas/pesquisa-coordenadas-modal/pesquisa-coordenadas-modal.module';
import { CaminhoProvider } from '../providers/caminho/caminho';
import { HomeViewViagemSelecionarRotaPageModule } from '../components/home-view-viagem/home-view-viagem-selecionar-rota/home-view-viagem-selecionar-rota.module';
import { CrowdsourcingProvider } from '../providers/crowdsourcing/crowdsourcing';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { PesquisaCoordenadasModalComMapaPageModule } from '../components/pesquisa-coordenadas/pesquisa-coordenadas-modal-com-mapa/pesquisa-coordenadas-modal-com-mapa.module'
import { RotaProvider } from '../providers/rota/rota';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      dayNames: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ComponentsModule,
    QrcodePageModule,
    SobrePageModule,
    AlertaPageModule,
    HorarioPageModule,
    HorarioDetalhesPageModule,
    ItinerarioPageModule,
    ItinerarioDetalhesPageModule,    
    PontoPageModule,
    PesquisaCoordenadasModalPageModule,
    HomeViewViagemReportarPageModule,
    HomeViewViagemSelecionarRotaPageModule,
    FavoritosPageModule,
    PesquisaCoordenadasModalComMapaPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HorarioProvider,
    ItinerarioProvider,
    PontosProximosProvider,
    RotaProvider,
    BuscaSimplesProvider,
    PontosProvider,
    CaminhoProvider,
    CrowdsourcingProvider,
    FavoritosProvider,
  ]
})
export class AppModule {}
