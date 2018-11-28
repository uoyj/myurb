import { Linha } from "./linha";
import { tuplaPonto } from "./types";

/**
 * Representa um ponto de ônibus.
 */
export class Ponto { 
    endereco: string;
    numero_ponto: number;
    tipo: string;
    linhas? = <Linha[]>[];

    constructor (tupla:tuplaPonto){
        this.endereco = tupla.endereco;
        this.numero_ponto = tupla.numero_ponto;
        this.tipo = tupla.tipo;
        if(tupla.codigo_linha) this.linhas.push(new Linha(tupla));
    }

    adicionarLinha(tupla:tuplaPonto){
        let vm = this;

        let achouLinha = false;
        for (let l of vm.linhas) {
          if (l.codigo == tupla.codigo_linha) {
            achouLinha = true;
          }
        }

        if (achouLinha == false){
            vm.linhas.push(new Linha(tupla));
        }
    }
}
