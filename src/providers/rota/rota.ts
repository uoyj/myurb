import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Rota } from '../rota';
import { tuplaRota, API_URL } from '../types';
import { CaminhoProvider } from '../caminho/caminho';
import { LatLngTuple } from 'leaflet';
import { RotaComposta } from '../rotaComposta';

@Injectable()
export class RotaProvider {

  private readonly API = API_URL + "/restfulapi/rotas/rota_simples_dois_pontos?";
  private readonly API_COMPOSTA = API_URL + "/restfulapi/rotas/rota_conectada?";

  constructor(public http: HttpClient, public CaminhoProvider: CaminhoProvider) {
  }

  getRota(ponto_origem:number|string, ponto_destino:number|string, origem:LatLngTuple, destino:LatLngTuple,debug?:boolean){
    return new Promise<Rota[]>((resolve, reject) => {
    this.http.get<tuplaRota[]>(this.API+`numero_ponto_origem=${ponto_origem}&numero_ponto_destino=${ponto_destino}`)
      .subscribe(
        data => {
          if(debug) console.log(`numero_ponto_origem=${ponto_origem}&numero_ponto_destino=${ponto_destino}`,data);
          
          let rotas = [];
          
          if(data == null) resolve([]);
          else {
            //let caminhoPromises = [];
            data.forEach(rota => {
              rotas.push(new Rota(rota));            
              /* caminhoPromises.push(this.CaminhoProvider.get(origem, rotas[rotas.length-1].coords_ponto_inicial));
              caminhoPromises.push(this.CaminhoProvider.get(rotas[rotas.length-1].coords_ponto_final, destino)); */
            });
            resolve(rotas);
          }
        },
        err => {
            console.error(err);
            resolve([]);
          }
      );
    });
  }

  getRotaComposta(ponto_origem:number|string, ponto_destino:number|string, origem:LatLngTuple, destino:LatLngTuple,debug?:boolean){
    return new Promise<RotaComposta[]>((resolve, reject) => {
      this.http.get<any>(this.API_COMPOSTA+`numero_ponto_origem=${ponto_origem}&numero_ponto_destino=${ponto_destino}`)
        .subscribe(
          data => {
            if(debug) console.log(`numero_ponto_origem=${ponto_origem}&numero_ponto_destino=${ponto_destino}`,data);
            
            let rotas = [];
            
            if(data == null) resolve([]);
            else {
              //let caminhoPromises = [];
              data.forEach(rota => {
                rotas.push(new RotaComposta(rota));            
                /* caminhoPromises.push(this.CaminhoProvider.get(origem, rotas[rotas.length-1].coords_ponto_inicial));
                caminhoPromises.push(this.CaminhoProvider.get(rotas[rotas.length-1].coords_ponto_final, destino)); */
              });
              resolve(rotas);
            }
          },
          err => {
            console.error(err);
            resolve([]);
          }
        );
      });
  }
}