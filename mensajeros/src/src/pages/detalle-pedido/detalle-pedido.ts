import { ListaProductosPedidoPage } from './../lista-productos-pedido/lista-productos-pedido';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { crudDB } from '../../services/crudDB.service';

/**
 * Generated class for the DetallePedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {
  pedido: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public crud: crudDB, public alertCtrl: AlertController) {
    this.pedido = this.navParams.get("pedido");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePedidoPage');
  }

  entregado(){
    let alert = this.alertCtrl.create({
      title: 'Confirmar Borrar',
      message: 'Estás seguro de borrar este pedido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancelado");
          }
        },
        {
          text: 'Borrar',
          handler: () => {
            let pathCrear = "/RECIBOS/" + this.pedido.id;
            let pathBorrar = "/PEDIDOS/" + this.pedido.id;
            this.crud.create(pathCrear, this.pedido);
            this.crud.delete(pathBorrar);
            console.log('Borrado');
          }
        }
      ]
    });
    alert.present();
        
  }

  borrar(){    
      let alert = this.alertCtrl.create({
        title: 'Confirmar Borrar',
        message: 'Estás seguro de borrar este pedido?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log("Cancelado");
            }
          },
          {
            text: 'Borrar',
            handler: () => {
              let pathBorrar = "/PEDIDOS/" + this.pedido.id;
              this.crud.delete(pathBorrar);
              console.log('Borrado');
            }
          }
        ]
      });
      alert.present();
    
    
    
  }
  
  verLista(){
    this.navCtrl.push(ListaProductosPedidoPage, {lista: this.pedido.productos})
  }
}
