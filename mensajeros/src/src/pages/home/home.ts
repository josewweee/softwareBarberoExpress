import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { crudDB } from '../../services/crudDB.service';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  query: string;
  productos: any = [];
  pathProductos: string = "/PRODUCTOS/";
  catego: string;
  tipos: any = [];
  constructor(public navCtrl: NavController, public crud: crudDB, public alertCtrl: AlertController) {
    this.crud.getList(this.pathProductos).valueChanges()
          .subscribe((productosDB) => {
            this.productos = productosDB;
    });
    let pathTipos = "/TIPOS/";
    this.crud.getList(pathTipos).valueChanges()
      .subscribe((tiposDB) => {
        this.tipos = tiposDB;
        console.log(this.tipos);
      });
  }

  irAVistaDeDetalleProducto(producto){
    this.navCtrl.push(DetalleProductoPage, {producto: producto})
  }

  crearProducto(){
    let producto = {
      nombre: "",
      marca: "",
      precio: "",
      tipo: "",
      recomendado: "",
      descripcion: "",
      foto: "",
      gif: "",
      id: Date.now(),
      numCompras: ""      
    }
    this.navCtrl.push(DetalleProductoPage, {producto: producto});
  }


  borrar(producto){    
    let alert = this.alertCtrl.create({
      title: 'Confirmar Borrar',
      message: '¿Estás seguro de borrar este producto?',
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
            let path = "PRODUCTOS/" + producto.id;
            this.crud.delete(path);
            console.log('Borrado');
          }
        }
      ]
    });
    alert.present();
  
  
  
}
}
