import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { tuplaPonto/* , API_URL */} from '../types';
import { PontoFeature } from '../pontoFeature';

@Injectable()
export class PontosProvider {

  private readonly API_LOCAL = 'assets/data/pontos.json';
  //private readonly API =  API_URL + '/restfulapi/pontos/pontos';

  baseLocalPontos:{} = {}; //PontoFeature indexados
  baseLocalPronto:boolean = false;

  constructor(public http: HttpClient) {
    
  }

  /**
   * Retorna um vetor com as Paradas (conjunto de pontos e horários que a linha passa por eles).
   * @param codigo - codigo da linha de ônibus.
   */
  getLocal(){
    return new Promise<{}>((resolve, reject) => {
      if(this.baseLocalPronto) resolve(this.baseLocalPontos);
      else {
        this.http.get<tuplaPonto[]>(this.API_LOCAL)
        .subscribe( data => {
            this.baseLocalPontos = {};

            data.forEach(tupla => {
              if(this.baseLocalPontos[tupla.numero_ponto]) this.baseLocalPontos[tupla.numero_ponto].properties.adicionarLinha(tupla);
              else this.baseLocalPontos[tupla.numero_ponto] = new PontoFeature(tupla);
            });

            this.baseLocalPronto = true;
            resolve(this.baseLocalPontos);
          },
          err => reject(err)
        );
      }
    });
  }

  getArray(){
    return new Promise<PontoFeature[]>((resolve, reject) => {
      let array:PontoFeature[] = [];
      if(this.baseLocalPronto){
        for (let p in this.baseLocalPontos) {
          array.push(this.baseLocalPontos[p]);
        }
        resolve(array);
      } else {
        this.getLocal().
        then((data)=>{
          for (let p in this.baseLocalPontos) {
            array.push(this.baseLocalPontos[p]);
          }
          resolve(array);
        }, err=>{reject(err)})
      }
    });
  }

}
