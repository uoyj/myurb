import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as papa from 'papaparse';

import { Linha } from '../linha';
import { Parada } from '../parada';
import { tuplaLinha, tuplaHorario } from '../types';

/*
  Generated class for the HorarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HorarioProvider {

  private readonly APICSV = {linhas: 'assets/data/linhas.csv', horarios: 'assets/data/horarios.csv'};
  /*private readonly API = {linhas: 'http://myurb-tcc2-tcc2.a3c1.starter-us-west-1.openshiftapps.com/restfulapi/pontos/linhas',
                            horarios: 'http://myurb-tcc2-tcc2.a3c1.starter-us-west-1.openshiftapps.com/restfulapi/pontos/horarios'};*/


  constructor(public http: HttpClient) {
  }

  /**
   * Retorna um vetor com as Paradas (conjunto de pontos e horários que a linha passa por eles).
   * @param codigo - codigo da linha de ônibus.
   */
  get(codigo:string){
    let vm = this;
    return new Promise<Parada[]>((resolve, reject) => {
      vm.http.get(vm.APICSV.horarios, {responseType: 'text'})
      .subscribe(
        data => vm.extractCSV(data, codigo, resolve),
        err => reject(err)
      )
    });
  }
  private extractCSV(data, codigo:string, resolve){
    let retrieved = data || "";
    let parsing = <Parada[]>[];
    papa.parse(retrieved, {
      header: true,
      step: function(row){
        let tupla:tuplaHorario = row.data[0];
        if(tupla.codigo_linha == codigo){
          let achouParada = false;
          for(let p of parsing){
            if(p.numero == tupla.numero_ponto){
              p.adicionarHorario(tupla);
              achouParada = true;
            }
          }
          if(achouParada == false) parsing.push(new Parada(tupla));
        }
      }
    });

    resolve(parsing);
  }

  getLinhas(){
    let vm = this;
    return new Promise<{categorias:string[], linhas:Linha[]}>((resolve, reject) => {
      vm.http.get(vm.APICSV.linhas, {responseType: 'text'})
      .subscribe(
        data => vm.extractLinhasCSV(data, resolve),
        err => reject(err)
      );
    });
  }
  private extractLinhasCSV(data, resolve){    
    
    let retrieved = data || "";
    let parsing = {categorias:<string[]>[], linhas:<Linha[]>[]};

    papa.parse(retrieved, {
      header: true,
      step: function (row) {    
        let tupla:tuplaLinha = row.data[0];
        if (tupla.codigo_linha != "") {
          if (parsing.categorias.indexOf(tupla.categoria) < 0) parsing.categorias.push(tupla.categoria);
          parsing.linhas.push(new Linha(tupla));
        }
      }      
    });

    resolve(parsing);
  }

}
