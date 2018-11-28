import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { PesquisaCoordenadasComponent } from './pesquisa-coordenadas/pesquisa-coordenadas';
import { HomeViewPadraoComponent } from './home-view-padrao/home-view-padrao';
import { HomeViewViagemComponent } from './home-view-viagem/home-view-viagem';
import { HomeViewPertoDeMimComponent } from './home-view-perto-de-mim/home-view-perto-de-mim';
import { HomeViewSelecionarCoordenadasComponent } from './home-view-selecionar-coordenadas/home-view-selecionar-coordenadas';


@NgModule({
	declarations: [
    HomeViewPadraoComponent,
    HomeViewViagemComponent,
    HomeViewPertoDeMimComponent,
    PesquisaCoordenadasComponent,
    HomeViewSelecionarCoordenadasComponent,
    ],
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [
    HomeViewPadraoComponent,
    HomeViewViagemComponent,
    HomeViewPertoDeMimComponent,
    PesquisaCoordenadasComponent,
    HomeViewSelecionarCoordenadasComponent,
    ]
})
export class ComponentsModule {}
