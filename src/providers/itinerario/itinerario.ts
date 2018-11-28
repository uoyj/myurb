import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as papa from 'papaparse';
import { FeatureCollection } from 'geojson';

import { LinhaFeature } from '../linhaFeature';
import { PontoFeature } from '../pontoFeature';
import { tuplaLinha/*, API_URL */ } from '../types';
import { PontosProvider } from '../pontos/pontos';
import { Linha } from '../linha';

@Injectable()
export class ItinerarioProvider {

  private readonly API_CSV =  'assets/data/itinerarios.csv';
  //private readonly API = API_URL + '/restfulapi/pontos/itinerarios';
                           

  constructor(private http: HttpClient, public PontosProvider:PontosProvider) {
  }
  
  /**
   * Promise de vetor com todas as linhas.
   * As Linhas são retornadas como um vetor de Feature e não FeatureCollection pois serão exibidas individualmente.
   */
  get(){
    let vm = this;
    return new Promise<{categorias:string[], linhas:LinhaFeature[]}>((resolve, reject) => {
      vm.http.get(vm.API_CSV, {responseType: 'text'})
      .subscribe(
        data => vm.extractCSV(data, resolve),
        err => reject(err)
      );
    });
  }
  private extractCSV(data, resolve){
    let retrieved = data || "";
    let parsing = {categorias:<string[]>[], linhas:<LinhaFeature[]>[]};

    papa.parse(retrieved, {
      header: true,
      step: function (row) {        
        let tupla:tuplaLinha = row.data[0];
        if (typeof tupla.geojson != 'undefined') {
          if (parsing.categorias.indexOf(tupla.categoria) < 0) parsing.categorias.push(tupla.categoria);
          parsing.linhas.push(new LinhaFeature(tupla));
        }
      }
    });
    resolve(parsing);
  }

  getPontos(codigo:string){
    return new Promise<FeatureCollection>((resolve, reject) => {
      let collection:FeatureCollection = {type:"FeatureCollection", features: []};
      let array:PontoFeature[] = [];

      this.PontosProvider.getLocal().then((data)=>{
        for(var p in data){
          if(this.encontrouLinha(codigo, data[p].properties.linhas)){
            array.push(data[p]);
          }
        }
        collection.features = array;
        resolve(collection);
      }, err => reject(err));

    });
  }

  encontrouLinha(codigo, linhas:Linha[]){
    for(let l of linhas){
      if(+l.codigo == codigo) return true;
    }
    return false;
  }

}
