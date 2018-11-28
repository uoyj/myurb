import { tuplaHorario } from "./types";

/**
 * Representa um conjunto de horários para um determinado ponto de parada.
 */
export class Parada {
    numero:string;
    nome:string;
    diasUteis:{horario:string, adaptado:boolean}[] = [];
    sabado:{horario:string, adaptado:boolean}[] = [];
    domingo:{horario:string, adaptado:boolean}[] = [];

    constructor(tupla: tuplaHorario){
        this.numero = tupla.numero_ponto;
        this.nome = tupla.ponto;
        this.adicionarHorario(tupla);
    }

    adicionarHorario(tupla: tuplaHorario){
        let thisAdaptado = false;
        if(tupla.adaptado != "") thisAdaptado = true;
        if (tupla.tipo_dia == "1") {
            this.diasUteis.push({ horario: tupla.horario_saida.substring(0, 5), adaptado: thisAdaptado });
        } else if (tupla.tipo_dia == "2") {
            this.sabado.push({ horario: tupla.horario_saida.substring(0, 5), adaptado: thisAdaptado });
        } else if (tupla.tipo_dia == "3") {
            this.domingo.push({ horario: tupla.horario_saida.substring(0, 5), adaptado: thisAdaptado });
        }
    }
}