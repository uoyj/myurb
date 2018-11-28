import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, tuplaCrowdsourcingLinha } from '../types';

@Injectable()
export class CrowdsourcingProvider {

  private readonly API:string = API_URL + '/restfulapi/crowdsourcing/';
  private readonly options = { 
                              headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
                              };
  constructor(public http: HttpClient) {
  }
  
  crowdsourcingLinhas(obj:tuplaCrowdsourcingLinha){
    let data = this.encode(obj);
    console.log(data);
    return this.http.post(this.API+'cadastrar_crowdsourcing_linhas', data, this.options);
  }

  encode(obj:tuplaCrowdsourcingLinha){
    let data:URLSearchParams | string = new URLSearchParams();
    
    for(var p in obj){
      data.append(p, ''+obj[p]);
    }
    data = data.toString().replace("%3A", ':');
    return data;
  }
}
