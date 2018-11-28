import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LatLngTuple } from 'leaflet';
import { tuplaCaminho } from '../types';
import { CaminhoFeature } from '../caminhoFeature';

@Injectable()
export class CaminhoProvider {
  
  private readonly API = 'http://200.134.10.21:8080/route/shortest-path?';
  private readonly API_TESTE = 'assets/data/caminhoTesteCabralUTF.json';
  private readonly API_TESTE_TRECHOS = 'assets/data/buscaTesteCabralUTFTrechos.json';

  constructor(public http: HttpClient) {
  }

  get(origem:LatLngTuple, destino:LatLngTuple, debug?: boolean){    
    return new Promise<CaminhoFeature> ((resolve, reject) => {
      this.http.get<tuplaCaminho[]>(this.API+`sY=${origem[0]}&sX=${origem[1]}&eY=${destino[0]}&eX=${destino[1]}`)
      .subscribe(
        data => {
          if(data && data.length>0)resolve(new CaminhoFeature(data));
          else resolve(null);
        },
        err => reject(err)
      );
    });
  }

  getTeste(origem:LatLngTuple, destino:LatLngTuple, debug?: boolean){    
    return new Promise<CaminhoFeature> ((resolve, reject) => {
      this.http.get<tuplaCaminho[]>(this.API_TESTE)
      .subscribe(
        data => {
          if(data && data.length>0)resolve(new CaminhoFeature(data));
          else resolve(null);
        },
        err => reject(err)
      );
    });
  }

  getTrechosTeste(){
    return new Promise<CaminhoFeature[]> ((resolve, reject) => {
      this.http.get<any[]>(this.API_TESTE_TRECHOS)
      .subscribe(
        data => {
          let trechos = [];
          data.forEach(d => {
            trechos.push(new CaminhoFeature(d));
          });
          resolve(trechos);
        },
        err => reject(err)
      );
    });
    
  }

}
