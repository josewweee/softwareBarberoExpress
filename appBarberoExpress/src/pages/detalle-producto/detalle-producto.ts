import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { crudDB } from '../../services/crudDB.service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the DetalleProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-producto',
  templateUrl: 'detalle-producto.html',
})
export class DetalleProductoPage {
  producto: any = {};
  user: any;
  path: string;
  userTemp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public crud: crudDB, public toastCtrl: ToastController,public storage: Storage) {
    this.producto = navParams.get('producto') || {};
    this.user = navParams.get('user');
    if(this.user != null){
      console.log("enhora buena");
    }else{
      storage.get('usuario').then((val) => {
        this.userTemp = val;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleProductoPage');
  }

  agregarAlCarrito(productoEntrante) {
    if (productoEntrante.cantidad < 1 || productoEntrante.cantidad == null) {
      alert("Parcero, recuerda escribir la cantidad que quieres del producto, justo al lado del botón AGREGAR AL CARRITO. Gracias y bienvenido!!!");
    }else{
      if(this.user != null){
        this.path = "/USUARIOS/" + this.user.uid + "/CARRITO/" + productoEntrante.id;
        let productoFinal = {
          nombre: productoEntrante.nombre,
          marca: productoEntrante.marca,
          precio: productoEntrante.precio,
          tipo: productoEntrante.tipo,
          foto: productoEntrante.foto,
          id: productoEntrante.id,        
          cantidad: productoEntrante.cantidad,
          subtotal: parseInt(productoEntrante.cantidad) * parseInt(productoEntrante.precio)
        }
        this.crud.create(this.path, productoFinal);
        let toast = this.toastCtrl.create({
          message: `${productoFinal.cantidad} ` + `${productoFinal.nombre} ` + `agregados al carrito correctamente`,
          duration: 3000,
          position: 'top'
        });
        this.navCtrl.pop();
        toast.present();    
      }else{
        this.path = "/INFO/" + "TEMPORALES" + "/USUARIOS/"  + this.userTemp + "/CARRITO/" + productoEntrante.id;
        let productoFinal = {
          nombre: productoEntrante.nombre,
          marca: productoEntrante.marca,
          precio: productoEntrante.precio,
          tipo: productoEntrante.tipo,
          foto: productoEntrante.foto,
          id: productoEntrante.id,        
          cantidad: productoEntrante.cantidad,
          subtotal: parseInt(productoEntrante.cantidad) * parseInt(productoEntrante.precio)
        }
        this.crud.create(this.path, productoFinal);
        let toast = this.toastCtrl.create({
          message: `${productoFinal.cantidad} ` + `${productoFinal.nombre} ` + `agregados al carrito correctamente`,
          duration: 3000,
          position: 'top'
        });
        this.navCtrl.pop();
        toast.present();    
      }      
    }
  }

  restar(producto){
    if (producto.cantidad < 0 || producto.cantidad == null){
      producto.cantidad = 1;
    }else{
      producto.cantidad -= 1;
    }      
  }

  sumar(producto){
    if (producto.cantidad < 0 || producto.cantidad == null){
      producto.cantidad = 1;
    }else{
      producto.cantidad += 1;
    } 
  }  
  
}
