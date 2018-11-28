import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PesquisaCoordenadasModalComMapaPage } from '../../components/pesquisa-coordenadas/pesquisa-coordenadas-modal-com-mapa/pesquisa-coordenadas-modal-com-mapa';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  favoritosView: string;
  baseEnderecos: any[] = [{}, {}];
  baseHorarios: any[] = [];

  @Output() customEvent = new EventEmitter<string>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    private FavoritosProvider:FavoritosProvider, public alertCtrl:AlertController) {
    this.favoritosView = "enderecos";
  }

  ionViewDidLoad() {
    this.FavoritosProvider.baseEnderecos().then(r=>{
      if(r)this.baseEnderecos = r;
    });

    this.FavoritosProvider.baseHorarios().then(r=>{
      for (const key in r) {
        if (r.hasOwnProperty(key) && r[key]) {
          this.baseHorarios.push(r[key]);
        }
      }
      //console.log(this.baseHorarios);
    });
  }

  Voltar() {
    this.navCtrl.setRoot(HomePage);
  }
  
  EnderecosCoords(opt:string, index:number){
    if(opt=='Casa') index = 0;
    else if(opt=='Trabalho') index = 1;
    let modal = this.modalCtrl.create(PesquisaCoordenadasModalComMapaPage, {placeholder:`Favoritos: ${opt}`, model:opt});
    modal.onDidDismiss((data) => {
      if(data){
        this.FavoritosProvider.editarEnderecoCoords(data.coords, index).then((r)=>{
          this.baseEnderecos[index].coords = data.coords;
          if(data.model){
            this.FavoritosProvider.editarEnderecoNome(data.model, index).then((r)=>{
              this.baseEnderecos[index].nome = data.model;
            });
          }
        })
      } 
    });
    modal.present();
    
  }

  EnderecosNome(opt:string, index:number){
    if(opt=='Casa') index = 0;
    else if(opt=='Trabalho') index = 1;

    let alert = this.alertCtrl.create({
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
          handler: data => {
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            this.FavoritosProvider.editarEnderecoNome(data.nome, index).then((r)=>{
              this.baseEnderecos[index].nome = data.nome;
            });
          }
        }
      ]
    });
    alert.present();
  }

  NovoEndereco(){
    let modal = this.modalCtrl.create(PesquisaCoordenadasModalComMapaPage, {placeholder: "Favoritos: Novo Endereço", model:null});
    modal.onDidDismiss((data) => {
      if(data){
        console.log(data);
        this.FavoritosProvider.inserirEndereco(data.coords).then((r)=>{
          if(data.model){
            this.FavoritosProvider.editarEnderecoNome(data.model, this.baseEnderecos.length).then((r)=>{
              this.baseEnderecos.push({nome:data.model, coords:data.coords});
              console.log(this.baseEnderecos)
            });
          }else{ let alert = this.alertCtrl.create({
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
                  handler: inp => {
                    this.FavoritosProvider.editarEnderecoNome(inp.nome, this.baseEnderecos.length).then((r)=>{
                      this.baseEnderecos.push({nome:inp.nome, coords:data.coords});
                    });
                  }
                }
              ]
            });
            alert.present();
          }
        });
      } 
    });
    modal.present();
  }

  RemoverEndereco(index) {
    return this.FavoritosProvider.removerEndereco(index).then(result => {
      this.baseEnderecos.splice(index, 1);
    });
  }

  RemoverFavorito(linha, index){
    return this.FavoritosProvider.favoritarHorario(linha).then(result => {
      this.baseHorarios.splice(index, 1);
    });
  }

}
