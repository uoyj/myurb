import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { Layer } from 'leaflet';

export class OSMResultado{
    bounds: number[][];
    label: string;
    raw: Object;
    x: number;
    y: number;
}
  
export class OSMBusca {
    busca: string;
    resultados: OSMResultado[];
    mostrar: number = 0;
    OSMProvider: OpenStreetMapProvider;
    layers: Layer[] = [];
    debug: boolean = false;

    constructor(debug?:boolean){
        this.OSMProvider = new OpenStreetMapProvider();
        this.debug = debug;
    }

    onInput(){
        let vm = this;
        if(vm.mostrar == 1) {
            vm.mostrar = 2;
        }
        else if (vm.mostrar == 2) {
            vm.mostrar = 0;
            vm.resultados = [];
        }

        if(vm.mostrar == 0){
            if(typeof vm.busca == "undefined" || vm.busca == ""){
            vm.resultados = [];
            } else {
            vm.OSMProvider.search({ query: vm.busca + " curitiba" })
            .then(function(result: OSMResultado[]){
                vm.resultados = result;
                if(vm.debug)console.log(result);
            }, function(error){
                console.error(error);
                vm.resultados = [];
            });
            }
        }
    }

    click(resultado, index){
        let vm = this;
        vm.busca = resultado.label;
        vm.mostrar = 1;
        vm.resultados = [vm.resultados[index]];
    }
}