import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaProductosPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-productos-pedido',
  templateUrl: 'lista-productos-pedido.html',
})
export class ListaProductosPedidoPage {
  lista: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.navParams.get("lista");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProductosPedidoPage');
  }

}
