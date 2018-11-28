import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FeatureCollection } from 'geojson';
import { PontoFeature, PontoSimples } from '../pontoFeature';
import { tuplaPonto, API_URL } from '../types';

@Injectable()
export class PontosProximosProvider {

  private readonly API:string = API_URL + '/restfulapi/pontos/pontos_proximos?';
  private readonly APISimples:string = API_URL + '/restfulapi/pontos/pontos_proximos_simplificado?';
  private readonly APITeste:string = 'assets/data/pertoDeMimTesteUTF.json';
  
  constructor(private http: HttpClient) {
  }
  
  get(lat:number|string, long:number|string){
    return new Promise<FeatureCollection>((resolve, reject) => {
      this.http.get<tuplaPonto[]>(this.API+`longitude=${long}&latitude=${lat}`)
      .subscribe(        
        data => {
          this.extrair(data, resolve);
        },
        err => reject(err)
      );
    });
  }

  getTeste(lat?:number|string, long?:number|string){
    return new Promise<FeatureCollection>((resolve, reject) => {
      this.http.get<tuplaPonto[]>(this.APITeste)
      .subscribe(        
        data => {
          this.extrair(data, resolve);
        },
        err => reject(err)
      );
    });
  }

  private extrair(data:tuplaPonto[], resolve){    
    let pontosParsing = <FeatureCollection>{type: "FeatureCollection", features:<PontoFeature[]>[]};
    data.forEach(ponto => {
      let achou = false;
      for (let p of pontosParsing.features) {
        if(p.properties.numero_ponto == ponto.numero_ponto){
          achou = true;
          p.properties.adicionarLinha(ponto);
          break;
        }
      }
      if(achou == false) pontosParsing.features.push(new PontoFeature(ponto));
    });
    resolve(pontosParsing);
  }

  getSimples(lat:number|string, long:number|string){
    return new Promise<PontoSimples[]>((resolve, reject) => {
      this.http.get<PontoSimples[]>(this.APISimples+`longitude=${long}&latitude=${lat}`)
      .subscribe(
        data => {
          resolve(data);
        },
        err => reject(err)
      );
    });
  }
}