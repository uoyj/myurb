import { Linha } from './linha';
import { Feature, MultiLineString } from 'geojson';
import { tuplaLinha } from './types';

export class LinhaFeature implements Feature{
    type: "Feature" = "Feature";
    properties: Linha;
    geometry: MultiLineString;

    constructor (tupla:tuplaLinha){
        if(tupla.categoria == "EXPRESSO LIGEIRÃO") tupla.categoria = "LIGEIRÃO";
        this.properties = new Linha(tupla);
        this.geometry = (JSON.parse(tupla.geojson));
    }
}