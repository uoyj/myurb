import L from 'leaflet';
import { Feature, Point } from "geojson"
import { Ponto } from "./ponto";

/**
 * Representa pontos de ônibus num mapa leaflet.
 *  
 */
export class PontoFeature implements Feature{
    type: "Feature" = "Feature";
    properties: Ponto | PontoSimples;
    geometry: Point;

    constructor(tupla: any){
        this.type = "Feature";        
        this.geometry = JSON.parse(tupla.geojson);

        if(tupla.endereco && tupla.tipo) this.properties = new Ponto(tupla);
        else this.properties = {numero_ponto: tupla.numero_ponto};
    }

    static onEachPonto(feature:PontoFeature, layer) {        
        let linhasString = `<p>Ponto ${feature.properties.numero_ponto}</p>`
        
        if (feature.properties instanceof Ponto) {
          linhasString += `<span class='endereco'> ${feature.properties.endereco} </span> `;
          feature.properties.linhas.forEach(l => {
            linhasString += `<p><span class='codigo ${l.cor}'> ${l.codigo} </span> ${l.nome} </p>`;
          });          
        }

        layer.bindPopup(linhasString);
    }
  
    static pontoToLayer(feature:PontoFeature, LatLng) {
        
        let cor = "yellow";
        if (feature.properties instanceof Ponto) {
            let plataformas = ["estação tubo", "plataforma", "terminal"];
            if (plataformas.indexOf(feature.properties.tipo.toLowerCase()) > -1) {
                cor = "#0006FF";
            }
        }

        return L.circleMarker(LatLng, {
            radius: 8,
            fillColor: cor,
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }

    static pontoToLayerVerde(feature:PontoFeature, LatLng) {
        
        let cor = "lightgreen";
        if (feature.properties instanceof Ponto) {
            let plataformas = ["estação tubo", "plataforma", "terminal"];
            if (plataformas.indexOf(feature.properties.tipo.toLowerCase()) > -1) {
                cor = "#0006FF";
            }
        }

        return L.circleMarker(LatLng, {
            radius: 8,
            fillColor: cor,
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }

}

/**
 * Usado na Busca de Rotas, que não exibe informações de linhas de ônibus.
 */
export type PontoSimples = {numero_ponto: number};