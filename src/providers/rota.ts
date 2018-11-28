import { Ponto} from "./ponto";
import { Linha } from "./linha";
import { tuplaRota} from "./types"
import { PontoFeature } from "./pontoFeature";
import { FeatureCollection, Point } from "geojson";
import { LatLngTuple } from "leaflet";
import { CaminhoFeature } from "./caminhoFeature";

/**
 * Representa uma rota entre dois pontos de ônibus.
 */
export class Rota {
    codigo_linha: number;
    coords_ponto_inicial: LatLngTuple;
    coords_ponto_final: LatLngTuple;
    dados_ponto_origem: Ponto;
    dados_ponto_destino: Ponto;
    direcao: string;
    linha: Linha;
    trecho_origem: CaminhoFeature;
    trecho_destino: CaminhoFeature;
    info_rota: FeatureCollection = {type:"FeatureCollection", features:<PontoFeature[]>[]};
    
    constructor(tRota: tuplaRota){    
        this.codigo_linha = +tRota.codigo_linha;

        tRota.info_rota.forEach(ponto => {
            this.info_rota.features.push(new PontoFeature(ponto));
        });

        let pontoInicial = <Point> this.info_rota.features[0].geometry;
        this.coords_ponto_inicial = <LatLngTuple> [pontoInicial.coordinates[1], pontoInicial.coordinates[0]];
        let pontoFinal = <Point> this.info_rota.features[this.info_rota.features.length -1].geometry;
        this.coords_ponto_final = <LatLngTuple> [pontoFinal.coordinates[1], pontoFinal.coordinates[0]];

        this.dados_ponto_origem = new Ponto(tRota.dados_ponto_origem);
        this.dados_ponto_destino = new Ponto(tRota.dados_ponto_destino);
        this.direcao = tRota.direcao;
        this.linha = new Linha(tRota.dados_linha);
    }    

}
