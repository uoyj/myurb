import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Rota } from '../rota';
import { PontosProximosProvider } from '../pontos-proximos/pontos-proximos';
import { LatLngTuple } from 'leaflet';
import { PontoSimples } from '../pontoFeature';
import { tuplaRota } from '../types';
import { CaminhoProvider } from '../caminho/caminho';
import { RotaComposta } from '../rotaComposta';
import { RotaProvider } from '../rota/rota';

@Injectable()
export class BuscaSimplesProvider {

  private readonly API_TESTE = 'assets/data/buscaTesteCabralUTF.json';
  private readonly API_TESTE_COMPOSTO = 'assets/data/buscaTesteComposto108030Para180335.json';

  constructor(public http: HttpClient, private PontosProximosProvider: PontosProximosProvider, 
    private RotaProvider: RotaProvider, public CaminhoProvider: CaminhoProvider) {
  }

  /**
   * @param origem - [lat, long] do local de origem.
   * @param destino - [lat, long] do local de destino.
   * @param debug - ativa console.log() para pontos próximos e rotas obtidas.
   * Busca as rotas combinando os pontos de origem e destino dois a dois.
   */
  get(origem:LatLngTuple, destino:LatLngTuple, debug?: boolean){
    return new Promise<Rota[]> ((resolve, reject) => {
      Promise.all([
        this.PontosProximosProvider.getSimples(origem[0], origem[1]),
        this.PontosProximosProvider.getSimples(destino[0], destino[1])
      ]).then(
        pontos =>{
          if(debug) console.log("Pontos Proximos", pontos);
          this.combinarPontos("Simples", pontos, origem, destino, debug)
          .then(rotas => {
            if(debug) console.log("Rotas obtidas", rotas);
            resolve(rotas);
          });
        },
        err => {
          reject(err);
      });
    });
  }

  getComposta(origem:LatLngTuple, destino:LatLngTuple, debug?: boolean){
    return new Promise<Rota[]> ((resolve, reject) => {
      Promise.all([
        this.PontosProximosProvider.getSimples(origem[0], origem[1]),
        this.PontosProximosProvider.getSimples(destino[0], destino[1])
      ]).then(
        pontos =>{
          if(debug) console.log("Pontos Proximos", pontos);
          this.combinarPontos("Composta", pontos, origem, destino, debug)
          .then(rotas => {
            if(debug) console.log("Rotas obtidas", rotas);
            resolve(rotas);
          });
        },
        err => {
          reject(err);
      });
    });
  }

  private combinarPontos(tipo:string, pontos:PontosBuscaRota, origem:LatLngTuple, destino:LatLngTuple, debug?:boolean) {    
    return new Promise<Rota[]> ((resolve, reject) => {
      if(!pontos[0] || !pontos[1]) return null;

      let promises = []
      pontos[0].forEach((pontoDaOrigem) => {
        pontos[1].forEach((pontoDoDestino) => {
          if(tipo=="Simples") promises.push(this.RotaProvider.getRota(pontoDaOrigem.numero_ponto, pontoDoDestino.numero_ponto, origem, destino, debug));
          else if(tipo=="Composta") promises.push(this.RotaProvider.getRotaComposta(pontoDaOrigem.numero_ponto, pontoDoDestino.numero_ponto, origem, destino, debug));
        });
      });

      let rotas = [];
      if(tipo=="Simples"){
        Promise.all<Rota[]>(promises).then(responses=>{
          responses.forEach(rota => {
            if(rota.length > 0){
              rota.forEach(r => {
                rotas.push(r);
              });
            }
          });
  
          resolve(rotas);
        }, err=>console.error(err));
      } else if(tipo=="Composta"){
        Promise.all<RotaComposta[]>(promises).then(responses=>{
          responses.forEach(rota => {
            if(rota.length > 0){
              rota.forEach(r => {
                if(r.origem_terminal.length>0 && r.terminal_destino.length>0) rotas.push(r);
              });
            }
          });
  
          resolve(rotas);
        }, err=>console.error(err));
      }
      
      
    }); //end return new Promise
  }

 

  getBuscaTeste(origem?:LatLngTuple, destino?:LatLngTuple, debug?: boolean){
    return new Promise<Rota[]> (resolve => {
      this.http.get<tuplaRota[]>(this.API_TESTE)
      .subscribe(tuplas => {
        let rotas = [];
        tuplas.forEach((rota,index) => {            
          rotas[index] = new Rota(rota);
        });
        this.CaminhoProvider.getTrechosTeste().then(data=>{
          let trechos = data;
          let i=0;
          rotas.forEach((rota:Rota)=>{
            rota.trecho_origem = trechos[i];
            i++;
            rota.trecho_destino = trechos[i];
            i++;          
          });
          if(debug) console.log("Rotas obtidas", rotas);
          resolve(rotas);
        });
        /* BUSCA TRECHOS */
       /*  let caminhoPromises = [];
        rotas.forEach((rota)=>{
          caminhoPromises.push(this.CaminhoProvider.get(origem, rota.coords_ponto_inicial));
          caminhoPromises.push(this.CaminhoProvider.get(rota.coords_ponto_final, destino));
        });
        Promise.all(caminhoPromises).then((trechos)=>{
          let i=0;
          rotas.forEach((rota:Rota)=>{
            rota.trecho_origem = trechos[i];
            i++;
            rota.trecho_destino = trechos[i];
            i++;          
          });
          console.log(trechos);
          resolve(rotas);
        }); */
      });
    });
  }

  getBuscaTesteComposta(origem, destino, debug:boolean){
    return new Promise<RotaComposta[]> ((resolve) => {
      this.http.get<any[]>(this.API_TESTE_COMPOSTO)
      .subscribe(tuplas => {
          if(debug) console.log("Rotas Compostas obtidas", tuplas);
          let r = [];
          tuplas.forEach(t => {
            r.push(new RotaComposta(t));
          });
          resolve(r);
      });
    });
  }

}

type PontosBuscaRota = [PontoSimples[], PontoSimples[]]
