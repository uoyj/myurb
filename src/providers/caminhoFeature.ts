import { Feature, MultiLineString } from 'geojson';
import { tuplaCaminho} from './types';

export class CaminhoFeature implements Feature{
    type: "Feature" = "Feature";
    properties: {distancia: number};
    geometry: MultiLineString;

    constructor (tupla:tuplaCaminho[]){
        this.properties = {distancia: tupla[tupla.length-1].accumulatedDistance}
        let latlngs = [];
        tupla.forEach(t => {
            latlngs.push([t.latitude, t.longitude])
        });
        this.geometry = {
            type: "MultiLineString",
            coordinates:[[...latlngs]]
        };
    }
}