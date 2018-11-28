import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LatLngTuple } from 'leaflet';
import { Linha } from '../linha';
@Injectable()
export class FavoritosProvider {

  private readonly CHAVE_FAVORITOS_ENDERECOS = 'favoritos-enderecos';
  private readonly CHAVE_FAVORITOS_HORARIOS = 'favoritos-horarios';

  constructor(private storage: Storage) {
    this.baseEnderecos().then(result => {
      if (!result) {        
        this.storage.set(this.CHAVE_FAVORITOS_ENDERECOS, [{},{}]);
      }
    });

    this.baseHorarios().then(result => {
      if (!result) {        
        this.storage.set(this.CHAVE_FAVORITOS_HORARIOS, {});
      }
    });
  }

  inserirEndereco(coords:LatLngTuple){
    return this.baseEnderecos().then(result => {
      if (result) {
        result.push({nome:null, coords:coords});
        return this.storage.set(this.CHAVE_FAVORITOS_ENDERECOS, result);
      }
    });
  }

  editarEnderecoCoords(coords:LatLngTuple, index:number){
    return this.baseEnderecos().then(result => {
      result[index].coords = coords;
      return this.storage.set(this.CHAVE_FAVORITOS_ENDERECOS, result);
    });
  }

  editarEnderecoNome(nome:string, index:number){
    return this.baseEnderecos().then(result => {
      result[index].nome = nome;
      return this.storage.set(this.CHAVE_FAVORITOS_ENDERECOS, result);
    });
  }

  baseEnderecos(){
    return this.storage.get(this.CHAVE_FAVORITOS_ENDERECOS);
  }

  removerEndereco(index) {
    return this.baseEnderecos().then(result => {
      if (result) {
        result.splice(index, 1);
        return this.storage.set(this.CHAVE_FAVORITOS_ENDERECOS, result);
      }
    });
  }

  baseHorarios(){
    return this.storage.get(this.CHAVE_FAVORITOS_HORARIOS);
  }

  favoritarHorario(linha:Linha){
    return this.baseHorarios().then(result => {
      if (result[linha.codigo]) {
        result[linha.codigo] = null;        
      } else {
        result[linha.codigo] = linha;
      }
      return this.storage.set(this.CHAVE_FAVORITOS_HORARIOS, result);
    });
  }

}
