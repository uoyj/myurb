import { Rota } from "./rota";
import { tuplaRota } from "./types";

export class RotaComposta{
    origem_terminal:Rota[] = [];
    terminal_destino:Rota[] = [];
    constructor(tupla:any){
        
        tupla.origem_terminal.forEach(r => {
            let tR:tuplaRota = {
                codigo_linha:r.codigo_linha, dados_ponto_origem: r.dados_ponto_origem,
                dados_ponto_destino:r.dados_ponto_desembarque, direcao:r.direcao, 
                info_rota:r.info_rota_primeira, dados_linha: r.dados_primeira_linha
            }             
            this.origem_terminal.push(new Rota(tR));
        });

        tupla.terminal_destino.forEach(r => {
            let tR:tuplaRota = {
                codigo_linha:r.codigo_linha, dados_ponto_origem: r.dados_ponto_embarque,
                dados_ponto_destino:r.dados_ponto_destino, direcao:r.direcao, 
                info_rota:r.info_rota_segunda, dados_linha: r.dados_segunda_linha
            }             
            this.terminal_destino.push(new Rota(tR));
        });
    }

}