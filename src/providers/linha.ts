import { tuplaLinha } from "./types";

export class Linha {
    apenas_cartao:boolean;
    categoria:string;
    codigo:string;
    cor:string;
    nome:string;
    ocorrencias?: any[];
    constructor (tupla: tuplaLinha){
        this.codigo = tupla.codigo_linha;
        this.nome = tupla.nome_linha;
        this.cor = tupla.cor.toLowerCase();
        this.apenas_cartao = tupla.apenas_cartao == 'S' ? true : false;
        this.categoria = tupla.categoria;
        if(tupla.ocorrencias) this.ocorrencias = tupla.ocorrencias;
    }
}