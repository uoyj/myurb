webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItinerarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linhaFeature__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pontos_pontos__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItinerarioProvider = /** @class */ (function () {
    //private readonly API = API_URL + '/restfulapi/pontos/itinerarios';
    function ItinerarioProvider(http, PontosProvider) {
        this.http = http;
        this.PontosProvider = PontosProvider;
        this.API_CSV = 'assets/data/itinerarios.csv';
    }
    /**
     * Promise de vetor com todas as linhas.
     * As Linhas são retornadas como um vetor de Feature e não FeatureCollection pois serão exibidas individualmente.
     */
    ItinerarioProvider.prototype.get = function () {
        var vm = this;
        return new Promise(function (resolve, reject) {
            vm.http.get(vm.API_CSV, { responseType: 'text' })
                .subscribe(function (data) { return vm.extractCSV(data, resolve); }, function (err) { return reject(err); });
        });
    };
    ItinerarioProvider.prototype.extractCSV = function (data, resolve) {
        var retrieved = data || "";
        var parsing = { categorias: [], linhas: [] };
        __WEBPACK_IMPORTED_MODULE_2_papaparse__["parse"](retrieved, {
            header: true,
            step: function (row) {
                var tupla = row.data[0];
                if (typeof tupla.geojson != 'undefined') {
                    if (parsing.categorias.indexOf(tupla.categoria) < 0)
                        parsing.categorias.push(tupla.categoria);
                    parsing.linhas.push(new __WEBPACK_IMPORTED_MODULE_3__linhaFeature__["a" /* LinhaFeature */](tupla));
                }
            }
        });
        resolve(parsing);
    };
    ItinerarioProvider.prototype.getPontos = function (codigo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var collection = { type: "FeatureCollection", features: [] };
            var array = [];
            _this.PontosProvider.getLocal().then(function (data) {
                for (var p in data) {
                    if (_this.encontrouLinha(codigo, data[p].properties.linhas)) {
                        array.push(data[p]);
                    }
                }
                collection.features = array;
                resolve(collection);
            }, function (err) { return reject(err); });
        });
    };
    ItinerarioProvider.prototype.encontrouLinha = function (codigo, linhas) {
        for (var _i = 0, linhas_1 = linhas; _i < linhas_1.length; _i++) {
            var l = linhas_1[_i];
            if (+l.codigo == codigo)
                return true;
        }
        return false;
    };
    ItinerarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__pontos_pontos__["a" /* PontosProvider */]])
    ], ItinerarioProvider);
    return ItinerarioProvider;
}());

//# sourceMappingURL=itinerario.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/home-view-viagem/home-view-viagem-reportar/home-view-viagem-reportar.module": [
		320
	],
	"../components/home-view-viagem/home-view-viagem-selecionar-rota/home-view-viagem-selecionar-rota.module": [
		175
	],
	"../components/pesquisa-coordenadas/pesquisa-coordenadas-modal-com-mapa/pesquisa-coordenadas-modal-com-mapa.module": [
		178
	],
	"../components/pesquisa-coordenadas/pesquisa-coordenadas-modal/pesquisa-coordenadas-modal.module": [
		185
	],
	"../pages/alerta/alerta.module": [
		188
	],
	"../pages/favoritos/favoritos.module": [
		321
	],
	"../pages/horario/horario-detalhes/horario-detalhes.module": [
		323
	],
	"../pages/horario/horario.module": [
		337
	],
	"../pages/itinerario/itinerario-detalhes/itinerario-detalhes.module": [
		325
	],
	"../pages/itinerario/itinerario.module": [
		327
	],
	"../pages/ponto/ponto.module": [
		332
	],
	"../pages/qrcode/qrcode.module": [
		334
	],
	"../pages/sobre/sobre.module": [
		339
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewViagemSelecionarRotaPageModule", function() { return HomeViewViagemSelecionarRotaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_view_viagem_selecionar_rota__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeViewViagemSelecionarRotaPageModule = /** @class */ (function () {
    function HomeViewViagemSelecionarRotaPageModule() {
    }
    HomeViewViagemSelecionarRotaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_view_viagem_selecionar_rota__["a" /* HomeViewViagemSelecionarRotaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_view_viagem_selecionar_rota__["a" /* HomeViewViagemSelecionarRotaPage */]),
            ],
        })
    ], HomeViewViagemSelecionarRotaPageModule);
    return HomeViewViagemSelecionarRotaPageModule;
}());

//# sourceMappingURL=home-view-viagem-selecionar-rota.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewViagemSelecionarRotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rota__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rotaComposta__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeViewViagemSelecionarRotaPage = /** @class */ (function () {
    function HomeViewViagemSelecionarRotaPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.rotas = navParams.data.rotas || [];
        this.rotasCompostas = navParams.data.rotasCompostas || [];
        this.caminhando = navParams.data.caminhando;
        this.filtro = 'distancia';
        this.filtroChange(this.filtro);
    }
    HomeViewViagemSelecionarRotaPage.prototype.Fechar = function () {
        this.viewCtrl.dismiss();
    };
    HomeViewViagemSelecionarRotaPage.prototype.Caminhando = function () {
        this.viewCtrl.dismiss({
            rotaSelecionada: this.caminhando,
        });
    };
    HomeViewViagemSelecionarRotaPage.prototype.SelecionaRota = function (rota) {
        this.viewCtrl.dismiss({
            rotaSelecionada: rota,
        });
    };
    HomeViewViagemSelecionarRotaPage.prototype.ionViewDidLoad = function () {
    };
    HomeViewViagemSelecionarRotaPage.prototype.filtroChange = function (event) {
        var _this = this;
        if (event == "distancia") {
            this.rotas.sort(function (a, b) {
                return _this.rotaDist(a) - _this.rotaDist(b);
            });
        }
        else if (event == "ocorrencias") {
            this.rotas.sort(function (a, b) {
                return _this.ocorrenciasQuantizadas(a) - _this.ocorrenciasQuantizadas(b);
            });
            this.minOcorrenciasIndex = null;
            this.rotas.forEach(function (r, index) {
                if (_this.minOcorrenciasIndex === null && _this.ocorrenciasQuantizadas(r) !== null)
                    _this.minOcorrenciasIndex = index;
            });
            this.maxOcorrenciasIndex = this.rotas.length - 1;
        }
        else if (event == "preco") {
        }
    };
    HomeViewViagemSelecionarRotaPage.prototype.rotaDist = function (rota) {
        if (rota instanceof __WEBPACK_IMPORTED_MODULE_2__providers_rota__["a" /* Rota */]) {
            if (!rota.trecho_destino || !rota.trecho_origem)
                return null;
            return rota.trecho_destino.properties.distancia + rota.trecho_origem.properties.distancia;
        }
        else if (rota instanceof __WEBPACK_IMPORTED_MODULE_3__providers_rotaComposta__["a" /* RotaComposta */]) {
            var d_o = this.rotaDist(rota.origem_terminal[0]);
            var t_d = this.rotaDist(rota.terminal_destino[0]);
            if (d_o == null && t_d == null)
                return null;
            else
                return d_o + t_d;
        }
    };
    HomeViewViagemSelecionarRotaPage.prototype.ocorrenciasQuantizadas = function (rota) {
        if (rota instanceof __WEBPACK_IMPORTED_MODULE_2__providers_rota__["a" /* Rota */]) {
            if (!rota.linha || !rota.linha.ocorrencias)
                return null;
            var total_1 = 0;
            rota.linha.ocorrencias.forEach(function (o) {
                total_1 += o.peso * o.count_tipos;
            });
            return total_1;
        }
        else if (rota instanceof __WEBPACK_IMPORTED_MODULE_3__providers_rotaComposta__["a" /* RotaComposta */]) {
            return this.ocorrenciasQuantizadas(rota.origem_terminal[0]) + this.ocorrenciasQuantizadas(rota.terminal_destino[0]);
        }
    };
    HomeViewViagemSelecionarRotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-view-viagem-selecionar-rota',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\home-view-viagem\home-view-viagem-selecionar-rota\home-view-viagem-selecionar-rota.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button (click)="Fechar()">\n\n          <ion-icon class="voltar-arrow" name="md-arrow-back" color="primary"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header >\n\n        Escolha uma opção de filtro\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Filtros</ion-label>\n\n      <ion-select [(ngModel)]="filtro" cancelText="Cancelar" (ionChange)="filtroChange($event)">\n\n        <ion-option value="distancia"> Distância a pé</ion-option>\n\n        <ion-option value="ocorrencias">Menos ocorrências</ion-option>\n\n        <!-- <ion-option value="preco">Preço</ion-option> -->\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header >\n\n        Escolha uma opção de rota\n\n    </ion-list-header>\n\n    <ion-item ion-item *ngFor="let r of rotas; let i = index" (click)="SelecionaRota(r)">\n\n      <ion-icon name="bus" color="primary"></ion-icon> {{r.linha.codigo}} {{r.linha.nome}} \n\n      <span class="detalhe-info" *ngIf="filtro==\'distancia\' && rotaDist(r)!==null">{{rotaDist(r) | number:\'1.0-0\'}}m andando</span>\n\n      <span class="detalhe-info" *ngIf="filtro==\'distancia\' && rotaDist(r)==null">Sem informação de distância a pé</span>\n\n      \n\n      <span class="detalhe-info" *ngIf="filtro==\'ocorrencias\' && ocorrenciasQuantizadas(r)==null"> Sem informação para ocorrências</span>\n\n      <span class="detalhe-info" *ngIf="filtro==\'ocorrencias\' && ocorrenciasQuantizadas(r)!==null && i == minOcorrenciasIndex"> Rota com menos ocorrências</span>\n\n      <span class="detalhe-info" *ngIf="filtro==\'ocorrencias\' && ocorrenciasQuantizadas(r)!==null && i == maxOcorrenciasIndex"> Rota com mais ocorrências</span>\n\n      \n\n      \n\n    </ion-item>\n\n\n\n    <ion-item ion-item *ngFor="let r of rotasCompostas; let i = index" (click)="SelecionaRota(r)">\n\n      <ion-icon name="bus" color="primary" padding-right></ion-icon><ion-icon name="ios-arrow-forward" color="primary"></ion-icon><ion-icon name="ios-arrow-forward" color="primary"></ion-icon><ion-icon name="bus" color="primary" padding-left></ion-icon>\n\n        <p>\n\n          {{r.origem_terminal[0].linha.codigo}} {{r.origem_terminal[0].linha.nome}} \n\n          <ion-icon name="ios-arrow-forward" color="primary"></ion-icon><ion-icon name="ios-arrow-forward" color="primary"></ion-icon>\n\n          {{r.terminal_destino[0].linha.codigo}} {{r.terminal_destino[0].linha.nome}} \n\n        </p> \n\n       \n\n        <span class="detalhe-info" *ngIf="filtro==\'distancia\' && rotaDist(r)!==null">{{rotaDist(r) | number:\'1.0-0\'}}m andando</span>\n\n        <span class="detalhe-info" *ngIf="filtro==\'distancia\' && rotaDist(r)==null">Sem informação de distância a pé</span>\n\n      \n\n        <span class="detalhe-info" *ngIf="filtro==\'ocorrencias\' && ocorrenciasQuantizadas(r)==null"> Sem informação para ocorrências</span>\n\n        <span class="detalhe-info" *ngIf="filtro==\'ocorrencias\' && ocorrenciasQuantizadas(r)!==null && i == minOcorrenciasIndex"> Rota com menos ocorrências</span>\n\n        <span class="detalhe-info" *ngIf="filtro==\'ocorrencias\' && ocorrenciasQuantizadas(r)!==null && i == maxOcorrenciasIndex"> Rota com mais ocorrências</span>\n\n      \n\n    </ion-item>\n\n\n\n    <ion-item ion-item (click)="Caminhando()" *ngIf="caminhando"><ion-icon name="walk" color="primary"></ion-icon> Ir a pé <span class="detalhe-info">{{caminhando.properties.distancia | number:\'1.0-0\'}}m andando</span></ion-item>\n\n    <ion-item ion-item *ngIf="!caminhando"><ion-icon name="walk" color="dark"></ion-icon> Não foi possível obter um caminho a pé </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\home-view-viagem\home-view-viagem-selecionar-rota\home-view-viagem-selecionar-rota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], HomeViewViagemSelecionarRotaPage);
    return HomeViewViagemSelecionarRotaPage;
}());

//# sourceMappingURL=home-view-viagem-selecionar-rota.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ponto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linha__ = __webpack_require__(55);

/**
 * Representa um ponto de ônibus.
 */
var Ponto = /** @class */ (function () {
    function Ponto(tupla) {
        this.linhas = [];
        this.endereco = tupla.endereco;
        this.numero_ponto = tupla.numero_ponto;
        this.tipo = tupla.tipo;
        if (tupla.codigo_linha)
            this.linhas.push(new __WEBPACK_IMPORTED_MODULE_0__linha__["a" /* Linha */](tupla));
    }
    Ponto.prototype.adicionarLinha = function (tupla) {
        var vm = this;
        var achouLinha = false;
        for (var _i = 0, _a = vm.linhas; _i < _a.length; _i++) {
            var l = _a[_i];
            if (l.codigo == tupla.codigo_linha) {
                achouLinha = true;
            }
        }
        if (achouLinha == false) {
            vm.linhas.push(new __WEBPACK_IMPORTED_MODULE_0__linha__["a" /* Linha */](tupla));
        }
    };
    return Ponto;
}());

//# sourceMappingURL=ponto.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaCoordenadasModalComMapaPageModule", function() { return PesquisaCoordenadasModalComMapaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal_com_mapa__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PesquisaCoordenadasModalComMapaPageModule = /** @class */ (function () {
    function PesquisaCoordenadasModalComMapaPageModule() {
    }
    PesquisaCoordenadasModalComMapaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal_com_mapa__["a" /* PesquisaCoordenadasModalComMapaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal_com_mapa__["a" /* PesquisaCoordenadasModalComMapaPage */]),
            ],
        })
    ], PesquisaCoordenadasModalComMapaPageModule);
    return PesquisaCoordenadasModalComMapaPageModule;
}());

//# sourceMappingURL=pesquisa-coordenadas-modal-com-mapa.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaCoordenadasModalComMapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_geosearch__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_geosearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_geosearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PesquisaCoordenadasModalComMapaPage = /** @class */ (function () {
    function PesquisaCoordenadasModalComMapaPage(navCtrl, navParams, viewCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.listaResultados = [];
        this.hiddenMapa = true;
        this.buscando = false;
        this.placeholder = navParams.data.placeholder;
        this.model = navParams.data.model;
        this.OSMProvider = new __WEBPACK_IMPORTED_MODULE_3_leaflet_geosearch__["OpenStreetMapProvider"]();
    }
    PesquisaCoordenadasModalComMapaPage.prototype.ionViewDidLoad = function () {
        this.inicializarMapa();
    };
    PesquisaCoordenadasModalComMapaPage.prototype.Fechar = function () {
        this.viewCtrl.dismiss();
    };
    PesquisaCoordenadasModalComMapaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({
            model: this.model,
            coords: this.coords
        });
    };
    PesquisaCoordenadasModalComMapaPage.prototype.Buscar = function () {
        if (this.model.length > 0) {
            this.BuscaOSM();
        }
        else {
            this.listaResultados = [];
        }
    };
    PesquisaCoordenadasModalComMapaPage.prototype.BuscaOSM = function () {
        var _this = this;
        this.buscando = true;
        this.OSMProvider.search({ query: this.model + " curitiba" })
            .then(function (result) {
            _this.listaResultados = result;
            _this.buscando = false;
        }, function (error) {
            console.error(error);
            _this.listaResultados = [];
            _this.buscando = false;
        });
    };
    PesquisaCoordenadasModalComMapaPage.prototype.ResultadoClick = function (r) {
        this.model = r.label;
        this.coords = [r.y, r.x];
        this.dismiss();
    };
    PesquisaCoordenadasModalComMapaPage.prototype.UsarLocal = function () {
        var _this = this;
        this.buscando = true;
        this.geolocation.getCurrentPosition().then(function (r) {
            _this.coords = [r.coords.latitude, r.coords.longitude];
            _this.model = null;
            _this.buscando = false;
            _this.dismiss();
        });
    };
    PesquisaCoordenadasModalComMapaPage.prototype.SelecionarNoMapa = function () {
        this.coords = null;
        this.hiddenMapa = false;
    };
    PesquisaCoordenadasModalComMapaPage.prototype.ConfirmarNoMapa = function () {
        console.log(this.coords);
        if (this.coords) {
            this.model = null;
            this.dismiss();
        }
    };
    PesquisaCoordenadasModalComMapaPage.prototype.VoltarDoMapa = function () {
        this.hiddenMapa = true;
    };
    PesquisaCoordenadasModalComMapaPage.prototype.inicializarMapa = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map(this.mapContainer.nativeElement, { zoomControl: true });
        this.map.zoomControl.setPosition('bottomright');
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
        }).addTo(this.map);
        this.map.setView(new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.LatLng(-25.4284, -49.2733), 12); //Curitiba
        this.selecaoLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([0, 0]).addTo(this.map);
        this.map.on('click', function (ev) {
            _this.map.removeLayer(_this.selecaoLayer);
            _this.coords = [ev.latlng.lat, ev.latlng.lng];
            _this.selecaoLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker(_this.coords).addTo(_this.map);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("pmap"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PesquisaCoordenadasModalComMapaPage.prototype, "mapContainer", void 0);
    PesquisaCoordenadasModalComMapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisa-coordenadas-modal-com-mapa',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\pesquisa-coordenadas\pesquisa-coordenadas-modal-com-mapa\pesquisa-coordenadas-modal-com-mapa.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button (click)="Fechar()">\n\n          <ion-icon class="voltar-arrow" name="md-arrow-back" color="primary"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        Pesquisar {{placeholder}}\n\n      </ion-title>\n\n      <ion-searchbar placeholder="Digite um local" [(ngModel)]="model" (ionInput)="Buscar()" [hidden]="!hiddenMapa"></ion-searchbar>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n  <div *ngIf="buscando" class="spinner-container" text-center>\n\n    <ion-spinner></ion-spinner>\n\n  </div>\n\n  <div [ngSwitch]="listaResultados.length > 0" [hidden]="!hiddenMapa">\n\n    <div class="sem-resultados" *ngSwitchCase="false" >Sem resultados a exibir.</div>\n\n    <ion-list *ngSwitchCase="true">\n\n      <button ion-item *ngFor="let r of listaResultados" (click)="ResultadoClick(r)">{{r.label}}</button>\n\n    </ion-list>\n\n    <ion-list>\n\n      <button ion-item (click)="UsarLocal()"><ion-icon name="locate" color="primary"></ion-icon> Usar minha localização</button>\n\n      <button ion-item (click)="SelecionarNoMapa()"><ion-icon name="pin" color="primary"></ion-icon> Selecionar no mapa </button>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <div #pmap id="pmap" [ngStyle]="{\'visibility\': hiddenMapa? \'hidden\' : \'visible\'}">\n\n      <div id="button-confirmar" class="leaflet-control">\n\n          <button ion-button (click)="ConfirmarNoMapa()">Confirmar</button>\n\n      </div>\n\n  \n\n      <div id="button-voltar" class="leaflet-control">\n\n          <button ion-button (click)="VoltarDoMapa()">Voltar</button>\n\n      </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\pesquisa-coordenadas\pesquisa-coordenadas-modal-com-mapa\pesquisa-coordenadas-modal-com-mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], PesquisaCoordenadasModalComMapaPage);
    return PesquisaCoordenadasModalComMapaPage;
}());

//# sourceMappingURL=pesquisa-coordenadas-modal-com-mapa.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaCoordenadasModalPageModule", function() { return PesquisaCoordenadasModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PesquisaCoordenadasModalPageModule = /** @class */ (function () {
    function PesquisaCoordenadasModalPageModule() {
    }
    PesquisaCoordenadasModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal__["a" /* PesquisaCoordenadasModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal__["a" /* PesquisaCoordenadasModalPage */]),
            ],
        })
    ], PesquisaCoordenadasModalPageModule);
    return PesquisaCoordenadasModalPageModule;
}());

//# sourceMappingURL=pesquisa-coordenadas-modal.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaCoordenadasModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_geosearch__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_geosearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet_geosearch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favoritos_favoritos__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PesquisaCoordenadasModalPage = /** @class */ (function () {
    function PesquisaCoordenadasModalPage(navCtrl, navParams, viewCtrl, geolocation, FavoritosProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.FavoritosProvider = FavoritosProvider;
        this.toastCtrl = toastCtrl;
        this.listaResultados = [];
        this.favoritos = [];
        this.buscando = false;
        this.placeholder = navParams.data.placeholder;
        this.model = navParams.data.model;
        this.OSMProvider = new __WEBPACK_IMPORTED_MODULE_2_leaflet_geosearch__["OpenStreetMapProvider"]();
    }
    PesquisaCoordenadasModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.FavoritosProvider.baseEnderecos().then(function (r) {
            _this.favoritos = r;
        });
    };
    PesquisaCoordenadasModalPage.prototype.Fechar = function () {
        this.viewCtrl.dismiss();
    };
    PesquisaCoordenadasModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({
            model: this.model,
            coords: this.coords
        });
    };
    PesquisaCoordenadasModalPage.prototype.Buscar = function () {
        if (this.model.length > 0) {
            this.BuscaOSM();
        }
        else {
            this.listaResultados = [];
        }
    };
    PesquisaCoordenadasModalPage.prototype.BuscaOSM = function () {
        var _this = this;
        this.buscando = true;
        this.OSMProvider.search({ query: this.model + " curitiba" })
            .then(function (result) {
            _this.listaResultados = result;
            _this.buscando = false;
        }, function (error) {
            console.error(error);
            _this.listaResultados = [];
            _this.buscando = false;
        });
    };
    PesquisaCoordenadasModalPage.prototype.ResultadoClick = function (r) {
        this.model = r.label;
        this.coords = [r.y, r.x];
        this.dismiss();
    };
    PesquisaCoordenadasModalPage.prototype.FavoritoClick = function (f) {
        if (f.coords) {
            this.model = f.nome;
            this.coords = f.coords;
            this.dismiss();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Este favorito não está configurado.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        }
    };
    PesquisaCoordenadasModalPage.prototype.UsarLocal = function () {
        var _this = this;
        this.buscando = true;
        this.geolocation.getCurrentPosition().then(function (r) {
            _this.coords = [r.coords.latitude, r.coords.longitude];
            _this.model = "" + _this.coords;
            _this.buscando = false;
            _this.dismiss();
        });
    };
    PesquisaCoordenadasModalPage.prototype.SelecionarNoMapa = function () {
        this.viewCtrl.dismiss({
            SelecionarCoordenadas: true
        });
    };
    PesquisaCoordenadasModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisa-coordenadas-modal',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\pesquisa-coordenadas\pesquisa-coordenadas-modal\pesquisa-coordenadas-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button (click)="Fechar()">\n\n          <ion-icon class="voltar-arrow" name="md-arrow-back" color="primary"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        Pesquisar {{placeholder}}\n\n      </ion-title>\n\n      <ion-searchbar placeholder="Digite um local" [(ngModel)]="model" (ionInput)="Buscar()"></ion-searchbar>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="buscando" class="spinner-container" text-center>\n\n    <ion-spinner></ion-spinner>\n\n  </div>\n\n  <div [ngSwitch]="listaResultados.length > 0">\n\n    <div class="sem-resultados" *ngSwitchCase="false" >Sem resultados a exibir.</div>\n\n    <ion-list *ngSwitchCase="true">\n\n      <button ion-item *ngFor="let r of listaResultados" (click)="ResultadoClick(r)">{{r.label}}</button>\n\n    </ion-list>\n\n    <ion-list>\n\n      <button ion-item (click)="UsarLocal()"><ion-icon name="locate" color="primary"></ion-icon> Usar minha localização</button>\n\n      <button ion-item (click)="SelecionarNoMapa()"><ion-icon name="pin" color="primary"></ion-icon> Selecionar no mapa </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="favoritos">\n\n      <h5>Favoritos</h5>\n\n      <button *ngIf="favoritos[0]" ion-item (click)="FavoritoClick(favoritos[0])" ><ion-icon name="home" color="primary"></ion-icon>\n\n        Casa <span class="detalhe-info"> {{favoritos[0].nome}}</span>\n\n     </button>\n\n     \n\n     <button *ngIf="favoritos[1]" ion-item (click)="FavoritoClick(favoritos[1])" ><ion-icon name="briefcase" color="primary"></ion-icon> \n\n       Trabalho <span class="detalhe-info"> {{favoritos[1].nome}}</span> \n\n     </button>\n\n\n\n      <button ion-item *ngFor="let f of favoritos | slice: 2 " (click)="FavoritoClick(f)" ><ion-icon name="navigate" color="primary" class="locate"></ion-icon>{{f.nome}}</button>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\pesquisa-coordenadas\pesquisa-coordenadas-modal\pesquisa-coordenadas-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__providers_favoritos_favoritos__["a" /* FavoritosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PesquisaCoordenadasModalPage);
    return PesquisaCoordenadasModalPage;
}());

//# sourceMappingURL=pesquisa-coordenadas-modal.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertaPageModule", function() { return AlertaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerta__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertaPageModule = /** @class */ (function () {
    function AlertaPageModule() {
    }
    AlertaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alerta__["a" /* AlertaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alerta__["a" /* AlertaPage */]),
            ],
        })
    ], AlertaPageModule);
    return AlertaPageModule;
}());

//# sourceMappingURL=alerta.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewPertoDeMimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pontos_proximos_pontos_proximos__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeViewPertoDeMimComponent = /** @class */ (function () {
    function HomeViewPertoDeMimComponent(PontosProximosProvider, toastCtrl) {
        this.PontosProximosProvider = PontosProximosProvider;
        this.toastCtrl = toastCtrl;
        this.buscandoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.desenharPontos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.apagarPontos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selecionarCoordenadas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    HomeViewPertoDeMimComponent.prototype.viewEstado = function (estado) {
        this.view = estado;
        this.viewChange.emit(this.view);
    };
    HomeViewPertoDeMimComponent.prototype.buscandoEstado = function (estado) {
        this.buscando = estado;
        this.buscandoChange.emit(this.buscando);
    };
    HomeViewPertoDeMimComponent.prototype.BuscarPontos = function (coords) {
        var _this = this;
        if (coords) {
            this.buscandoEstado(true);
            this.apagarPontos.emit();
            this.PontosProximosProvider.get(coords[0], coords[1])
                .then(function (data) {
                if (_this.debug)
                    console.log("Pontos Proximos", data);
                _this.buscandoEstado(false);
                if (_this.view == "PertoDeMim") {
                    //this.desenharPontos.emit({pontos: data, gps:[-25.439512, -49.268947]}); //teste UTF
                    _this.desenharPontos.emit({ pontos: data, gps: coords });
                    if (data.features.length < 1) {
                        var toast = _this.toastCtrl.create({
                            message: 'Nenhum ponto encontrado nesta área.',
                            position: 'bottom',
                            duration: 3000,
                            dismissOnPageChange: true
                        });
                        toast.present();
                    }
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: 'Houve um erro ao buscar os pontos próximos, tente fazer uma busca.',
                    position: 'bottom',
                    showCloseButton: true,
                    closeButtonText: 'OK',
                    dismissOnPageChange: true
                });
                toast.present();
                _this.buscandoEstado(false);
                console.error(error);
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Clique na barra de pesquisa.',
                position: 'top',
                duration: 3000,
                dismissOnPageChange: true
            });
            toast.present();
        }
    };
    HomeViewPertoDeMimComponent.prototype.SelecionarNoMapa = function () {
        this.selecionarCoordenadas.emit("PertoDeMim");
    };
    HomeViewPertoDeMimComponent.prototype.Voltar = function () {
        this.buscandoEstado(false);
        this.apagarPontos.emit();
        this.viewEstado("Padrao");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HomeViewPertoDeMimComponent.prototype, "buscando", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPertoDeMimComponent.prototype, "buscandoChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HomeViewPertoDeMimComponent.prototype, "debug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HomeViewPertoDeMimComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPertoDeMimComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPertoDeMimComponent.prototype, "desenharPontos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPertoDeMimComponent.prototype, "apagarPontos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPertoDeMimComponent.prototype, "selecionarCoordenadas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__["a" /* PesquisaCoordenadasComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__["a" /* PesquisaCoordenadasComponent */])
    ], HomeViewPertoDeMimComponent.prototype, "pesquisarComp", void 0);
    HomeViewPertoDeMimComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-view-perto-de-mim',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\home-view-perto-de-mim\home-view-perto-de-mim.html"*/'<div [hidden]="view!==\'PertoDeMim\'" >\n\n   \n\n    <pesquisa-coordenadas placeholder=" Perto de Mim" [(coords)]="coords" (selecionarCoords)="SelecionarNoMapa()"> </pesquisa-coordenadas>\n\n    <div [hidden]="ocultarBotoesHome" id="button-buscar" class="button-buscar leaflet-control">\n\n        <button ion-button (click)="BuscarPontos(coords)">Buscar</button>\n\n    </div>\n\n\n\n    <div id="button-voltar" class="leaflet-control">\n\n        <button ion-button (click)="Voltar()">Voltar</button>\n\n    </div>\n\n    \n\n</div>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\home-view-perto-de-mim\home-view-perto-de-mim.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_pontos_proximos_pontos_proximos__["a" /* PontosProximosProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], HomeViewPertoDeMimComponent);
    return HomeViewPertoDeMimComponent;
}());

//# sourceMappingURL=home-view-perto-de-mim.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewViagemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_busca_simples_busca_simples__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rota__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_view_viagem_reportar_home_view_viagem_reportar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_caminho_caminho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_caminhoFeature__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_view_viagem_selecionar_rota_home_view_viagem_selecionar_rota__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rotaComposta__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeViewViagemComponent = /** @class */ (function () {
    function HomeViewViagemComponent(BuscaSimplesProvider, actionSheetCtrl, modalCtrl, toastCtrl, CaminhoProvider) {
        this.BuscaSimplesProvider = BuscaSimplesProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.CaminhoProvider = CaminhoProvider;
        this.buscandoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.desenharRota = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.apagarRota = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.desenharCaminho = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.apagarCaminhos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rotas = []; //Rota[] | RotaComposta[]
    }
    HomeViewViagemComponent.prototype.buscandoEstado = function (estado) {
        this.buscando = estado;
        this.buscandoChange.emit(this.buscando);
    };
    HomeViewViagemComponent.prototype.viewEstado = function (estado) {
        this.view = estado;
        this.viewChange.emit(this.view);
    };
    HomeViewViagemComponent.prototype.Voltar = function () {
        this.buscandoEstado(false);
        this.apagarRota.emit();
        this.apagarCaminhos.emit();
        this.viewEstado("Padrao");
    };
    HomeViewViagemComponent.prototype.BuscarRotas = function (cBus) {
        var _this = this;
        this.confirmado = false;
        this.rotaSelecionada = null;
        if (this.debug)
            console.log(cBus);
        Promise.all([
            this.BuscaSimplesProvider.get(cBus.origem, cBus.destino, this.debug),
            this.CaminhoProvider.getTeste(cBus.origem, cBus.destino, this.debug),
        ]).then(function (rotas) {
            _this.rotas = rotas[0];
            _this.caminhando = null;
            //this.caminhando = rotas[1];
            if (_this.debug)
                console.log("A pé obtido", _this.caminhando);
            _this.buscandoEstado(false);
            if (_this.view == "Viagem") {
                if (_this.rotas.length < 1) {
                    _this.BuscarRotaComposta(cBus);
                    _this.buscandoEstado(true);
                }
                else {
                    _this.EscolherRota();
                }
            }
        }, function (err) {
            _this.buscandoEstado(false);
            console.error(err);
        });
    };
    HomeViewViagemComponent.prototype.BuscarRotaComposta = function (cBus) {
        var _this = this;
        this.confirmado = false;
        this.rotaSelecionada = null;
        if (this.debug)
            console.log(cBus);
        Promise.all([
            this.BuscaSimplesProvider.getComposta(cBus.origem, cBus.destino, this.debug),
            this.CaminhoProvider.getTeste(cBus.origem, cBus.destino, this.debug),
        ]).then(function (rotas) {
            _this.rotas = rotas[0];
            _this.caminhando = null;
            //this.caminhando = rotas[1];
            if (_this.debug)
                console.log("A pé obtido", _this.caminhando);
            _this.buscandoEstado(false);
            if (_this.view == "Viagem")
                _this.EscolherRota();
        }, function (err) {
            _this.buscandoEstado(false);
            console.error(err);
        });
    };
    HomeViewViagemComponent.prototype.EscolherRota = function () {
        var _this = this;
        if (this.buscando) {
            var toast = this.toastCtrl.create({
                message: 'A busca ainda não terminou.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        }
        else if (!this.caminhando && this.rotas.length < 1) {
            var toast = this.toastCtrl.create({
                message: 'Não foi possível encontrar nenhum caminho.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        }
        else {
            var modal = void 0;
            if (this.rotas[0] instanceof __WEBPACK_IMPORTED_MODULE_3__providers_rota__["a" /* Rota */]) {
                modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__home_view_viagem_selecionar_rota_home_view_viagem_selecionar_rota__["a" /* HomeViewViagemSelecionarRotaPage */], { rotas: this.rotas, caminhando: this.caminhando });
            }
            else {
                modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__home_view_viagem_selecionar_rota_home_view_viagem_selecionar_rota__["a" /* HomeViewViagemSelecionarRotaPage */], { rotasCompostas: this.rotas, caminhando: this.caminhando });
            }
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.apagarCaminhos.emit();
                    _this.apagarRota.emit();
                    _this.rotaSelecionada = data.rotaSelecionada;
                    console.log("Rota Selecionada:", _this.rotaSelecionada);
                    if (_this.rotaSelecionada instanceof __WEBPACK_IMPORTED_MODULE_6__providers_caminhoFeature__["a" /* CaminhoFeature */]) {
                        _this.desenharCaminho.emit(_this.rotaSelecionada);
                    }
                    else if (_this.rotaSelecionada instanceof __WEBPACK_IMPORTED_MODULE_3__providers_rota__["a" /* Rota */]) {
                        _this.desenharRota.emit(_this.rotaSelecionada);
                    }
                    else if (_this.rotaSelecionada instanceof __WEBPACK_IMPORTED_MODULE_8__providers_rotaComposta__["a" /* RotaComposta */]) {
                        _this.desenharRota.emit(_this.rotaSelecionada.terminal_destino[0]);
                        _this.desenharRota.emit(_this.rotaSelecionada.origem_terminal[0]);
                    }
                }
            });
            modal.present();
        }
    };
    HomeViewViagemComponent.prototype.Reportar = function () {
        var _this = this;
        if (this.rotaSelecionada instanceof __WEBPACK_IMPORTED_MODULE_3__providers_rota__["a" /* Rota */]) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__home_view_viagem_reportar_home_view_viagem_reportar__["a" /* HomeViewViagemReportarPage */], this.rotaSelecionada);
            modal.present();
        }
        else if (this.rotaSelecionada instanceof __WEBPACK_IMPORTED_MODULE_8__providers_rotaComposta__["a" /* RotaComposta */]) {
            var opts = [];
            var rS_1 = this.rotaSelecionada;
            opts.push({ text: rS_1.origem_terminal[0].linha.nome,
                handler: function () {
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__home_view_viagem_reportar_home_view_viagem_reportar__["a" /* HomeViewViagemReportarPage */], rS_1.origem_terminal[0]);
                    modal.present();
                }
            });
            opts.push({ text: rS_1.terminal_destino[0].linha.nome,
                handler: function () {
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__home_view_viagem_reportar_home_view_viagem_reportar__["a" /* HomeViewViagemReportarPage */], rS_1.terminal_destino[0]);
                    modal.present();
                }
            });
            opts.push({ text: 'Cancelar', role: 'cancel' });
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Reportar qual linha?',
                buttons: opts
            });
            actionSheet.present();
        }
        else if (this.rotaSelecionada instanceof __WEBPACK_IMPORTED_MODULE_6__providers_caminhoFeature__["a" /* CaminhoFeature */]) {
            var toast = this.toastCtrl.create({
                message: 'Não é possível reportar caminho a pé.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Selecione uma rota antes de reportar.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        }
    };
    HomeViewViagemComponent.prototype.Confirmar = function () {
        if (this.rotaSelecionada) {
            this.confirmado = true;
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Selecione uma rota antes de prosseguir.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HomeViewViagemComponent.prototype, "buscando", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewViagemComponent.prototype, "buscandoChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HomeViewViagemComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewViagemComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HomeViewViagemComponent.prototype, "debug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewViagemComponent.prototype, "desenharRota", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewViagemComponent.prototype, "apagarRota", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewViagemComponent.prototype, "desenharCaminho", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewViagemComponent.prototype, "apagarCaminhos", void 0);
    HomeViewViagemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-view-viagem',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\home-view-viagem\home-view-viagem.html"*/'<div [hidden]="view!==\'Viagem\'">\n\n    <div id="viagem-controles" class="leaflet-control">\n\n          <button *ngIf="!confirmado" ion-button (click)="EscolherRota()">Escolher Rota</button>\n\n\n\n          <button *ngIf="confirmado" ion-button color="danger" (click)="Reportar()">Reportar</button>\n\n          <button *ngIf="!confirmado" ion-button color="secondary" (click)="Confirmar()">Confirmar</button>\n\n\n\n          <div id="button-voltar" class="leaflet-control">\n\n                <button ion-button (click)="Voltar()">Voltar</button>\n\n            </div>\n\n    </div>\n\n\n\n    \n\n</div>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\home-view-viagem\home-view-viagem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_busca_simples_busca_simples__["a" /* BuscaSimplesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_caminho_caminho__["a" /* CaminhoProvider */]])
    ], HomeViewViagemComponent);
    return HomeViewViagemComponent;
}());

//# sourceMappingURL=home-view-viagem.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaSimplesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rota__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pontos_proximos_pontos_proximos__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caminho_caminho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rotaComposta__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rota_rota__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BuscaSimplesProvider = /** @class */ (function () {
    function BuscaSimplesProvider(http, PontosProximosProvider, RotaProvider, CaminhoProvider) {
        this.http = http;
        this.PontosProximosProvider = PontosProximosProvider;
        this.RotaProvider = RotaProvider;
        this.CaminhoProvider = CaminhoProvider;
        this.API_TESTE = 'assets/data/buscaTesteCabralUTF.json';
        this.API_TESTE_COMPOSTO = 'assets/data/buscaTesteComposto108030Para180335.json';
    }
    /**
     * @param origem - [lat, long] do local de origem.
     * @param destino - [lat, long] do local de destino.
     * @param debug - ativa console.log() para pontos próximos e rotas obtidas.
     * Busca as rotas combinando os pontos de origem e destino dois a dois.
     */
    BuscaSimplesProvider.prototype.get = function (origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.PontosProximosProvider.getSimples(origem[0], origem[1]),
                _this.PontosProximosProvider.getSimples(destino[0], destino[1])
            ]).then(function (pontos) {
                if (debug)
                    console.log("Pontos Proximos", pontos);
                _this.combinarPontos("Simples", pontos, origem, destino, debug)
                    .then(function (rotas) {
                    if (debug)
                        console.log("Rotas obtidas", rotas);
                    resolve(rotas);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    BuscaSimplesProvider.prototype.getComposta = function (origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.PontosProximosProvider.getSimples(origem[0], origem[1]),
                _this.PontosProximosProvider.getSimples(destino[0], destino[1])
            ]).then(function (pontos) {
                if (debug)
                    console.log("Pontos Proximos", pontos);
                _this.combinarPontos("Composta", pontos, origem, destino, debug)
                    .then(function (rotas) {
                    if (debug)
                        console.log("Rotas obtidas", rotas);
                    resolve(rotas);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    BuscaSimplesProvider.prototype.combinarPontos = function (tipo, pontos, origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!pontos[0] || !pontos[1])
                return null;
            var promises = [];
            pontos[0].forEach(function (pontoDaOrigem) {
                pontos[1].forEach(function (pontoDoDestino) {
                    if (tipo == "Simples")
                        promises.push(_this.RotaProvider.getRota(pontoDaOrigem.numero_ponto, pontoDoDestino.numero_ponto, origem, destino, debug));
                    else if (tipo == "Composta")
                        promises.push(_this.RotaProvider.getRotaComposta(pontoDaOrigem.numero_ponto, pontoDoDestino.numero_ponto, origem, destino, debug));
                });
            });
            var rotas = [];
            if (tipo == "Simples") {
                Promise.all(promises).then(function (responses) {
                    responses.forEach(function (rota) {
                        if (rota.length > 0) {
                            rota.forEach(function (r) {
                                rotas.push(r);
                            });
                        }
                    });
                    resolve(rotas);
                }, function (err) { return console.error(err); });
            }
            else if (tipo == "Composta") {
                Promise.all(promises).then(function (responses) {
                    responses.forEach(function (rota) {
                        if (rota.length > 0) {
                            rota.forEach(function (r) {
                                if (r.origem_terminal.length > 0 && r.terminal_destino.length > 0)
                                    rotas.push(r);
                            });
                        }
                    });
                    resolve(rotas);
                }, function (err) { return console.error(err); });
            }
        }); //end return new Promise
    };
    BuscaSimplesProvider.prototype.getBuscaTeste = function (origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_TESTE)
                .subscribe(function (tuplas) {
                var rotas = [];
                tuplas.forEach(function (rota, index) {
                    rotas[index] = new __WEBPACK_IMPORTED_MODULE_2__rota__["a" /* Rota */](rota);
                });
                _this.CaminhoProvider.getTrechosTeste().then(function (data) {
                    var trechos = data;
                    var i = 0;
                    rotas.forEach(function (rota) {
                        rota.trecho_origem = trechos[i];
                        i++;
                        rota.trecho_destino = trechos[i];
                        i++;
                    });
                    if (debug)
                        console.log("Rotas obtidas", rotas);
                    resolve(rotas);
                });
                /* BUSCA TRECHOS */
                /*  let caminhoPromises = [];
                 rotas.forEach((rota)=>{
                   caminhoPromises.push(this.CaminhoProvider.get(origem, rota.coords_ponto_inicial));
                   caminhoPromises.push(this.CaminhoProvider.get(rota.coords_ponto_final, destino));
                 });
                 Promise.all(caminhoPromises).then((trechos)=>{
                   let i=0;
                   rotas.forEach((rota:Rota)=>{
                     rota.trecho_origem = trechos[i];
                     i++;
                     rota.trecho_destino = trechos[i];
                     i++;
                   });
                   console.log(trechos);
                   resolve(rotas);
                 }); */
            });
        });
    };
    BuscaSimplesProvider.prototype.getBuscaTesteComposta = function (origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.API_TESTE_COMPOSTO)
                .subscribe(function (tuplas) {
                if (debug)
                    console.log("Rotas Compostas obtidas", tuplas);
                var r = [];
                tuplas.forEach(function (t) {
                    r.push(new __WEBPACK_IMPORTED_MODULE_5__rotaComposta__["a" /* RotaComposta */](t));
                });
                resolve(r);
            });
        });
    };
    BuscaSimplesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__pontos_proximos_pontos_proximos__["a" /* PontosProximosProvider */],
            __WEBPACK_IMPORTED_MODULE_6__rota_rota__["a" /* RotaProvider */], __WEBPACK_IMPORTED_MODULE_4__caminho_caminho__["a" /* CaminhoProvider */]])
    ], BuscaSimplesProvider);
    return BuscaSimplesProvider;
}());

//# sourceMappingURL=busca-simples.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaminhoFeature; });
var CaminhoFeature = /** @class */ (function () {
    function CaminhoFeature(tupla) {
        this.type = "Feature";
        this.properties = { distancia: tupla[tupla.length - 1].accumulatedDistance };
        var latlngs = [];
        tupla.forEach(function (t) {
            latlngs.push([t.latitude, t.longitude]);
        });
        this.geometry = {
            type: "MultiLineString",
            coordinates: [latlngs.slice()]
        };
    }
    return CaminhoFeature;
}());

//# sourceMappingURL=caminhoFeature.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rota__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caminho_caminho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rotaComposta__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RotaProvider = /** @class */ (function () {
    function RotaProvider(http, CaminhoProvider) {
        this.http = http;
        this.CaminhoProvider = CaminhoProvider;
        this.API = __WEBPACK_IMPORTED_MODULE_3__types__["a" /* API_URL */] + "/restfulapi/rotas/rota_simples_dois_pontos?";
        this.API_COMPOSTA = __WEBPACK_IMPORTED_MODULE_3__types__["a" /* API_URL */] + "/restfulapi/rotas/rota_conectada?";
    }
    RotaProvider.prototype.getRota = function (ponto_origem, ponto_destino, origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API + ("numero_ponto_origem=" + ponto_origem + "&numero_ponto_destino=" + ponto_destino))
                .subscribe(function (data) {
                if (debug)
                    console.log("numero_ponto_origem=" + ponto_origem + "&numero_ponto_destino=" + ponto_destino, data);
                var rotas = [];
                if (data == null)
                    resolve([]);
                else {
                    //let caminhoPromises = [];
                    data.forEach(function (rota) {
                        rotas.push(new __WEBPACK_IMPORTED_MODULE_2__rota__["a" /* Rota */](rota));
                        /* caminhoPromises.push(this.CaminhoProvider.get(origem, rotas[rotas.length-1].coords_ponto_inicial));
                        caminhoPromises.push(this.CaminhoProvider.get(rotas[rotas.length-1].coords_ponto_final, destino)); */
                    });
                    resolve(rotas);
                }
            }, function (err) {
                console.error(err);
                resolve([]);
            });
        });
    };
    RotaProvider.prototype.getRotaComposta = function (ponto_origem, ponto_destino, origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_COMPOSTA + ("numero_ponto_origem=" + ponto_origem + "&numero_ponto_destino=" + ponto_destino))
                .subscribe(function (data) {
                if (debug)
                    console.log("numero_ponto_origem=" + ponto_origem + "&numero_ponto_destino=" + ponto_destino, data);
                var rotas = [];
                if (data == null)
                    resolve([]);
                else {
                    //let caminhoPromises = [];
                    data.forEach(function (rota) {
                        rotas.push(new __WEBPACK_IMPORTED_MODULE_5__rotaComposta__["a" /* RotaComposta */](rota));
                        /* caminhoPromises.push(this.CaminhoProvider.get(origem, rotas[rotas.length-1].coords_ponto_inicial));
                        caminhoPromises.push(this.CaminhoProvider.get(rotas[rotas.length-1].coords_ponto_final, destino)); */
                    });
                    resolve(rotas);
                }
            }, function (err) {
                console.error(err);
                resolve([]);
            });
        });
    };
    RotaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__caminho_caminho__["a" /* CaminhoProvider */]])
    ], RotaProvider);
    return RotaProvider;
}());

//# sourceMappingURL=rota.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewViagemReportarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_crowdsourcing_crowdsourcing__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeViewViagemReportarPage = /** @class */ (function () {
    function HomeViewViagemReportarPage(navCtrl, navParams, toastCtrl, viewCtrl, datePipe, crowdProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.datePipe = datePipe;
        this.crowdProv = crowdProv;
        this.rota = navParams.data;
        /* this.data = new Date();
        this.data.setMinutes(this.data.getMinutes() - this.data.getTimezoneOffset()); */
        this.data = __WEBPACK_IMPORTED_MODULE_0_moment_timezone__().tz('America/Sao_Paulo').format("YYYY-MM-DDTHH:mm");
        this.report = { tipo: '1', data: this.data, linha: this.rota.linha.nome };
    }
    HomeViewViagemReportarPage.prototype.ionViewDidLoad = function () {
    };
    HomeViewViagemReportarPage.prototype.Fechar = function () {
        this.viewCtrl.dismiss();
    };
    HomeViewViagemReportarPage.prototype.Enviar = function () {
        var obj = {
            nivel: +this.report.tipo,
            tipo: +this.report.tipo,
            codigo_linha: '' + this.rota.codigo_linha,
            dia: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__(this.report.data).format("YYYY-MM-DD"),
            horario: __WEBPACK_IMPORTED_MODULE_0_moment_timezone__(this.report.data).tz('America/Sao_Paulo').format("HH:mm"),
            lat: 0,
            lon: 0,
        };
        var toast = this.toastCtrl.create({
            message: 'Reportado!',
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK',
            dismissOnPageChange: true
        });
        this.crowdProv.crowdsourcingLinhas(obj).subscribe(function (data) {
            toast.present();
        }, function (error) {
            console.error("erro", error);
            toast.present();
        });
        this.Fechar();
    };
    HomeViewViagemReportarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home-view-viagem-reportar',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\home-view-viagem\home-view-viagem-reportar\home-view-viagem-reportar.html"*/'<!--\n\n  Generated template for the HomeViewViagemReportarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Reportar Ocorrência\n\n      </ion-title>\n\n      <ion-buttons start>\n\n        <button ion-button (click)="Fechar()">\n\n          <span ion-text color="primary">X</span>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1 ion-text>Quero reportar:</h1>\n\n\n\n  <ion-list radio-group [(ngModel)]="report.tipo">\n\n    <ion-item>\n\n      <ion-label>Atraso</ion-label>\n\n      <ion-radio checked="true" value="4"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Tumulto</ion-label>\n\n      <ion-radio value="6"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Lotação</ion-label>\n\n      <ion-radio value="5"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Assalto</ion-label>\n\n      <ion-radio value="3"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Violência</ion-label>\n\n      <ion-radio value="2"></ion-radio>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Falta de Iluminação</ion-label>\n\n      <ion-radio value="0" disabled="true"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label>Date e Hora: </ion-label>\n\n    <ion-datetime cancelText="Cancelar" doneText="Confirmar"\n\n    displayFormat="DD de MMMM, HH:mm" pickerFormat="DD MMMM HH mm" [(ngModel)]="report.data"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <h5> Na linha {{report.linha}}</h5>\n\n\n\n  <button ion-button (click)="Enviar()">Confirmar</button>\n\n  <button ion-button outline (click)="Fechar()">Cancelar</button>\n\n    \n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\home-view-viagem\home-view-viagem-reportar\home-view-viagem-reportar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_4__providers_crowdsourcing_crowdsourcing__["a" /* CrowdsourcingProvider */]])
    ], HomeViewViagemReportarPage);
    return HomeViewViagemReportarPage;
}());

//# sourceMappingURL=home-view-viagem-reportar.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_view_perto_de_mim_home_view_perto_de_mim__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_view_viagem_home_view_viagem__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_view_padrao_home_view_padrao__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.debug = true;
        this.view = "Padrao";
        this.rotaLayer = null;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.inicializarMapa();
        //Mostrar nivel de zoom
        /*this.map.on('zoom', (ev) => {
          console.log("Zoom change: " + this.map.getZoom());
        });*/
    };
    HomePage.prototype.DesenharRota = function (event) {
        if (this.rotaLayer) {
            var layer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(event.info_rota, { onEachFeature: __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__["a" /* PontoFeature */].onEachPonto, pointToLayer: __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__["a" /* PontoFeature */].pontoToLayerVerde });
            this.DesenharRotaAuxFn(event);
            layer.addTo(this.rotaLayer);
        }
        else {
            this.rotaLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(event.info_rota, { onEachFeature: __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__["a" /* PontoFeature */].onEachPonto, pointToLayer: __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__["a" /* PontoFeature */].pontoToLayer });
            this.DesenharRotaAuxFn(event);
            this.rotaLayer.addTo(this.map);
        }
    };
    HomePage.prototype.DesenharRotaAuxFn = function (event) {
        if (event.trecho_origem && event.trecho_destino) {
            this.DesenharTrechos(event);
        }
        var pontoInicial = event.info_rota.features[0].geometry;
        this.map.setView([pontoInicial.coordinates[1], pontoInicial.coordinates[0]], 14);
        var pontoFinal = event.info_rota.features[event.info_rota.features.length - 1].geometry;
        var markers = [__WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([pontoInicial.coordinates[1], pontoInicial.coordinates[0]]),
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([pontoFinal.coordinates[1], pontoFinal.coordinates[0]])];
        markers[0].bindPopup(__WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.popup().setContent("Embarque na linha " + event.linha.nome)).openPopup();
        markers[1].bindPopup(__WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.popup().setContent("Desembarque em " + event.dados_ponto_destino.endereco)).openPopup();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup(markers).addTo(this.rotaLayer);
    };
    HomePage.prototype.ApagarRota = function () {
        if (this.rotaLayer) {
            this.map.removeLayer(this.rotaLayer);
            this.rotaLayer = null;
        }
        if (this.trechosLayer) {
            this.map.removeLayer(this.trechosLayer);
            this.trechosLayer = null;
        }
    };
    HomePage.prototype.DesenharTrechos = function (event) {
        this.trechosLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(event.trecho_origem);
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(event.trecho_destino).addTo(this.trechosLayer);
        this.trechosLayer.addTo(this.map);
    };
    HomePage.prototype.DesenharCaminho = function (event) {
        this.caminhoLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(event);
        var pontoInicial = event.geometry.coordinates[0][event.geometry.coordinates[0].length - 1];
        this.map.setView([pontoInicial[1], pontoInicial[0]], 14);
        var pontoFinal = event.geometry.coordinates[0][0];
        var markers = [__WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([pontoInicial[1], pontoInicial[0]]),
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([pontoFinal[1], pontoFinal[0]])];
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup(markers).addTo(this.caminhoLayer);
        this.caminhoLayer.addTo(this.map);
    };
    HomePage.prototype.ApagarCaminhos = function () {
        if (this.caminhoLayer)
            this.map.removeLayer(this.caminhoLayer);
    };
    HomePage.prototype.PertoDeMimGPS = function (event) {
        this.pdmComponent.BuscarPontos(event);
    };
    /** Chamado pelo HomeViewPadrao */
    HomePage.prototype.BuscarRotas = function (event) {
        console.log(event.tipo);
        if (event.tipo == "Simples")
            this.viagemComponent.BuscarRotas(event.coords);
        else if (event.tipo == "Composta")
            this.viagemComponent.BuscarRotaComposta(event.coords);
    };
    HomePage.prototype.DesenharPontos = function (event) {
        this.pertoDeMimLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(event.pontos, { onEachFeature: __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__["a" /* PontoFeature */].onEachPonto, pointToLayer: __WEBPACK_IMPORTED_MODULE_3__providers_pontoFeature__["a" /* PontoFeature */].pontoToLayer });
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker(event.gps).addTo(this.pertoDeMimLayer);
        this.pertoDeMimLayer.addTo(this.map);
        this.map.setView(event.gps, 17);
    };
    HomePage.prototype.ApagarPontos = function () {
        if (this.pertoDeMimLayer)
            this.map.removeLayer(this.pertoDeMimLayer);
    };
    HomePage.prototype.SelecionarCoordenadas = function ($event) {
        var _this = this;
        this.view = "SelecionarCoordenadas";
        this.selecaoLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([0, 0]).addTo(this.map);
        this.selecaoCoords = { tipo: $event, coords: null };
        this.map.on('click', function (ev) {
            _this.map.removeLayer(_this.selecaoLayer);
            _this.selecaoCoords.coords = [ev.latlng.lat, ev.latlng.lng];
            _this.selecaoLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker(_this.selecaoCoords.coords).addTo(_this.map);
        });
    };
    HomePage.prototype.SelecionarCoordenadasConfimar = function ($event) {
        this.map.off('click');
        this.map.removeLayer(this.selecaoLayer);
        if ($event) {
            if (this.selecaoCoords.tipo == "PertoDeMim") {
                this.pdmComponent.coords = this.pdmComponent.pesquisarComp.coords = this.selecaoCoords.coords;
                this.pdmComponent.pesquisarComp.model = "" + this.selecaoCoords.coords;
            }
            else {
                this.padraoComponent.coordenadasBusca[this.selecaoCoords.tipo] = this.selecaoCoords.coords;
                if (this.selecaoCoords.tipo == "origem")
                    this.padraoComponent.pesquisarComp.first.model = "" + this.selecaoCoords.coords;
                else
                    this.padraoComponent.pesquisarComp.last.model = "" + this.selecaoCoords.coords;
            }
        } //
    };
    HomePage.prototype.InserirCasa = function (event) {
        console.log('CASA');
    };
    HomePage.prototype.InserirTrabalho = function (event) {
        console.log('TRABALHO');
    };
    HomePage.prototype.InserirFavorito = function (event) {
        console.log('FAVORITO');
    };
    HomePage.prototype.ionViewWillLeave = function () {
        var _this = this;
        this.map.eachLayer(function (layer) {
            _this.map.removeLayer(layer);
        });
        document.getElementById('map').innerHTML = "<div id='map'></div>";
    };
    HomePage.prototype.inicializarMapa = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map(this.mapContainer.nativeElement, { zoomControl: true });
        this.map.zoomControl.setPosition('bottomright');
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
        }).addTo(this.map);
        this.map.setView(new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.LatLng(-25.4284, -49.2733), 12); //Curitiba
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_home_view_perto_de_mim_home_view_perto_de_mim__["a" /* HomeViewPertoDeMimComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_home_view_perto_de_mim_home_view_perto_de_mim__["a" /* HomeViewPertoDeMimComponent */])
    ], HomePage.prototype, "pdmComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__components_home_view_viagem_home_view_viagem__["a" /* HomeViewViagemComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_home_view_viagem_home_view_viagem__["a" /* HomeViewViagemComponent */])
    ], HomePage.prototype, "viagemComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_home_view_padrao_home_view_padrao__["a" /* HomeViewPadraoComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_home_view_padrao_home_view_padrao__["a" /* HomeViewPadraoComponent */])
    ], HomePage.prototype, "padraoComponent", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button start ion-button menuToggle="menu">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>MyUrb</ion-title>\n\n    <button end ion-button menuToggle="favoritos">\n\n      <ion-icon name="ios-heart-outline"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n  <div *ngIf="buscando" class="spinner-container" text-center>\n\n    <ion-spinner></ion-spinner>\n\n  </div>\n\n  <div #map id="map">\n\n\n\n    <home-view-padrao \n\n      [(buscando)]="buscando" [debug]="debug" [(view)]="view"\n\n       (pertoDeMimGPS)="PertoDeMimGPS($event)" (buscarRotas)="BuscarRotas($event)"\n\n      (selecionarCoordenadas)="SelecionarCoordenadas($event)">\n\n    </home-view-padrao>\n\n\n\n    <home-view-viagem \n\n      [(buscando)]="buscando" [debug]="debug" [(view)]="view"\n\n      (desenharRota)="DesenharRota($event)" (apagarRota)="ApagarRota()"\n\n      (desenharCaminho)="DesenharCaminho($event)" (apagarCaminhos)="ApagarCaminhos()">\n\n    </home-view-viagem>\n\n\n\n    <home-view-perto-de-mim [(buscando)]="buscando" [debug]="debug"\n\n    (desenharPontos)="DesenharPontos($event)" (apagarPontos)="ApagarPontos()"\n\n    [(view)]="view" (selecionarCoordenadas)="SelecionarCoordenadas($event)">\n\n    </home-view-perto-de-mim>\n\n\n\n    <home-view-selecionar-coordenadas [selecaoCoords]="selecaoCoords"\n\n    (confirmar)="SelecionarCoordenadasConfimar($event)" [(view)]="view">\n\n    </home-view-selecionar-coordenadas>      \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrowdsourcingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrowdsourcingProvider = /** @class */ (function () {
    function CrowdsourcingProvider(http) {
        this.http = http;
        this.API = __WEBPACK_IMPORTED_MODULE_2__types__["a" /* API_URL */] + '/restfulapi/crowdsourcing/';
        this.options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/x-www-form-urlencoded" })
        };
    }
    CrowdsourcingProvider.prototype.crowdsourcingLinhas = function (obj) {
        var data = this.encode(obj);
        console.log(data);
        return this.http.post(this.API + 'cadastrar_crowdsourcing_linhas', data, this.options);
    };
    CrowdsourcingProvider.prototype.encode = function (obj) {
        var data = new URLSearchParams();
        for (var p in obj) {
            data.append(p, '' + obj[p]);
        }
        data = data.toString().replace("%3A", ':');
        return data;
    };
    CrowdsourcingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CrowdsourcingProvider);
    return CrowdsourcingProvider;
}());

//# sourceMappingURL=crowdsourcing.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewPadraoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeViewPadraoComponent = /** @class */ (function () {
    function HomeViewPadraoComponent(alertCtrl, toastCtrl, geolocation) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.buscandoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.pertoDeMimGPS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.buscarRotas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selecionarCoordenadas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.debug = true;
        this.coordenadasBusca = { origem: null, destino: null };
        //this.coordenadasBusca = {origem: [-25.4065781, -49.2526901], destino: [-25.43941425, -49.2687733035987]};
    }
    HomeViewPadraoComponent.prototype.buscandoEstado = function (estado) {
        this.buscando = estado;
        this.buscandoChange.emit(this.buscando);
    };
    HomeViewPadraoComponent.prototype.viewEstado = function (estado) {
        this.view = estado;
        this.viewChange.emit(this.view);
    };
    HomeViewPadraoComponent.prototype.BuscarRota = function () {
        if (this.coordenadasBusca.origem && this.coordenadasBusca.destino) {
            this.buscandoEstado(true);
            this.viewEstado("Viagem");
            this.buscarRotas.emit({ coords: this.coordenadasBusca, tipo: "Simples" });
        }
        else {
            var alert_1 = null;
            if (!this.coordenadasBusca.origem && !this.coordenadasBusca.destino) {
                alert_1 = this.alertCtrl.create({
                    title: 'Insira Origem e Destino',
                    buttons: ['OK']
                });
            }
            else if (!this.coordenadasBusca.origem) {
                alert_1 = this.alertCtrl.create({
                    title: 'Insira Origem',
                    buttons: ['OK']
                });
            }
            else if (!this.coordenadasBusca.destino) {
                alert_1 = this.alertCtrl.create({
                    title: 'Insira Destino',
                    buttons: ['OK']
                });
            }
            alert_1.present();
        }
    };
    HomeViewPadraoComponent.prototype.BuscarRotaComposta = function () {
        if (this.coordenadasBusca.origem && this.coordenadasBusca.destino) {
            this.buscandoEstado(true);
            this.viewEstado("Viagem");
            this.buscarRotas.emit({ coords: this.coordenadasBusca, tipo: "Composta" });
        }
        else {
            var alert_2 = null;
            if (!this.coordenadasBusca.origem && !this.coordenadasBusca.destino) {
                alert_2 = this.alertCtrl.create({
                    title: 'Insira Origem e Destino',
                    buttons: ['OK']
                });
            }
            else if (!this.coordenadasBusca.origem) {
                alert_2 = this.alertCtrl.create({
                    title: 'Insira Origem',
                    buttons: ['OK']
                });
            }
            else if (!this.coordenadasBusca.destino) {
                alert_2 = this.alertCtrl.create({
                    title: 'Insira Destino',
                    buttons: ['OK']
                });
            }
            alert_2.present();
        }
    };
    HomeViewPadraoComponent.prototype.PertoDeMim = function () {
        var _this = this;
        this.buscandoEstado(true);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.pertoDeMimGPS.emit([resp.coords.latitude, resp.coords.longitude]);
            _this.viewEstado("PertoDeMim");
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Não foi possível obter sua localização, mas você pode usar a barra de pesquisa.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
            console.error(error);
            _this.buscandoEstado(false);
            _this.viewEstado("PertoDeMim");
        });
    };
    HomeViewPadraoComponent.prototype.SelecionarNoMapa = function (barra) {
        this.selecionarCoordenadas.emit(barra);
    };
    HomeViewPadraoComponent.prototype.setCoordenadasBusca = function (c) {
        this.coordenadasBusca = c;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HomeViewPadraoComponent.prototype, "buscando", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPadraoComponent.prototype, "buscandoChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HomeViewPadraoComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPadraoComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HomeViewPadraoComponent.prototype, "debug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPadraoComponent.prototype, "pertoDeMimGPS", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPadraoComponent.prototype, "buscarRotas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewPadraoComponent.prototype, "selecionarCoordenadas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__["a" /* PesquisaCoordenadasComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], HomeViewPadraoComponent.prototype, "pesquisarComp", void 0);
    HomeViewPadraoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-view-padrao',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\home-view-padrao\home-view-padrao.html"*/'<div [hidden]="view!==\'Padrao\'">\n\n  <div id="bar-pesquisa" class="leaflet-control">\n\n    <pesquisa-coordenadas placeholder="Origem" [(coords)]="coordenadasBusca.origem" (selecionarCoords)="SelecionarNoMapa(\'origem\')"> </pesquisa-coordenadas>\n\n    <pesquisa-coordenadas placeholder="Destino" [(coords)]="coordenadasBusca.destino" (selecionarCoords)="SelecionarNoMapa(\'destino\')"> </pesquisa-coordenadas>\n\n  </div>\n\n\n\n  <div id="button-buscar" class="button-buscar leaflet-control">\n\n    <button ion-button (click)="BuscarRota()" (press)="BuscarRotaComposta()">Buscar</button>\n\n  </div>\n\n\n\n  <div [hidden]="ocultarBotoesHome" id="button-pertodemim" class="leaflet-control">\n\n    <button ion-button (click)="PertoDeMim()">Perto de Mim</button>\n\n  </div>\n\n</div>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\home-view-padrao\home-view-padrao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomeViewPadraoComponent);
    return HomeViewPadraoComponent;
}());

//# sourceMappingURL=home-view-padrao.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewViagemReportarPageModule", function() { return HomeViewViagemReportarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_view_viagem_reportar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeViewViagemReportarPageModule = /** @class */ (function () {
    function HomeViewViagemReportarPageModule() {
    }
    HomeViewViagemReportarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_view_viagem_reportar__["a" /* HomeViewViagemReportarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_view_viagem_reportar__["a" /* HomeViewViagemReportarPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            ]
        })
    ], HomeViewViagemReportarPageModule);
    return HomeViewViagemReportarPageModule;
}());

//# sourceMappingURL=home-view-viagem-reportar.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function() { return FavoritosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favoritos__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritosPageModule = /** @class */ (function () {
    function FavoritosPageModule() {
    }
    FavoritosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favoritos__["a" /* FavoritosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favoritos__["a" /* FavoritosPage */]),
            ],
        })
    ], FavoritosPageModule);
    return FavoritosPageModule;
}());

//# sourceMappingURL=favoritos.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_com_mapa_pesquisa_coordenadas_modal_com_mapa__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favoritos_favoritos__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritosPage = /** @class */ (function () {
    function FavoritosPage(navCtrl, navParams, modalCtrl, FavoritosProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.FavoritosProvider = FavoritosProvider;
        this.alertCtrl = alertCtrl;
        this.baseEnderecos = [{}, {}];
        this.baseHorarios = [];
        this.customEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.favoritosView = "enderecos";
    }
    FavoritosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.FavoritosProvider.baseEnderecos().then(function (r) {
            if (r)
                _this.baseEnderecos = r;
        });
        this.FavoritosProvider.baseHorarios().then(function (r) {
            for (var key in r) {
                if (r.hasOwnProperty(key) && r[key]) {
                    _this.baseHorarios.push(r[key]);
                }
            }
            //console.log(this.baseHorarios);
        });
    };
    FavoritosPage.prototype.Voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FavoritosPage.prototype.EnderecosCoords = function (opt, index) {
        var _this = this;
        if (opt == 'Casa')
            index = 0;
        else if (opt == 'Trabalho')
            index = 1;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_com_mapa_pesquisa_coordenadas_modal_com_mapa__["a" /* PesquisaCoordenadasModalComMapaPage */], { placeholder: "Favoritos: " + opt, model: opt });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.FavoritosProvider.editarEnderecoCoords(data.coords, index).then(function (r) {
                    _this.baseEnderecos[index].coords = data.coords;
                    if (data.model) {
                        _this.FavoritosProvider.editarEnderecoNome(data.model, index).then(function (r) {
                            _this.baseEnderecos[index].nome = data.model;
                        });
                    }
                });
            }
        });
        modal.present();
    };
    FavoritosPage.prototype.EnderecosNome = function (opt, index) {
        var _this = this;
        if (opt == 'Casa')
            index = 0;
        else if (opt == 'Trabalho')
            index = 1;
        var alert = this.alertCtrl.create({
            title: 'Renomear ' + opt,
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'Endereco'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.FavoritosProvider.editarEnderecoNome(data.nome, index).then(function (r) {
                            _this.baseEnderecos[index].nome = data.nome;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    FavoritosPage.prototype.NovoEndereco = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_com_mapa_pesquisa_coordenadas_modal_com_mapa__["a" /* PesquisaCoordenadasModalComMapaPage */], { placeholder: "Favoritos: Novo Endereço", model: null });
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
                _this.FavoritosProvider.inserirEndereco(data.coords).then(function (r) {
                    if (data.model) {
                        _this.FavoritosProvider.editarEnderecoNome(data.model, _this.baseEnderecos.length).then(function (r) {
                            _this.baseEnderecos.push({ nome: data.model, coords: data.coords });
                            console.log(_this.baseEnderecos);
                        });
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Nome para o novo favorito',
                            inputs: [
                                {
                                    name: 'nome',
                                    placeholder: 'Endereco'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Confirmar',
                                    handler: function (inp) {
                                        _this.FavoritosProvider.editarEnderecoNome(inp.nome, _this.baseEnderecos.length).then(function (r) {
                                            _this.baseEnderecos.push({ nome: inp.nome, coords: data.coords });
                                        });
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                });
            }
        });
        modal.present();
    };
    FavoritosPage.prototype.RemoverEndereco = function (index) {
        var _this = this;
        return this.FavoritosProvider.removerEndereco(index).then(function (result) {
            _this.baseEnderecos.splice(index, 1);
        });
    };
    FavoritosPage.prototype.RemoverFavorito = function (linha, index) {
        var _this = this;
        return this.FavoritosProvider.favoritarHorario(linha).then(function (result) {
            _this.baseHorarios.splice(index, 1);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], FavoritosPage.prototype, "customEvent", void 0);
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\favoritos\favoritos.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="Voltar()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title text-center>\n\n        <ion-icon name="heart"></ion-icon>\n\n      </ion-title>\n\n      <ion-title text-center>Favoritos</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-segment [(ngModel)]="favoritosView">\n\n      <ion-segment-button value="enderecos">\n\n          <ion-icon name="navigate"></ion-icon> Endereços\n\n      </ion-segment-button>\n\n      <ion-segment-button value="horarios">\n\n          <ion-icon name="clock"></ion-icon> Horários \n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="favoritosView">\n\n      <div *ngSwitchCase="\'enderecos\'">\n\n        <p padding-top>Toque num endereço para configurar sua localização. Toque e segure para configurar seu nome.</p>\n\n        <ion-list>\n\n          \n\n          <button ion-item (click)="EnderecosCoords(\'Casa\')" (press)="EnderecosNome(\'Casa\')"><ion-icon name="home" color="primary"></ion-icon>\n\n             Casa <span class="detalhe-info"> {{baseEnderecos[0].nome}}</span>\n\n          </button>\n\n          \n\n          <button ion-item (click)="EnderecosCoords(\'Trabalho\')" (press)="EnderecosNome(\'Trabalho\')"><ion-icon name="briefcase" color="primary"></ion-icon> \n\n            Trabalho <span class="detalhe-info"> {{baseEnderecos[1].nome}}</span> \n\n          </button>\n\n\n\n          <ion-grid no-padding>\n\n          <ion-row *ngFor="let e of baseEnderecos | slice: 2 ;  let i = index">\n\n            <ion-col class="endereco-nome">\n\n              <button ion-item (click)="EnderecosCoords(e.nome, i+2)" (press)="EnderecosNome(e.nome, i+2)" >\n\n                <ion-icon name="navigate" color="primary"></ion-icon> {{e.nome}}  \n\n              </button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button color="danger" outline (click)="RemoverEndereco(i+2)">Remover</button>\n\n            </ion-col>\n\n          </ion-row>\n\n          </ion-grid>\n\n\n\n          <button ion-item (click)="NovoEndereco(\'Trabalho\')" ><ion-icon name="add-circle" color="primary"></ion-icon> Novo Endereço</button>\n\n        </ion-list>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'horarios\'">\n\n          <ion-grid no-padding>\n\n            <ion-row *ngFor="let e of baseHorarios; let i = index">\n\n              <ion-col class="endereco-nome">\n\n                <button ion-item >\n\n                  <ion-icon name="bus" style="margin-right:-20px;" [color]="e.cor" item-start></ion-icon>\n\n                  <p class="codigo" [ngClass]="e.cor">{{e.codigo}}</p><p class="nome">{{e.nome}}</p>  \n\n                </button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button color="danger" outline (click)="RemoverFavorito(e, i)">Remover</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\favoritos\favoritos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_favoritos_favoritos__["a" /* FavoritosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioDetalhesPageModule", function() { return HorarioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horario_detalhes__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorarioDetalhesPageModule = /** @class */ (function () {
    function HorarioDetalhesPageModule() {
    }
    HorarioDetalhesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horario_detalhes__["a" /* HorarioDetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horario_detalhes__["a" /* HorarioDetalhesPage */]),
            ],
        })
    ], HorarioDetalhesPageModule);
    return HorarioDetalhesPageModule;
}());

//# sourceMappingURL=horario-detalhes.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItinerarioDetalhesPageModule", function() { return ItinerarioDetalhesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itinerario_detalhes__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItinerarioDetalhesPageModule = /** @class */ (function () {
    function ItinerarioDetalhesPageModule() {
    }
    ItinerarioDetalhesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__itinerario_detalhes__["a" /* ItinerarioDetalhesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__itinerario_detalhes__["a" /* ItinerarioDetalhesPage */]),
            ],
        })
    ], ItinerarioDetalhesPageModule);
    return ItinerarioDetalhesPageModule;
}());

//# sourceMappingURL=itinerario-detalhes.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItinerarioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_itinerario_itinerario__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pontoFeature__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_favoritos_favoritos__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItinerarioDetalhesPage = /** @class */ (function () {
    function ItinerarioDetalhesPage(navCtrl, navParams, ItinerarioProvider, FavoritosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ItinerarioProvider = ItinerarioProvider;
        this.FavoritosProvider = FavoritosProvider;
        this.linha = navParams.data;
    }
    ItinerarioDetalhesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.inicializarMapa();
        console.log(this.linha);
        this.itinerarioLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(this.linha).addTo(this.map);
        this.map.fitBounds(this.itinerarioLayer.getBounds());
        this.ItinerarioProvider.getPontos(this.linha.properties.codigo)
            .then(function (data) {
            _this.pontosLayer = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(data, { onEachFeature: __WEBPACK_IMPORTED_MODULE_4__providers_pontoFeature__["a" /* PontoFeature */].onEachPonto, pointToLayer: __WEBPACK_IMPORTED_MODULE_4__providers_pontoFeature__["a" /* PontoFeature */].pontoToLayer }).addTo(_this.map);
        }, function (error) { return console.error(error); });
        this.FavoritosProvider.baseHorarios().then(function (b) {
            if (b && b[_this.linha.properties.codigo])
                _this.favoritado = true;
            else
                _this.favoritado = false;
        });
    };
    ItinerarioDetalhesPage.prototype.ionViewWillLeave = function () {
        this.map.remove();
        document.getElementById('itimap').innerHTML = "<div id='itimap'></div>";
    };
    ItinerarioDetalhesPage.prototype.inicializarMapa = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("itimap", { zoomControl: true });
        this.map.zoomControl.setPosition('bottomright');
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
        }).addTo(this.map);
        this.map.setView(new __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.LatLng(-25.4284, -49.2733), 12); //Curitiba
    };
    ItinerarioDetalhesPage.prototype.favoritar = function () {
        var _this = this;
        this.FavoritosProvider.favoritarHorario(this.linha.properties).then(function (r) {
            _this.favoritado = !_this.favoritado;
            /* this.FavoritosProvider.baseHorarios().then((b)=>{
              console.log(b);
            }); */
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('itimap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ItinerarioDetalhesPage.prototype, "mapContainer", void 0);
    ItinerarioDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itinerario-detalhes',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\itinerario\itinerario-detalhes\itinerario-detalhes.html"*/'<!--\n\n  Generated template for the HorarioDetalhesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>{{linha.properties.nome}}</ion-title>\n\n    <button end ion-button id="addFavorito" (click)="favoritar()">\n\n        <ion-icon *ngIf="!favoritado" name="ios-heart-outline" ></ion-icon>\n\n        <ion-icon *ngIf="favoritado" name="ios-heart" color="danger"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n        <ion-card-header text-center>\n\n          <b>{{linha.properties.nome}}</b>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <ion-icon id="cardIcon" [color]="linha.properties.cor" name="bus"></ion-icon>\n\n              </ion-thumbnail>\n\n              <h2>\n\n                <b>Código da Linha:</b> {{linha.properties.codigo}}</h2>\n\n              <h2 *ngIf="!linha.properties.apenas_cartao">\n\n                <b>Pagamento:</b>\n\n                <br/> Dinheiro ou Cartão\n\n              </h2>\n\n              <h2 *ngIf="linha.properties.apenas_cartao">\n\n                <b>Pagamento:</b>\n\n                <br/> Somente cartão\n\n              </h2>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n  <div id="itimap">\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\itinerario\itinerario-detalhes\itinerario-detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_itinerario_itinerario__["a" /* ItinerarioProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_favoritos_favoritos__["a" /* FavoritosProvider */]])
    ], ItinerarioDetalhesPage);
    return ItinerarioDetalhesPage;
}());

//# sourceMappingURL=itinerario-detalhes.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItinerarioPageModule", function() { return ItinerarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itinerario__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItinerarioPageModule = /** @class */ (function () {
    function ItinerarioPageModule() {
    }
    ItinerarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__itinerario__["a" /* ItinerarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__itinerario__["a" /* ItinerarioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ItinerarioPageModule);
    return ItinerarioPageModule;
}());

//# sourceMappingURL=itinerario.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItinerarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__itinerario_detalhes_itinerario_detalhes__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_itinerario_itinerario__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItinerarioPage = /** @class */ (function () {
    function ItinerarioPage(navCtrl, navParams, ItinerarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ItinerarioProvider = ItinerarioProvider;
        this.categorias = [];
        this.linhas = [];
        this.linhas_filtradas = [];
        this.buscaControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.buscando = true;
    }
    ItinerarioPage.prototype.ionViewDidLoad = function () {
        var vm = this;
        vm.ItinerarioProvider.get()
            .then(function (data) {
            vm.categorias = data.categorias;
            vm.linhas = data.linhas;
            vm.filtrarLinhas('');
            vm.buscando = false;
        }, function (error) { return console.error(error); });
        vm.buscaControl.valueChanges.debounceTime(700)
            .subscribe(function (input) {
            vm.filtrarLinhas(input);
            vm.buscando = false;
        });
    };
    ItinerarioPage.prototype.filtrarLinhas = function (input) {
        var vm = this;
        vm.linhas_filtradas = vm.linhas.filter(function (item) {
            return (input === '' || item.properties.nome.toLowerCase().indexOf(input.toLowerCase()) > -1
                || item.properties.codigo == input);
        });
    };
    ItinerarioPage.prototype.onBuscaInput = function () {
        this.buscando = true;
    };
    ItinerarioPage.prototype.exibirItinerario = function (l) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__itinerario_detalhes_itinerario_detalhes__["a" /* ItinerarioDetalhesPage */], l);
    };
    ItinerarioPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ItinerarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itinerario',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\itinerario\itinerario.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="voltar()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>\n\n      <ion-icon name="navigate"></ion-icon>\n\n    </ion-title>\n\n    <ion-title text-center>Itinerários</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-searchbar [formControl]="buscaControl" (ionInput)="onBuscaInput()" placeholder="Pesquise sua linha">Linha</ion-searchbar>\n\n    </ion-card-header>\n\n\n\n    <div *ngIf="buscando" class="spinner-container" text-center>\n\n      <ion-spinner></ion-spinner>\n\n    </div>\n\n\n\n    <div *ngIf="problema">\n\n      ERRO: {{problema}}\n\n    </div> \n\n    \n\n    <ion-list>\n\n      <div *ngFor="let c of categorias">\n\n        <ion-item-divider color="primary" text-center>{{c}}</ion-item-divider>\n\n        <button ion-item *ngFor="let l of linhas_filtradas | linhasCategorias:c" (click)="exibirItinerario(l)" >\n\n          <ion-icon name="bus" style="margin-right:-20px;" [color]="l.properties.cor" item-start></ion-icon>\n\n          <p class="codigo" [ngClass]="l.properties.cor">{{l.properties.codigo}}</p><p class="nome">{{l.properties.nome}}</p>\n\n        </button>\n\n      </div>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\itinerario\itinerario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_itinerario_itinerario__["a" /* ItinerarioProvider */]])
    ], ItinerarioPage);
    return ItinerarioPage;
}());

//# sourceMappingURL=itinerario.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linhas_categorias_linhas_categorias__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__linhas_categorias_linhas_categorias__["a" /* LinhasCategoriasPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__linhas_categorias_linhas_categorias__["a" /* LinhasCategoriasPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PontoPageModule", function() { return PontoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ponto__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PontoPageModule = /** @class */ (function () {
    function PontoPageModule() {
    }
    PontoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ponto__["a" /* PontoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ponto__["a" /* PontoPage */]),
            ],
        })
    ], PontoPageModule);
    return PontoPageModule;
}());

//# sourceMappingURL=ponto.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pontos_pontos__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pontoFeature__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var L = window['L'];
var PontoPage = /** @class */ (function () {
    function PontoPage(navCtrl, navParams, PontosProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PontosProvider = PontosProvider;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsDismissed = false;
        this.clusterGroup = L.markerClusterGroup({ maxClusterRadius: this.zoomRadius, animate: true, chunkedLoading: true });
    }
    PontoPage.prototype.zoomRadius = function (zoom) {
        if (zoom > 16)
            return 0;
        else if (zoom == 16)
            return 50;
        else
            return 80;
    };
    PontoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present();
        this.initializeMap();
        this.PontosProvider.getArray()
            .then(function (data) {
            var pontosLayer = L.geoJSON(data, { onEachFeature: __WEBPACK_IMPORTED_MODULE_6__providers_pontoFeature__["a" /* PontoFeature */].onEachPonto, pointToLayer: __WEBPACK_IMPORTED_MODULE_6__providers_pontoFeature__["a" /* PontoFeature */].pontoToLayer });
            _this.clusterGroup.addLayer(pontosLayer);
            _this.map.addLayer(_this.clusterGroup);
            _this.loading.dismiss();
        }, function (error) { return console.error(error); });
    };
    PontoPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PontoPage.prototype.initializeMap = function () {
        this.map = L.map("pontomap", { zoomControl: true });
        this.map.zoomControl.setPosition('bottomright');
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
        }).addTo(this.map);
        this.map.setView(new L.LatLng(-25.4284, -49.2733), 12); //Curitiba    
    };
    PontoPage.prototype.ionViewWillLeave = function () {
        this.map.off();
        this.map.remove();
        document.getElementById('pontomap').innerHTML = "<div id='pontomap'></div>";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pontomap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PontoPage.prototype, "mapContainer", void 0);
    PontoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ponto',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\ponto\ponto.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="voltar()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title text-center><ion-icon name="pin"></ion-icon></ion-title>\n\n      <ion-title text-center>Pontos</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div id="pontomap">\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\ponto\ponto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pontos_pontos__["a" /* PontosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PontoPage);
    return PontoPage;
}());

//# sourceMappingURL=ponto.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodePageModule", function() { return QrcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QrcodePageModule = /** @class */ (function () {
    function QrcodePageModule() {
    }
    QrcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode__["a" /* QrcodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qrcode__["a" /* QrcodePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], QrcodePageModule);
    return QrcodePageModule;
}());

//# sourceMappingURL=qrcode.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pontos_pontos__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QrcodePage = /** @class */ (function () {
    function QrcodePage(navCtrl, navParams, barcodeScanner, PontosProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.PontosProvider = PontosProvider;
        this.toastCtrl = toastCtrl;
    }
    QrcodePage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    QrcodePage.prototype.Test = function () {
        var _this = this;
        this.PontosProvider.getLocal().
            then(function (data) {
            if (data[_this.testQR])
                _this.ponto = data[_this.testQR];
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Não encontrei o ponto ' + _this.testQR,
                    position: 'bottom',
                    showCloseButton: true,
                    closeButtonText: 'OK',
                    dismissOnPageChange: true
                });
                toast.present();
            }
        });
    };
    QrcodePage.prototype.Click = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.PontosProvider.getLocal().
                then(function (data) {
                if (data[barcodeData.text])
                    _this.ponto = data[barcodeData.text];
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Não encontrei o ponto ' + barcodeData.text,
                        position: 'bottom',
                        showCloseButton: true,
                        closeButtonText: 'OK',
                        dismissOnPageChange: true
                    });
                    toast.present();
                }
            });
        }).catch(function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Erro na leitura.',
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
            console.log('Error', err);
        });
    };
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrcode',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\qrcode\qrcode.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="voltar()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title text-center><ion-icon name="qr-scanner"></ion-icon></ion-title>\n\n      <ion-title text-center>Código QR</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div *ngIf="ponto">\n\n    <ion-card>\n\n    <ion-card-header text-center>\n\n      <h1>Ponto {{ponto.properties.numero_ponto}}</h1>\n\n    </ion-card-header>\n\n      <ion-list padding-left>\n\n          <ion-item>\n\n            <ion-icon name="locate" item-start></ion-icon>\n\n            {{ponto.geometry.coordinates}}\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-icon name="navigate" item-start></ion-icon>\n\n            {{ponto.properties.endereco}}\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-icon name="information-circle" item-start></ion-icon>\n\n            {{ponto.properties.tipo}}\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card>\n\n    \n\n      <ion-card>\n\n      <ion-card-header text-center>\n\n          Linhas que passam aqui:\n\n      </ion-card-header>\n\n      \n\n      <ion-list padding-left>\n\n        <ion-item *ngFor="let l of ponto.properties.linhas">\n\n            <ion-thumbnail item-start>\n\n              <ion-icon class="card-bus-icon" [color]="l.cor" name="bus"></ion-icon>\n\n            </ion-thumbnail>\n\n              <h2 padding-bottom> <b>{{l.nome}}</b> </h2>\n\n              <h2><b>Código da Linha:</b> {{l.codigo}}</h2>\n\n              \n\n              <h2 *ngIf="!l.apenas_cartao"> <b>Pagamento:</b>  Dinheiro ou Cartão </h2>\n\n              <h2 *ngIf="l.apenas_cartao"> <b>Pagamento:</b>  Somente cartão </h2>\n\n        </ion-item>\n\n      </ion-list>\n\n      </ion-card>\n\n    </div>\n\n    \n\n    <div *ngIf="false">\n\n      <ion-input [(ngModel)]="testQR"> Test</ion-input>\n\n      <button ion-button (click)="Test()"> Test </button>\n\n    </div>\n\n    <div id="button-qr">\n\n      <button ion-button full icon-left (click)="Click()" color="primary">Digitalizar <ion-icon padding-left name="qr-scanner"></ion-icon></button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\qrcode\qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pontos_pontos__["a" /* PontosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioPageModule", function() { return HorarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horario__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HorarioPageModule = /** @class */ (function () {
    function HorarioPageModule() {
    }
    HorarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horario__["a" /* HorarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horario__["a" /* HorarioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], HorarioPageModule);
    return HorarioPageModule;
}());

//# sourceMappingURL=horario.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__horario_detalhes_horario_detalhes__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_horario_horario__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HorarioPage = /** @class */ (function () {
    function HorarioPage(navCtrl, navParams, HorarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HorarioProvider = HorarioProvider;
        this.categorias = [];
        this.linhas = [];
        this.linhas_filtradas = [];
        this.linhas_filtradas_categorias = [];
        this.buscaControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.buscando = true;
    }
    HorarioPage.prototype.ionViewDidLoad = function () {
        var vm = this;
        vm.HorarioProvider.getLinhas()
            .then(function (data) {
            vm.categorias = data.categorias;
            vm.linhas = data.linhas;
            vm.filtrarLinhas('');
            vm.buscando = false;
        }, function (error) { return console.error(error); });
        vm.buscaControl.valueChanges.debounceTime(700)
            .subscribe(function (input) {
            vm.filtrarLinhas(input);
            vm.buscando = false;
        });
    };
    HorarioPage.prototype.filtrarLinhas = function (input) {
        var vm = this;
        vm.linhas_filtradas = vm.linhas.filter(function (item) {
            return (input === '' || item.nome.toLowerCase().indexOf(input.toLowerCase()) > -1
                || item.codigo == input);
        });
    };
    HorarioPage.prototype.onBuscaInput = function () {
        this.buscando = true;
    };
    HorarioPage.prototype.exibirHorario = function (linha) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__horario_detalhes_horario_detalhes__["a" /* HorarioDetalhesPage */], linha);
    };
    HorarioPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    HorarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horario',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\horario\horario.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="voltar()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>\n\n      <ion-icon name="clock"></ion-icon>\n\n    </ion-title>\n\n    <ion-title text-center>Horários</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-searchbar [formControl]="buscaControl" (ionInput)="onBuscaInput()" placeholder="Pesquise sua linha">Linha</ion-searchbar>\n\n    </ion-card-header>\n\n\n\n    <div *ngIf="buscando" class="spinner-container" text-center>\n\n      <ion-spinner></ion-spinner>\n\n    </div>\n\n\n\n    <div *ngIf="problema">\n\n      ERRO: {{problema}}\n\n    </div> \n\n    \n\n    <ion-list>\n\n      <div *ngFor="let c of categorias">\n\n        <ion-item-divider color="primary" text-center>{{c}}</ion-item-divider>\n\n        <button ion-item *ngFor="let l of linhas_filtradas | linhasCategorias: c" (click)="exibirHorario(l)" >\n\n          <ion-icon name="bus" style="margin-right:-20px;" [color]="l.cor" item-start></ion-icon>\n\n          <p class="codigo" [ngClass]="l.cor">{{l.codigo}}</p><p class="nome">{{l.nome}}</p>\n\n        </button>\n\n      </div>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\horario\horario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_horario_horario__["a" /* HorarioProvider */]])
    ], HorarioPage);
    return HorarioPage;
}());

//# sourceMappingURL=horario.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrePageModule", function() { return SobrePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sobre__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SobrePageModule = /** @class */ (function () {
    function SobrePageModule() {
    }
    SobrePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sobre__["a" /* SobrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sobre__["a" /* SobrePage */]),
            ],
        })
    ], SobrePageModule);
    return SobrePageModule;
}());

//# sourceMappingURL=sobre.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sobreInfo = 'comoFunciona';
    }
    SobrePage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\sobre\sobre.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="voltar()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title text-center><ion-icon name="information-circle"></ion-icon></ion-title>\n\n      <ion-title text-center>Sobre</ion-title>\n\n     </ion-navbar>  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n  <h1 class="sobre-titulo" text-center>MyUrb</h1>\n\n  <ion-segment [(ngModel)]="sobreInfo">\n\n    <ion-segment-button value="comoFunciona">\n\n        <ion-icon name="help-circle"></ion-icon> Como Funciona \n\n    </ion-segment-button>\n\n    <ion-segment-button value="privacidade">\n\n        <ion-icon name="lock"></ion-icon> Privacidade \n\n    </ion-segment-button>\n\n    <ion-segment-button value="sobre">\n\n        <ion-icon name="information-circle"></ion-icon> Sobre o MyUrb \n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="sobreInfo">\n\n    <div *ngSwitchCase="\'comoFunciona\'">\n\n\n\n        <ion-card>\n\n            <ion-card-header text-wrap text-justify>\n\n                O MyUrb oferece serviços básicos, sendo que alguns são online e outros offline, para auxiliar o usuário através do transporte público de Curitiba. \n\n            </ion-card-header>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <ion-card-header>\n\n                Serviços Online:\n\n            </ion-card-header>\n\n            <ion-card-content text-justify>\n\n                <li padding-bottom> Busca de pontos próximos: na tela inicial, aperte o botão "PERTO DE MIM" para ser redirecionado para uma tela que apresente os pontos de ônibus que se encontrem perto de sua localização. Caso não esteja com o GPS ativado, é necessário inserir um endereço manualmente atráves da barra de pesquisa desta tela. </li>\n\n                <li padding-bottom> Gerar rotas de ônibus: insira um endereço de origem e outro para o destino, através das barras de pesquisas, e aperte o botão de "BUSCAR" para ser redirecionado para uma tela que apresente as rotas encontradas.  </li>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      \n\n        <ion-card>\n\n            <ion-card-header>\n\n                Serviços Offline:\n\n            </ion-card-header>\n\n            <ion-card-content text-justify>\n\n                <li padding-bottom> Consultar itinerários: através do menu lateral esquerdo, selecione a opção "ITINERÁRIOS". Na nova tela, seleciona a linha de ônibus desejada para visualizar o itinerário realizado.</li>\n\n                <li padding-bottom> Consultar itinerários: através do menu lateral esquerdo, selecione a opção "HORÁRIOS". Na nova tela, seleciona a linha de ônibus desejada para visualizar os horários de partida do ponto inicial.</li>\n\n                <li padding-bottom> Consultar pontos: através do menu lateral esquerdo, selecione a opção "PONTOS". Na nova tela, seleciona o ponto de ônibus desejada para visualizar seus detalhes.</li>\n\n                <li padding-bottom> Código QR: através do menu lateral esquerdo, selecione a opção "CÓDIGO QR". Na nova tela, *digite* o código para visualizar detalhes sobre o ponto de ônibus.</li>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div *ngSwitchCase="\'privacidade\'">\n\n      <ion-card>\n\n        <ion-card-header text-wrap text-justify>\n\n          O MyUrb é uma aplicação que realiza a coleta de informações para aprimorar seu funcionamento. Aqui estão alguns esclarecimentos sobre esta prática.\n\n        </ion-card-header>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <ion-card-header text-wrap text-justify> Quais informações são coletadas? </ion-card-header>\n\n        <ion-card-content text-justify>São coletadas informações sobre as viagens realizadas (data, horário e ponto de ônibus de partida, horário e ponto de ônibus de chegada e linha utilizadas), adversidades reportadas sobre pontos e linhas de ônibus.</ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-header text-wrap text-justify> Alguma informação pessoal é coletada?</ion-card-header>\n\n        <ion-card-content text-justify>Não. Tudo ocorre de forma anônima, visando não prejudicar de nenhuma forma o usuário.</ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-header text-wrap text-justify> Como as informações são utilizadas?</ion-card-header>\n\n        <ion-card-content text-justify>As informações coletadas são utilizadas durante a criação de rotas, penalizando rotas que contém pontos e linhas de ônibus com maior quantidade de adversidades. </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-header text-wrap text-justify> É possível utilizar a aplicação sem fornecer nenhuma informação?</ion-card-header>\n\n        <ion-card-content text-justify>Sim, e todas as funcionalidades estarão disponíveis. Para isto, durante a criação de rota, é necessário que ao final do percurso, a viagem seja cancelada.</ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-header text-wrap text-justify> Quem pode acessar as informações?</ion-card-header>\n\n        <ion-card-content text-justify>Qualquer pessoa pode visualizar através da página web do projeto, chamada <a>MyUrbAnalytics</a>.</ion-card-content>\n\n      </ion-card>\n\n\n\n    </div>\n\n    <div *ngSwitchCase="\'sobre\'">\n\n        <ion-card>\n\n          <ion-card-header text-wrap text-justify> O projeto MyUrb surgiu como resultado de um Trabalho de Conclusão de Curso de Graduação em Engenharia de Computação na Universidade Tecnológica Federal do Paraná (UTFPR) - campus Curitiba. </ion-card-header>\n\n        </ion-card>\n\n        \n\n        <ion-card>\n\n            <ion-card-header text-wrap text-justify> O principal objetivo do MyUrb é auxiliar os usuários através do transporte público de Curitiba, ao mesmo tempo que disponibiliza as informações anônimas coletadas para auxiliar a administração da cidade. </ion-card-header>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n          <ion-card-header text-wrap text-justify> O projeto possui código aberto e utiliza dados abertos da cidade de Curitiba para funcionar.</ion-card-header>\n\n        </ion-card>\n\n      \n\n        <ion-card>\n\n          <ion-card-header > \n\n            <ion-icon style="font-size:10rem" name="ai-wheelchair"></ion-icon> \n\n            <div style="display:inline">\n\n              <p>Ícone <i>wheelchair</i> por Adrien Coquet do Noun Project</p>\n\n              <p><i>Wheelchair icon by Adrien Coquet from the Noun Project</i></p>\n\n            </div>\n\n          </ion-card-header>\n\n        </ion-card>\n\n\n\n      \n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\sobre\sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontoFeature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ponto__ = __webpack_require__(177);


/**
 * Representa pontos de ônibus num mapa leaflet.
 *
 */
var PontoFeature = /** @class */ (function () {
    function PontoFeature(tupla) {
        this.type = "Feature";
        this.type = "Feature";
        this.geometry = JSON.parse(tupla.geojson);
        if (tupla.endereco && tupla.tipo)
            this.properties = new __WEBPACK_IMPORTED_MODULE_1__ponto__["a" /* Ponto */](tupla);
        else
            this.properties = { numero_ponto: tupla.numero_ponto };
    }
    PontoFeature.onEachPonto = function (feature, layer) {
        var linhasString = "<p>Ponto " + feature.properties.numero_ponto + "</p>";
        if (feature.properties instanceof __WEBPACK_IMPORTED_MODULE_1__ponto__["a" /* Ponto */]) {
            linhasString += "<span class='endereco'> " + feature.properties.endereco + " </span> ";
            feature.properties.linhas.forEach(function (l) {
                linhasString += "<p><span class='codigo " + l.cor + "'> " + l.codigo + " </span> " + l.nome + " </p>";
            });
        }
        layer.bindPopup(linhasString);
    };
    PontoFeature.pontoToLayer = function (feature, LatLng) {
        var cor = "yellow";
        if (feature.properties instanceof __WEBPACK_IMPORTED_MODULE_1__ponto__["a" /* Ponto */]) {
            var plataformas = ["estação tubo", "plataforma", "terminal"];
            if (plataformas.indexOf(feature.properties.tipo.toLowerCase()) > -1) {
                cor = "#0006FF";
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0_leaflet___default.a.circleMarker(LatLng, {
            radius: 8,
            fillColor: cor,
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    };
    PontoFeature.pontoToLayerVerde = function (feature, LatLng) {
        var cor = "lightgreen";
        if (feature.properties instanceof __WEBPACK_IMPORTED_MODULE_1__ponto__["a" /* Ponto */]) {
            var plataformas = ["estação tubo", "plataforma", "terminal"];
            if (plataformas.indexOf(feature.properties.tipo.toLowerCase()) > -1) {
                cor = "#0006FF";
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0_leaflet___default.a.circleMarker(LatLng, {
            radius: 8,
            fillColor: cor,
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    };
    return PontoFeature;
}());

//# sourceMappingURL=pontoFeature.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritosProvider = /** @class */ (function () {
    function FavoritosProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.CHAVE_FAVORITOS_ENDERECOS = 'favoritos-enderecos';
        this.CHAVE_FAVORITOS_HORARIOS = 'favoritos-horarios';
        this.baseEnderecos().then(function (result) {
            if (!result) {
                _this.storage.set(_this.CHAVE_FAVORITOS_ENDERECOS, [{}, {}]);
            }
        });
        this.baseHorarios().then(function (result) {
            if (!result) {
                _this.storage.set(_this.CHAVE_FAVORITOS_HORARIOS, {});
            }
        });
    }
    FavoritosProvider.prototype.inserirEndereco = function (coords) {
        var _this = this;
        return this.baseEnderecos().then(function (result) {
            if (result) {
                result.push({ nome: null, coords: coords });
                return _this.storage.set(_this.CHAVE_FAVORITOS_ENDERECOS, result);
            }
        });
    };
    FavoritosProvider.prototype.editarEnderecoCoords = function (coords, index) {
        var _this = this;
        return this.baseEnderecos().then(function (result) {
            result[index].coords = coords;
            return _this.storage.set(_this.CHAVE_FAVORITOS_ENDERECOS, result);
        });
    };
    FavoritosProvider.prototype.editarEnderecoNome = function (nome, index) {
        var _this = this;
        return this.baseEnderecos().then(function (result) {
            result[index].nome = nome;
            return _this.storage.set(_this.CHAVE_FAVORITOS_ENDERECOS, result);
        });
    };
    FavoritosProvider.prototype.baseEnderecos = function () {
        return this.storage.get(this.CHAVE_FAVORITOS_ENDERECOS);
    };
    FavoritosProvider.prototype.removerEndereco = function (index) {
        var _this = this;
        return this.baseEnderecos().then(function (result) {
            if (result) {
                result.splice(index, 1);
                return _this.storage.set(_this.CHAVE_FAVORITOS_ENDERECOS, result);
            }
        });
    };
    FavoritosProvider.prototype.baseHorarios = function () {
        return this.storage.get(this.CHAVE_FAVORITOS_HORARIOS);
    };
    FavoritosProvider.prototype.favoritarHorario = function (linha) {
        var _this = this;
        return this.baseHorarios().then(function (result) {
            if (result[linha.codigo]) {
                result[linha.codigo] = null;
            }
            else {
                result[linha.codigo] = linha;
            }
            return _this.storage.set(_this.CHAVE_FAVORITOS_HORARIOS, result);
        });
    };
    FavoritosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FavoritosProvider);
    return FavoritosProvider;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_qrcode_qrcode_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alerta_alerta_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ponto_ponto_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_horario_horario_module__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_horario_horario_detalhes_horario_detalhes_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_itinerario_itinerario_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_itinerario_itinerario_detalhes_itinerario_detalhes_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_view_viagem_home_view_viagem_reportar_home_view_viagem_reportar_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_favoritos_favoritos_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_itinerario_itinerario__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_horario_horario__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_pontos_proximos_pontos_proximos__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_busca_simples_busca_simples__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_pontos_pontos__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_pesquisa_coordenadas_modal_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_caminho_caminho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_home_view_viagem_home_view_viagem_selecionar_rota_home_view_viagem_selecionar_rota_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_crowdsourcing_crowdsourcing__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_favoritos_favoritos__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_com_mapa_pesquisa_coordenadas_modal_com_mapa_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_rota_rota__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    dayNames: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                }, {
                    links: [
                        { loadChildren: '../components/home-view-viagem/home-view-viagem-selecionar-rota/home-view-viagem-selecionar-rota.module#HomeViewViagemSelecionarRotaPageModule', name: 'HomeViewViagemSelecionarRotaPage', segment: 'home-view-viagem-selecionar-rota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/pesquisa-coordenadas/pesquisa-coordenadas-modal-com-mapa/pesquisa-coordenadas-modal-com-mapa.module#PesquisaCoordenadasModalComMapaPageModule', name: 'PesquisaCoordenadasModalComMapaPage', segment: 'pesquisa-coordenadas-modal-com-mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/pesquisa-coordenadas/pesquisa-coordenadas-modal/pesquisa-coordenadas-modal.module#PesquisaCoordenadasModalPageModule', name: 'PesquisaCoordenadasModalPage', segment: 'pesquisa-coordenadas-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alerta/alerta.module#AlertaPageModule', name: 'AlertaPage', segment: 'alerta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/home-view-viagem/home-view-viagem-reportar/home-view-viagem-reportar.module#HomeViewViagemReportarPageModule', name: 'HomeViewViagemReportarPage', segment: 'home-view-viagem-reportar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horario/horario-detalhes/horario-detalhes.module#HorarioDetalhesPageModule', name: 'HorarioDetalhesPage', segment: 'horario-detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itinerario/itinerario-detalhes/itinerario-detalhes.module#ItinerarioDetalhesPageModule', name: 'ItinerarioDetalhesPage', segment: 'itinerario-detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itinerario/itinerario.module#ItinerarioPageModule', name: 'ItinerarioPage', segment: 'itinerario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ponto/ponto.module#PontoPageModule', name: 'PontoPage', segment: 'ponto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrcodePageModule', name: 'QrcodePage', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horario/horario.module#HorarioPageModule', name: 'HorarioPage', segment: 'horario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_qrcode_qrcode_module__["QrcodePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre_module__["SobrePageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_alerta_alerta_module__["AlertaPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_horario_horario_module__["HorarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_horario_horario_detalhes_horario_detalhes_module__["HorarioDetalhesPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_itinerario_itinerario_module__["ItinerarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_itinerario_itinerario_detalhes_itinerario_detalhes_module__["ItinerarioDetalhesPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_ponto_ponto_module__["PontoPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_pesquisa_coordenadas_modal_module__["PesquisaCoordenadasModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__components_home_view_viagem_home_view_viagem_reportar_home_view_viagem_reportar_module__["HomeViewViagemReportarPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__components_home_view_viagem_home_view_viagem_selecionar_rota_home_view_viagem_selecionar_rota_module__["HomeViewViagemSelecionarRotaPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_favoritos_favoritos_module__["FavoritosPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__components_pesquisa_coordenadas_pesquisa_coordenadas_modal_com_mapa_pesquisa_coordenadas_modal_com_mapa_module__["PesquisaCoordenadasModalComMapaPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_horario_horario__["a" /* HorarioProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_itinerario_itinerario__["a" /* ItinerarioProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_pontos_proximos_pontos_proximos__["a" /* PontosProximosProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_rota_rota__["a" /* RotaProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_busca_simples_busca_simples__["a" /* BuscaSimplesProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_pontos_pontos__["a" /* PontosProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_caminho_caminho__["a" /* CaminhoProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_crowdsourcing_crowdsourcing__["a" /* CrowdsourcingProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_favoritos_favoritos__["a" /* FavoritosProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertaPage = /** @class */ (function () {
    function AlertaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlertaPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AlertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerta',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\alerta\alerta.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="voltar()">\n\n          <ion-icon name="arrow-round-back"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title text-center><ion-icon name="alert"></ion-icon></ion-title>\n\n      <ion-title text-center>Alertas de Tráfego</ion-title>\n\n     </ion-navbar>  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\alerta\alerta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AlertaPage);
    return AlertaPage;
}());

//# sourceMappingURL=alerta.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 196,
	"./ar-dz": 197,
	"./ar-dz.js": 197,
	"./ar-kw": 198,
	"./ar-kw.js": 198,
	"./ar-ly": 199,
	"./ar-ly.js": 199,
	"./ar-ma": 200,
	"./ar-ma.js": 200,
	"./ar-sa": 201,
	"./ar-sa.js": 201,
	"./ar-tn": 202,
	"./ar-tn.js": 202,
	"./ar.js": 196,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bm": 206,
	"./bm.js": 206,
	"./bn": 207,
	"./bn.js": 207,
	"./bo": 208,
	"./bo.js": 208,
	"./br": 209,
	"./br.js": 209,
	"./bs": 210,
	"./bs.js": 210,
	"./ca": 211,
	"./ca.js": 211,
	"./cs": 212,
	"./cs.js": 212,
	"./cv": 213,
	"./cv.js": 213,
	"./cy": 214,
	"./cy.js": 214,
	"./da": 215,
	"./da.js": 215,
	"./de": 216,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 218,
	"./de-ch.js": 218,
	"./de.js": 216,
	"./dv": 219,
	"./dv.js": 219,
	"./el": 220,
	"./el.js": 220,
	"./en-au": 221,
	"./en-au.js": 221,
	"./en-ca": 222,
	"./en-ca.js": 222,
	"./en-gb": 223,
	"./en-gb.js": 223,
	"./en-ie": 224,
	"./en-ie.js": 224,
	"./en-il": 225,
	"./en-il.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./eo": 227,
	"./eo.js": 227,
	"./es": 228,
	"./es-do": 229,
	"./es-do.js": 229,
	"./es-us": 230,
	"./es-us.js": 230,
	"./es.js": 228,
	"./et": 231,
	"./et.js": 231,
	"./eu": 232,
	"./eu.js": 232,
	"./fa": 233,
	"./fa.js": 233,
	"./fi": 234,
	"./fi.js": 234,
	"./fo": 235,
	"./fo.js": 235,
	"./fr": 236,
	"./fr-ca": 237,
	"./fr-ca.js": 237,
	"./fr-ch": 238,
	"./fr-ch.js": 238,
	"./fr.js": 236,
	"./fy": 239,
	"./fy.js": 239,
	"./gd": 240,
	"./gd.js": 240,
	"./gl": 241,
	"./gl.js": 241,
	"./gom-latn": 242,
	"./gom-latn.js": 242,
	"./gu": 243,
	"./gu.js": 243,
	"./he": 244,
	"./he.js": 244,
	"./hi": 245,
	"./hi.js": 245,
	"./hr": 246,
	"./hr.js": 246,
	"./hu": 247,
	"./hu.js": 247,
	"./hy-am": 248,
	"./hy-am.js": 248,
	"./id": 249,
	"./id.js": 249,
	"./is": 250,
	"./is.js": 250,
	"./it": 251,
	"./it.js": 251,
	"./ja": 252,
	"./ja.js": 252,
	"./jv": 253,
	"./jv.js": 253,
	"./ka": 254,
	"./ka.js": 254,
	"./kk": 255,
	"./kk.js": 255,
	"./km": 256,
	"./km.js": 256,
	"./kn": 257,
	"./kn.js": 257,
	"./ko": 258,
	"./ko.js": 258,
	"./ky": 259,
	"./ky.js": 259,
	"./lb": 260,
	"./lb.js": 260,
	"./lo": 261,
	"./lo.js": 261,
	"./lt": 262,
	"./lt.js": 262,
	"./lv": 263,
	"./lv.js": 263,
	"./me": 264,
	"./me.js": 264,
	"./mi": 265,
	"./mi.js": 265,
	"./mk": 266,
	"./mk.js": 266,
	"./ml": 267,
	"./ml.js": 267,
	"./mn": 268,
	"./mn.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 270,
	"./ms-my": 271,
	"./ms-my.js": 271,
	"./ms.js": 270,
	"./mt": 272,
	"./mt.js": 272,
	"./my": 273,
	"./my.js": 273,
	"./nb": 274,
	"./nb.js": 274,
	"./ne": 275,
	"./ne.js": 275,
	"./nl": 276,
	"./nl-be": 277,
	"./nl-be.js": 277,
	"./nl.js": 276,
	"./nn": 278,
	"./nn.js": 278,
	"./pa-in": 279,
	"./pa-in.js": 279,
	"./pl": 280,
	"./pl.js": 280,
	"./pt": 281,
	"./pt-br": 282,
	"./pt-br.js": 282,
	"./pt.js": 281,
	"./ro": 283,
	"./ro.js": 283,
	"./ru": 284,
	"./ru.js": 284,
	"./sd": 285,
	"./sd.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 291,
	"./sr-cyrl": 292,
	"./sr-cyrl.js": 292,
	"./sr.js": 291,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./tg": 299,
	"./tg.js": 299,
	"./th": 300,
	"./th.js": 300,
	"./tl-ph": 301,
	"./tl-ph.js": 301,
	"./tlh": 302,
	"./tlh.js": 302,
	"./tr": 303,
	"./tr.js": 303,
	"./tzl": 304,
	"./tzl.js": 304,
	"./tzm": 305,
	"./tzm-latn": 306,
	"./tzm-latn.js": 306,
	"./tzm.js": 305,
	"./ug-cn": 307,
	"./ug-cn.js": 307,
	"./uk": 308,
	"./uk.js": 308,
	"./ur": 309,
	"./ur.js": 309,
	"./uz": 310,
	"./uz-latn": 311,
	"./uz-latn.js": 311,
	"./uz.js": 310,
	"./vi": 312,
	"./vi.js": 312,
	"./x-pseudo": 313,
	"./x-pseudo.js": 313,
	"./yo": 314,
	"./yo.js": 314,
	"./zh-cn": 315,
	"./zh-cn.js": 315,
	"./zh-hk": 316,
	"./zh-hk.js": 316,
	"./zh-tw": 317,
	"./zh-tw.js": 317
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 458;

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parada; });
/**
 * Representa um conjunto de horários para um determinado ponto de parada.
 */
var Parada = /** @class */ (function () {
    function Parada(tupla) {
        this.diasUteis = [];
        this.sabado = [];
        this.domingo = [];
        this.numero = tupla.numero_ponto;
        this.nome = tupla.ponto;
        this.adicionarHorario(tupla);
    }
    Parada.prototype.adicionarHorario = function (tupla) {
        var thisAdaptado = false;
        if (tupla.adaptado != "")
            thisAdaptado = true;
        if (tupla.tipo_dia == "1") {
            this.diasUteis.push({ horario: tupla.horario_saida.substring(0, 5), adaptado: thisAdaptado });
        }
        else if (tupla.tipo_dia == "2") {
            this.sabado.push({ horario: tupla.horario_saida.substring(0, 5), adaptado: thisAdaptado });
        }
        else if (tupla.tipo_dia == "3") {
            this.domingo.push({ horario: tupla.horario_saida.substring(0, 5), adaptado: thisAdaptado });
        }
    };
    return Parada;
}());

//# sourceMappingURL=parada.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinhaFeature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linha__ = __webpack_require__(55);

var LinhaFeature = /** @class */ (function () {
    function LinhaFeature(tupla) {
        this.type = "Feature";
        if (tupla.categoria == "EXPRESSO LIGEIRÃO")
            tupla.categoria = "LIGEIRÃO";
        this.properties = new __WEBPACK_IMPORTED_MODULE_0__linha__["a" /* Linha */](tupla);
        this.geometry = (JSON.parse(tupla.geojson));
    }
    return LinhaFeature;
}());

//# sourceMappingURL=linhaFeature.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinhasCategoriasPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the LinhasCategoriasPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var LinhasCategoriasPipe = /** @class */ (function () {
    function LinhasCategoriasPipe() {
    }
    LinhasCategoriasPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            if (it.properties)
                return it.properties.categoria.toLowerCase().includes(terms);
            else if (it.categoria)
                return it.categoria.toLowerCase().includes(terms);
        });
    };
    LinhasCategoriasPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'linhasCategorias',
        })
    ], LinhasCategoriasPipe);
    return LinhasCategoriasPipe;
}());

//# sourceMappingURL=linhas-categorias.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rota; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponto__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linha__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pontoFeature__ = __webpack_require__(38);



/**
 * Representa uma rota entre dois pontos de ônibus.
 */
var Rota = /** @class */ (function () {
    function Rota(tRota) {
        var _this = this;
        this.info_rota = { type: "FeatureCollection", features: [] };
        this.codigo_linha = +tRota.codigo_linha;
        tRota.info_rota.forEach(function (ponto) {
            _this.info_rota.features.push(new __WEBPACK_IMPORTED_MODULE_2__pontoFeature__["a" /* PontoFeature */](ponto));
        });
        var pontoInicial = this.info_rota.features[0].geometry;
        this.coords_ponto_inicial = [pontoInicial.coordinates[1], pontoInicial.coordinates[0]];
        var pontoFinal = this.info_rota.features[this.info_rota.features.length - 1].geometry;
        this.coords_ponto_final = [pontoFinal.coordinates[1], pontoFinal.coordinates[0]];
        this.dados_ponto_origem = new __WEBPACK_IMPORTED_MODULE_0__ponto__["a" /* Ponto */](tRota.dados_ponto_origem);
        this.dados_ponto_destino = new __WEBPACK_IMPORTED_MODULE_0__ponto__["a" /* Ponto */](tRota.dados_ponto_destino);
        this.direcao = tRota.direcao;
        this.linha = new __WEBPACK_IMPORTED_MODULE_1__linha__["a" /* Linha */](tRota.dados_linha);
    }
    return Rota;
}());

//# sourceMappingURL=rota.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_view_padrao_home_view_padrao__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_view_viagem_home_view_viagem__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_view_perto_de_mim_home_view_perto_de_mim__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_view_selecionar_coordenadas_home_view_selecionar_coordenadas__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_view_padrao_home_view_padrao__["a" /* HomeViewPadraoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_view_viagem_home_view_viagem__["a" /* HomeViewViagemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_view_perto_de_mim_home_view_perto_de_mim__["a" /* HomeViewPertoDeMimComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__["a" /* PesquisaCoordenadasComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_view_selecionar_coordenadas_home_view_selecionar_coordenadas__["a" /* HomeViewSelecionarCoordenadasComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__home_view_padrao_home_view_padrao__["a" /* HomeViewPadraoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_view_viagem_home_view_viagem__["a" /* HomeViewViagemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_view_perto_de_mim_home_view_perto_de_mim__["a" /* HomeViewPertoDeMimComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pesquisa_coordenadas_pesquisa_coordenadas__["a" /* PesquisaCoordenadasComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_view_selecionar_coordenadas_home_view_selecionar_coordenadas__["a" /* HomeViewSelecionarCoordenadasComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeViewSelecionarCoordenadasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeViewSelecionarCoordenadasComponent = /** @class */ (function () {
    function HomeViewSelecionarCoordenadasComponent() {
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.confirmarChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    HomeViewSelecionarCoordenadasComponent.prototype.viewEstado = function (estado) {
        this.view = estado;
        this.viewChange.emit(this.view);
    };
    HomeViewSelecionarCoordenadasComponent.prototype.Voltar = function () {
        this.selecaoCoords.coords = null;
        this.confirmarChange.emit(null);
        if (this.selecaoCoords.tipo == "PertoDeMim")
            this.viewEstado("PertoDeMim");
        else
            this.viewEstado("Padrao");
    };
    HomeViewSelecionarCoordenadasComponent.prototype.Confirmar = function () {
        if (this.selecaoCoords.coords == null) {
        }
        else {
            this.confirmarChange.emit(this.selecaoCoords);
            if (this.selecaoCoords.tipo == "PertoDeMim")
                this.viewEstado("PertoDeMim");
            else
                this.viewEstado("Padrao");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeViewSelecionarCoordenadasComponent.prototype, "selecaoCoords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HomeViewSelecionarCoordenadasComponent.prototype, "view", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeViewSelecionarCoordenadasComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])("confirmar"),
        __metadata("design:type", Object)
    ], HomeViewSelecionarCoordenadasComponent.prototype, "confirmarChange", void 0);
    HomeViewSelecionarCoordenadasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-view-selecionar-coordenadas',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\home-view-selecionar-coordenadas\home-view-selecionar-coordenadas.html"*/'<div [hidden]="view!==\'SelecionarCoordenadas\'">\n\n\n\n    <div id="button-confirmar" class="leaflet-control">\n\n        <button ion-button (click)="Confirmar()">Confirmar</button>\n\n    </div>\n\n\n\n    <div id="button-voltar" class="leaflet-control">\n\n        <button ion-button (click)="Voltar()">Voltar</button>\n\n    </div>\n\n</div>\n\n'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\home-view-selecionar-coordenadas\home-view-selecionar-coordenadas.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomeViewSelecionarCoordenadasComponent);
    return HomeViewSelecionarCoordenadasComponent;
}());

//# sourceMappingURL=home-view-selecionar-coordenadas.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_qrcode_qrcode__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_horario_horario__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_itinerario_itinerario__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ponto_ponto__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favoritos_favoritos__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_favoritos_favoritos__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_horario_horario_detalhes_horario_detalhes__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { AlertaPage } from '../pages/alerta/alerta';






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, FavoritosProvider, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.FavoritosProvider = FavoritosProvider;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.menuPages = [
            { titulo: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icone: "home" },
            { titulo: 'Itinerário', component: __WEBPACK_IMPORTED_MODULE_8__pages_itinerario_itinerario__["a" /* ItinerarioPage */], icone: "bus" },
            { titulo: 'Horários', component: __WEBPACK_IMPORTED_MODULE_7__pages_horario_horario__["a" /* HorarioPage */], icone: "clock" },
            { titulo: 'Pontos', component: __WEBPACK_IMPORTED_MODULE_9__pages_ponto_ponto__["a" /* PontoPage */], icone: "pin" },
            { titulo: 'Gerenciar Favoritos', component: __WEBPACK_IMPORTED_MODULE_10__pages_favoritos_favoritos__["a" /* FavoritosPage */], icone: "heart" },
            //{ titulo: 'Alertas', component: AlertaPage, icone: "alert" },
            { titulo: 'Código QR', component: __WEBPACK_IMPORTED_MODULE_5__pages_qrcode_qrcode__["a" /* QrcodePage */], icone: "qr-scanner" },
            { titulo: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__["a" /* SobrePage */], icone: "information-circle" }
        ];
        this.obterFavoritos();
    }
    MyApp.prototype.abrirHorario = function (linha) {
        linha.modalIndicador = true;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_horario_horario_detalhes_horario_detalhes__["a" /* HorarioDetalhesPage */], linha);
        modal.present();
    };
    MyApp.prototype.obterFavoritos = function () {
        var _this = this;
        this.favoritosMeusHorarios = [];
        this.FavoritosProvider.baseHorarios().then(function (b) {
            for (var key in b) {
                if (b.hasOwnProperty(key) && b[key]) {
                    _this.favoritosMeusHorarios.push(b[key]); //push linha
                }
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\app\app.html"*/'<ion-menu [content]="content" id="menu">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title text-center>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose="menu" ion-item *ngFor="let p of menuPages" (click)="openPage(p)">\n\n        <ion-icon [name]="p.icone" item-start></ion-icon>\n\n        {{p.titulo}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-menu [content]="content" side="right" id="favoritos" (ionOpen)="obterFavoritos()">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title text-center>Favoritos</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n        <ion-item-divider color="primary" text-center>Meus Horários</ion-item-divider>\n\n        <ion-grid *ngFor="let p of favoritosMeusHorarios" >\n\n          <ion-row >\n\n            <ion-col text-center>\n\n              <ion-icon  [color]="p.cor" [name]="bus" item-start>\n\n                {{p.codigo}}\n\n              </ion-icon>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <button menuClose="favoritos" ion-item (click)="abrirHorario(p)">\n\n                <ion-label>{{p.nome}}</ion-label>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_favoritos_favoritos__["a" /* FavoritosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Linha; });
var Linha = /** @class */ (function () {
    function Linha(tupla) {
        this.codigo = tupla.codigo_linha;
        this.nome = tupla.nome_linha;
        this.cor = tupla.cor.toLowerCase();
        this.apenas_cartao = tupla.apenas_cartao == 'S' ? true : false;
        this.categoria = tupla.categoria;
        if (tupla.ocorrencias)
            this.ocorrencias = tupla.ocorrencias;
    }
    return Linha;
}());

//# sourceMappingURL=linha.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotaComposta; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rota__ = __webpack_require__(47);

var RotaComposta = /** @class */ (function () {
    function RotaComposta(tupla) {
        var _this = this;
        this.origem_terminal = [];
        this.terminal_destino = [];
        tupla.origem_terminal.forEach(function (r) {
            var tR = {
                codigo_linha: r.codigo_linha, dados_ponto_origem: r.dados_ponto_origem,
                dados_ponto_destino: r.dados_ponto_desembarque, direcao: r.direcao,
                info_rota: r.info_rota_primeira, dados_linha: r.dados_primeira_linha
            };
            _this.origem_terminal.push(new __WEBPACK_IMPORTED_MODULE_0__rota__["a" /* Rota */](tR));
        });
        tupla.terminal_destino.forEach(function (r) {
            var tR = {
                codigo_linha: r.codigo_linha, dados_ponto_origem: r.dados_ponto_embarque,
                dados_ponto_destino: r.dados_ponto_destino, direcao: r.direcao,
                info_rota: r.info_rota_segunda, dados_linha: r.dados_segunda_linha
            };
            _this.terminal_destino.push(new __WEBPACK_IMPORTED_MODULE_0__rota__["a" /* Rota */](tR));
        });
    }
    return RotaComposta;
}());

//# sourceMappingURL=rotaComposta.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaminhoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caminhoFeature__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaminhoProvider = /** @class */ (function () {
    function CaminhoProvider(http) {
        this.http = http;
        this.API = 'http://200.134.10.21:8080/route/shortest-path?';
        this.API_TESTE = 'assets/data/caminhoTesteCabralUTF.json';
        this.API_TESTE_TRECHOS = 'assets/data/buscaTesteCabralUTFTrechos.json';
    }
    CaminhoProvider.prototype.get = function (origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API + ("sY=" + origem[0] + "&sX=" + origem[1] + "&eY=" + destino[0] + "&eX=" + destino[1]))
                .subscribe(function (data) {
                if (data && data.length > 0)
                    resolve(new __WEBPACK_IMPORTED_MODULE_2__caminhoFeature__["a" /* CaminhoFeature */](data));
                else
                    resolve(null);
            }, function (err) { return reject(err); });
        });
    };
    CaminhoProvider.prototype.getTeste = function (origem, destino, debug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_TESTE)
                .subscribe(function (data) {
                if (data && data.length > 0)
                    resolve(new __WEBPACK_IMPORTED_MODULE_2__caminhoFeature__["a" /* CaminhoFeature */](data));
                else
                    resolve(null);
            }, function (err) { return reject(err); });
        });
    };
    CaminhoProvider.prototype.getTrechosTeste = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_TESTE_TRECHOS)
                .subscribe(function (data) {
                var trechos = [];
                data.forEach(function (d) {
                    trechos.push(new __WEBPACK_IMPORTED_MODULE_2__caminhoFeature__["a" /* CaminhoFeature */](d));
                });
                resolve(trechos);
            }, function (err) { return reject(err); });
        });
    };
    CaminhoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CaminhoProvider);
    return CaminhoProvider;
}());

//# sourceMappingURL=caminho.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pontoFeature__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PontosProvider = /** @class */ (function () {
    function PontosProvider(http) {
        this.http = http;
        this.API_LOCAL = 'assets/data/pontos.json';
        //private readonly API =  API_URL + '/restfulapi/pontos/pontos';
        this.baseLocalPontos = {}; //PontoFeature indexados
        this.baseLocalPronto = false;
    }
    /**
     * Retorna um vetor com as Paradas (conjunto de pontos e horários que a linha passa por eles).
     * @param codigo - codigo da linha de ônibus.
     */
    PontosProvider.prototype.getLocal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.baseLocalPronto)
                resolve(_this.baseLocalPontos);
            else {
                _this.http.get(_this.API_LOCAL)
                    .subscribe(function (data) {
                    _this.baseLocalPontos = {};
                    data.forEach(function (tupla) {
                        if (_this.baseLocalPontos[tupla.numero_ponto])
                            _this.baseLocalPontos[tupla.numero_ponto].properties.adicionarLinha(tupla);
                        else
                            _this.baseLocalPontos[tupla.numero_ponto] = new __WEBPACK_IMPORTED_MODULE_2__pontoFeature__["a" /* PontoFeature */](tupla);
                    });
                    _this.baseLocalPronto = true;
                    resolve(_this.baseLocalPontos);
                }, function (err) { return reject(err); });
            }
        });
    };
    PontosProvider.prototype.getArray = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var array = [];
            if (_this.baseLocalPronto) {
                for (var p in _this.baseLocalPontos) {
                    array.push(_this.baseLocalPontos[p]);
                }
                resolve(array);
            }
            else {
                _this.getLocal().
                    then(function (data) {
                    for (var p in _this.baseLocalPontos) {
                        array.push(_this.baseLocalPontos[p]);
                    }
                    resolve(array);
                }, function (err) { reject(err); });
            }
        });
    };
    PontosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PontosProvider);
    return PontosProvider;
}());

//# sourceMappingURL=pontos.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PontosProximosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pontoFeature__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PontosProximosProvider = /** @class */ (function () {
    function PontosProximosProvider(http) {
        this.http = http;
        this.API = __WEBPACK_IMPORTED_MODULE_3__types__["a" /* API_URL */] + '/restfulapi/pontos/pontos_proximos?';
        this.APISimples = __WEBPACK_IMPORTED_MODULE_3__types__["a" /* API_URL */] + '/restfulapi/pontos/pontos_proximos_simplificado?';
        this.APITeste = 'assets/data/pertoDeMimTesteUTF.json';
    }
    PontosProximosProvider.prototype.get = function (lat, long) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API + ("longitude=" + long + "&latitude=" + lat))
                .subscribe(function (data) {
                _this.extrair(data, resolve);
            }, function (err) { return reject(err); });
        });
    };
    PontosProximosProvider.prototype.getTeste = function (lat, long) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.APITeste)
                .subscribe(function (data) {
                _this.extrair(data, resolve);
            }, function (err) { return reject(err); });
        });
    };
    PontosProximosProvider.prototype.extrair = function (data, resolve) {
        var pontosParsing = { type: "FeatureCollection", features: [] };
        data.forEach(function (ponto) {
            var achou = false;
            for (var _i = 0, _a = pontosParsing.features; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.properties.numero_ponto == ponto.numero_ponto) {
                    achou = true;
                    p.properties.adicionarLinha(ponto);
                    break;
                }
            }
            if (achou == false)
                pontosParsing.features.push(new __WEBPACK_IMPORTED_MODULE_2__pontoFeature__["a" /* PontoFeature */](ponto));
        });
        resolve(pontosParsing);
    };
    PontosProximosProvider.prototype.getSimples = function (lat, long) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.APISimples + ("longitude=" + long + "&latitude=" + lat))
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    PontosProximosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PontosProximosProvider);
    return PontosProximosProvider;
}());

//# sourceMappingURL=pontos-proximos.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
var API_URL = "https://myurb-myurb.a3c1.starter-us-west-1.openshiftapps.com";
//export const API_URL = "http://myurb-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com"; 
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaCoordenadasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal_pesquisa_coordenadas_modal__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesquisaCoordenadasComponent = /** @class */ (function () {
    function PesquisaCoordenadasComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.coordsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selecionarCoords = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PesquisaCoordenadasComponent.prototype.coordsEstado = function (estado) {
        this.coords = estado;
        this.coordsChange.emit(this.coords);
    };
    PesquisaCoordenadasComponent.prototype.Pesquisar = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pesquisa_coordenadas_modal_pesquisa_coordenadas_modal__["a" /* PesquisaCoordenadasModalPage */], { placeholder: this.placeholder, model: this.model });
        modal.onDidDismiss(function (data) {
            if (data) {
                if (data.SelecionarCoordenadas === true) {
                    _this.selecionarCoords.emit();
                }
                else {
                    _this.model = data.model;
                    _this.coordsEstado(data.coords);
                }
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PesquisaCoordenadasComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PesquisaCoordenadasComponent.prototype, "coords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PesquisaCoordenadasComponent.prototype, "coordsChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PesquisaCoordenadasComponent.prototype, "selecionarCoords", void 0);
    PesquisaCoordenadasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pesquisa-coordenadas',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\components\pesquisa-coordenadas\pesquisa-coordenadas.html"*/'<!-- Generated template for the PesquisaCoordenadasComponent component -->\n\n<div id="bar-pesquisa" class="leaflet-control">\n\n    <ion-searchbar placeholder="{{placeholder}}" readonly="true" (click)="Pesquisar()" [(ngModel)]="model"></ion-searchbar>\n\n</div>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\components\pesquisa-coordenadas\pesquisa-coordenadas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], PesquisaCoordenadasComponent);
    return PesquisaCoordenadasComponent;
}());

//# sourceMappingURL=pesquisa-coordenadas.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_horario_horario__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favoritos_favoritos__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorarioDetalhesPage = /** @class */ (function () {
    function HorarioDetalhesPage(navCtrl, navParams, HorarioProvider, FavoritosProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HorarioProvider = HorarioProvider;
        this.FavoritosProvider = FavoritosProvider;
        this.viewCtrl = viewCtrl;
        this.paradas = [];
        this.diaSelecionado = "diasUteis";
        this.modalIndicador = false;
        this.linha = navParams.data;
        if (navParams.data.modalIndicador)
            this.modalIndicador = true;
        this.carregou = false;
    }
    HorarioDetalhesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.HorarioProvider.get(this.linha.codigo)
            .then(function (data) {
            _this.paradas = data;
            _this.carregou = true;
        }, function (error) { return console.error(error); });
        this.FavoritosProvider.baseHorarios().then(function (b) {
            if (b && b[_this.linha.codigo])
                _this.favoritado = true;
            else
                _this.favoritado = false;
        });
    };
    HorarioDetalhesPage.prototype.favoritar = function () {
        var _this = this;
        this.FavoritosProvider.favoritarHorario(this.linha).then(function (r) {
            _this.favoritado = !_this.favoritado;
            /* this.FavoritosProvider.baseHorarios().then((b)=>{
              console.log(b);
            }); */
        });
    };
    HorarioDetalhesPage.prototype.Fechar = function () {
        this.viewCtrl.dismiss();
    };
    HorarioDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horario-detalhes',template:/*ion-inline-start:"D:\Arquivos\Projetos\myurb\src\pages\horario\horario-detalhes\horario-detalhes.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left *ngIf="modalIndicador">\n\n        <button ion-button (click)="Fechar()">\n\n          <ion-icon class="voltar-arrow" name="md-arrow-back" color="primary"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-title text-center>{{linha.nome}}</ion-title>\n\n    <button end ion-button id="addFavorito" (click)="favoritar()">\n\n        <ion-icon *ngIf="!favoritado" name="ios-heart-outline" ></ion-icon>\n\n        <ion-icon *ngIf="favoritado" name="ios-heart" color="danger"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="!carregou" class="spinner-container">\n\n    <ion-spinner></ion-spinner>\n\n  </div>\n\n  <div *ngIf="carregou">\n\n\n\n    <ion-card>\n\n      <ion-card-header text-center>\n\n        <b>{{linha.nome}}</b>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <ion-icon id="cardIcon" [color]="linha.cor" name="bus"></ion-icon>\n\n            </ion-thumbnail>\n\n            <h2>\n\n              <b>Código da Linha:</b> {{linha.codigo}}</h2>\n\n            <h2 *ngIf="!linha.apenas_cartao">\n\n              <b>Pagamento:</b>\n\n              <br/> Dinheiro ou Cartão\n\n            </h2>\n\n            <h2 *ngIf="linha.apenas_cartao">\n\n              <b>Pagamento:</b>\n\n              <br/> Somente cartão\n\n            </h2>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div>\n\n      <ion-segment [(ngModel)]="diaSelecionado">\n\n        <ion-segment-button value="diasUteis">\n\n          Dias Úteis\n\n        </ion-segment-button>\n\n        <ion-segment-button value="sabado">\n\n          Sábados\n\n        </ion-segment-button>\n\n        <ion-segment-button value="domingo">\n\n          Domingos e Feriados\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n    <ion-list>\n\n      <div *ngFor="let p of paradas">\n\n        <ion-item-divider [color]="cor" text-center>{{p.nome}}</ion-item-divider>\n\n        <div [ngSwitch]="diaSelecionado">\n\n          <div *ngSwitchCase="\'domingo\'">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3 *ngFor="let h of p.domingo">\n\n                  {{h.horario}}\n\n                  <ion-icon name="ai-wheelchair" *ngIf="h.adaptado"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n          <div *ngSwitchCase="\'sabado\'">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3 *ngFor="let h of p.sabado">\n\n                  {{h.horario}}\n\n                  <ion-icon name="ai-wheelchair" *ngIf="h.adaptado"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n          <div *ngSwitchCase="\'diasUteis\'">\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3 *ngFor="let h of p.diasUteis">\n\n                  {{h.horario}}\n\n                  <ion-icon name="ai-wheelchair" *ngIf="h.adaptado"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n  <!--end loaded-->\n\n</ion-content>'/*ion-inline-end:"D:\Arquivos\Projetos\myurb\src\pages\horario\horario-detalhes\horario-detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_horario_horario__["a" /* HorarioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_favoritos_favoritos__["a" /* FavoritosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], HorarioDetalhesPage);
    return HorarioDetalhesPage;
}());

//# sourceMappingURL=horario-detalhes.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linha__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parada__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HorarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HorarioProvider = /** @class */ (function () {
    /*private readonly API = {linhas: 'http://myurb-tcc2-tcc2.a3c1.starter-us-west-1.openshiftapps.com/restfulapi/pontos/linhas',
                              horarios: 'http://myurb-tcc2-tcc2.a3c1.starter-us-west-1.openshiftapps.com/restfulapi/pontos/horarios'};*/
    function HorarioProvider(http) {
        this.http = http;
        this.APICSV = { linhas: 'assets/data/linhas.csv', horarios: 'assets/data/horarios.csv' };
    }
    /**
     * Retorna um vetor com as Paradas (conjunto de pontos e horários que a linha passa por eles).
     * @param codigo - codigo da linha de ônibus.
     */
    HorarioProvider.prototype.get = function (codigo) {
        var vm = this;
        return new Promise(function (resolve, reject) {
            vm.http.get(vm.APICSV.horarios, { responseType: 'text' })
                .subscribe(function (data) { return vm.extractCSV(data, codigo, resolve); }, function (err) { return reject(err); });
        });
    };
    HorarioProvider.prototype.extractCSV = function (data, codigo, resolve) {
        var retrieved = data || "";
        var parsing = [];
        __WEBPACK_IMPORTED_MODULE_2_papaparse__["parse"](retrieved, {
            header: true,
            step: function (row) {
                var tupla = row.data[0];
                if (tupla.codigo_linha == codigo) {
                    var achouParada = false;
                    for (var _i = 0, parsing_1 = parsing; _i < parsing_1.length; _i++) {
                        var p = parsing_1[_i];
                        if (p.numero == tupla.numero_ponto) {
                            p.adicionarHorario(tupla);
                            achouParada = true;
                        }
                    }
                    if (achouParada == false)
                        parsing.push(new __WEBPACK_IMPORTED_MODULE_4__parada__["a" /* Parada */](tupla));
                }
            }
        });
        resolve(parsing);
    };
    HorarioProvider.prototype.getLinhas = function () {
        var vm = this;
        return new Promise(function (resolve, reject) {
            vm.http.get(vm.APICSV.linhas, { responseType: 'text' })
                .subscribe(function (data) { return vm.extractLinhasCSV(data, resolve); }, function (err) { return reject(err); });
        });
    };
    HorarioProvider.prototype.extractLinhasCSV = function (data, resolve) {
        var retrieved = data || "";
        var parsing = { categorias: [], linhas: [] };
        __WEBPACK_IMPORTED_MODULE_2_papaparse__["parse"](retrieved, {
            header: true,
            step: function (row) {
                var tupla = row.data[0];
                if (tupla.codigo_linha != "") {
                    if (parsing.categorias.indexOf(tupla.categoria) < 0)
                        parsing.categorias.push(tupla.categoria);
                    parsing.linhas.push(new __WEBPACK_IMPORTED_MODULE_3__linha__["a" /* Linha */](tupla));
                }
            }
        });
        resolve(parsing);
    };
    HorarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HorarioProvider);
    return HorarioProvider;
}());

//# sourceMappingURL=horario.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map