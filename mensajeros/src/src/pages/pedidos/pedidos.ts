import { DetallePedidoPage } from './../detalle-pedido/detalle-pedido';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { crudDB } from '../../services/crudDB.service';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  path: string = "/DOMICILIARIOS/USUARIOS/";
  pedidos: any = [];  
  productos: any = [];
  totalDomiciliario: number;
  totalBarbero: number;
  pathDataBarber: string = "/DOMICILIARIOS/USUARIOS/";
  pathDataDomiciliario:string = "/DOMICILIARIOS/USUARIOS/";
  pathProductos:string = "/PRODUCTOS/";
  user: any;
  costo_domicilio:number;

  //variables para contabilidad
  ganancia:number;
  mercancia:number;
  path_ganancia:string;
  path_mercancia:string;
  fecha: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public crud: crudDB, public alertCtrl: AlertController, private callNumber: CallNumber) {
    this.user = navParams.get('usuario');    

    //valores que usaremos para el calculo de la ganancia
    this.fecha = new Date().toDateString().replace(/\s/g,'_');
    this.path_ganancia = "/TOTAL_DIA/" + this.fecha + "/ganancias";
    this.path_mercancia = "/TOTAL_DIA/" + this.fecha + "/mercancia";
    this.crud.get(this.path_ganancia).valueChanges()
          .subscribe((data) => {
            this.ganancia = Number(data);
    });
    this.crud.get(this.path_mercancia).valueChanges()
          .subscribe((data) => {
            this.mercancia = Number(data);
    });

    //Pedidos y costos iniciales
    this.path += this.user.id + "/PEDIDOS/"
    this.crud.getList(this.path).valueChanges()
          .subscribe((pedidosDB) => {
            this.pedidos = pedidosDB;
            console.log(this.pedidos);
    });
    this.pathDataBarber += this.user.id + "/TOTAL_DIA/" + "barbero";
    this.crud.get(this.pathDataBarber).valueChanges()
          .subscribe((data) => {
            this.totalBarbero = Number(data);
    });
    this.pathDataDomiciliario += this.user.id + "/TOTAL_DIA/" + "domiciliario";
    this.crud.get(this.pathDataDomiciliario).valueChanges()
          .subscribe((data) => {
            this.totalDomiciliario = Number(data);
    });

    //TRAEMOS LOS PRODUCTOS
    this.crud.getList(this.pathProductos).valueChanges()
    .subscribe((productos) => {
      this.productos = productos;
    });

    //TRAEMOS EL VALOR DEL COSTO DEL DOMICILIO
    this.crud.get("/DOMICILIARIOS/COSTO_DOMICILIO").valueChanges()
          .subscribe((data) => {
            this.costo_domicilio = Number(data);
    });
  }

    //FUNCION PARA PONER COLORES DEPENDIENDO DEL ESTADO DEL PEDIDO
    getBorder(estado){
      var pos1 = estado[0];
      switch (pos1) {
        case 'G':
          return '15px solid blue';
        default:
          return '15px solid white';
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  irDetallePedido(pedido){
    this.navCtrl.push(DetallePedidoPage, {pedido: pedido});
  }

  llamar(telefono:string){
    let alert = this.alertCtrl.create({
      title: 'Llamar al usuario',
      message: '¿Deseas llamar al usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Llamar',
          handler: () => {
            this.callNumber.callNumber(telefono, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
          }
        }
      ]
    });
    alert.present();
  }

  entregado(pedido){
    let alert = this.alertCtrl.create({
      title: 'Confirmar Entrega del pedido',
      message: '¿Todo fue entregado con normalidad?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si',
          handler: () => {
            //creamos el recibo del pedido
            let pathCrear = "/DOMICILIARIOS/USUARIOS/" + this.user.id +  "/RECIBOS/" + pedido.id;
            this.totalBarbero += (pedido.total - this.costo_domicilio);
            this.totalDomiciliario += this.costo_domicilio;
            this.crud.create(pathCrear, pedido);
            //cambiamos el total que gana barbero y el domiciliario
            let pathDataBarber = "/DOMICILIARIOS/USUARIOS/" + this.user.id + "/TOTAL_DIA/" + "barbero";
            this.crud.create(pathDataBarber, this.totalBarbero);
            let pathDataDomiciliario = "/DOMICILIARIOS/USUARIOS/" + this.user.id + "/TOTAL_DIA/" + "domiciliario";
            this.crud.create(pathDataDomiciliario, this.totalDomiciliario);          
            console.log('Borrado');
            //restamos los productos en bodega y los ponemos de color azul
            this.restar_productos_bodega(pedido);
            this.cambiar_estado_pedido(pedido);
            //cambiamos los valores de las ganancias en bodega
            this.ganancia += Number(this.gananciaPedido(pedido));
            this.mercancia += Number(this.dinero_mercancia(pedido));
            this.guardar_ganancias_base_de_datos();
          }
        }
      ]
    });
    alert.present();
        
  }

  //FUNCION PARA HALLAR LAS GANANCIAS DE UN PEDIDO
  gananciaPedido(pedido){
    var costo_domicilio = this.costo_domicilio;
    var ganancias_producto = 0;
    var pago_domicilio_cliente = Number(4500);
    var posicionProducto = 0;
    var total_ganancia_pedido = 0;
    for(var i = 0; i < pedido.productos.length; i++){
      var idProd = pedido.productos[i].id;
      for(var j = 0; j < this.productos.length; j++){
        var idBodega = this.productos[j].id;
        if(idProd == idBodega){
          posicionProducto = j;
        }
      }
      ganancias_producto = Number(this.productos[posicionProducto].ganancia);
      total_ganancia_pedido += ganancias_producto;
    }
    //this.ganancia += total_ganancia_pedido - (costo_domicilio -pago_domicilio_cliente);
    return(total_ganancia_pedido - (costo_domicilio -pago_domicilio_cliente));
  }

  dinero_mercancia(pedido){
    var costo_mercancia_producto = 0;
    var total_mercancia = 0;
    var posicionProducto = 0;
    for(var i = 0; i < pedido.productos.length; i++){
      var idProd = pedido.productos[i].id;
      for(var j = 0; j < this.productos.length; j++){
        var idBodega = this.productos[j].id;
        if(idProd == idBodega){
          posicionProducto = j;
        }
      }
      costo_mercancia_producto = Number(this.productos[posicionProducto].costo);
      total_mercancia += costo_mercancia_producto;
    }
    return total_mercancia;
  }

  guardar_ganancias_base_de_datos(){
    var pathGanancias = "/TOTAL_DIA/" + this.fecha + "/ganancias";
    var pathMercancia = "/TOTAL_DIA/" + this.fecha + "/mercancia";
    this.crud.create(pathGanancias, this.ganancia);
    this.crud.create(pathMercancia, this.mercancia);
  }


  enviado(pedido){
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
            let pathCrear = "/RECIBOS/" + pedido.id;
            let pathBorrar = "/PEDIDOS/" + pedido.id;            
            this.totalDomiciliario += 4500;
            this.crud.create(pathCrear, pedido);
            this.crud.delete(pathBorrar);              
            let pathDataDomiciliario = "/TOTAL_DIA/" + "totalDomiciliario";
            this.crud.create(pathDataDomiciliario, this.totalDomiciliario);
            console.log('Borrado');
          }
        }
      ]
    });
    alert.present();
  }


  cancelado(pedido){
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
            let pathCrear = "/PEDIDOS/" + pedido.id + "/estado";
            this.crud.create(pathCrear, "No Entregado");            
            console.log('Borrado');
          }
        }
      ]
    });
    alert.present();
  }

  limpiarDia(){
    this.totalBarbero = 0;
    this.totalDomiciliario = 0;
    let pathDataBarber = "/DOMICILIARIOS/USUARIOS/" + this.user.id + "/TOTAL_DIA/" + "barbero";
    this.crud.create(pathDataBarber, this.totalBarbero);
    let pathDataDomiciliario = "/DOMICILIARIOS/USUARIOS/" + this.user.id + "/TOTAL_DIA/" + "domiciliario";
    this.crud.create(pathDataDomiciliario, this.totalDomiciliario);
    let pathBorrar = "/DOMICILIARIOS/USUARIOS/" + this.user.id + "/PEDIDOS/";
    this.crud.delete(pathBorrar);
  }

  borrar(pedido){    
   /*  let alert = this.alertCtrl.create({
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
            let pathBorrar = "/PEDIDOS/" + pedido.id;
            this.crud.delete(pathBorrar);
            console.log('Borrado');
          }
        }
      ]
    });
    alert.present(); */
  }

cambiar_estado_pedido(pedido){
    let path = "/PEDIDOS/" + pedido.id + "/estado";
    let path_app_domiciliario = "/DOMICILIARIOS/USUARIOS/" + this.user.id + "/PEDIDOS/" + pedido.id + "/estado";
    if(pedido.estado.slice(0,3) != 'G -'){
      if(pedido.estado.slice(0,3) != 'F -'){
        if(pedido.estado.slice(0,3) != 'M -'){
          if(pedido.estado.slice(0,3) != 'D -'){
            if(pedido.estado.slice(0,3) != 'W -'){
              this.crud.edit(path, 'G - ' + pedido.estado);
              this.crud.edit(path_app_domiciliario, 'G - ' + pedido.estado);
            }else{
              this.crud.edit(path, 'G - ' + pedido.estado.slice(4));
              this.crud.edit(path_app_domiciliario, 'G - ' + pedido.estado.slice(4));
            }
          }else{
            this.crud.edit(path, 'G - ' + pedido.estado.slice(4));
            this.crud.edit(path_app_domiciliario, 'G - ' + pedido.estado.slice(4));
          }
        }else{
          this.crud.edit(path, 'G - ' + pedido.estado.slice(4));
          this.crud.edit(path_app_domiciliario, 'G - ' + pedido.estado.slice(4));
        }
      }else{
        this.crud.edit(path, 'G - ' + pedido.estado.slice(4));
        this.crud.edit(path_app_domiciliario, 'G - ' + pedido.estado.slice(4));
      }
    }else{
      this.crud.edit(path, 'G - ' + pedido.estado.slice(4));
      this.crud.edit(path_app_domiciliario, 'G - ' + pedido.estado.slice(4));
    }
}

restar_productos_bodega(pedido){
    try {
      //FUNCION PARA RESTAR PRODUCTOS EN VERDE, CON LOS DE LA BASE DE DATOS
      for(var k = 0; k < pedido.productos.length; k++){
        var idProd = pedido.productos[k].id;
        var posicionProducto;
        //BUSCAMOS EL PRODUCTO DEL PEDIDO EN LA BASE DE DATOS
        for(var g = 0; g < this.productos.length; g++){
          if(this.productos[g].id == idProd){
            posicionProducto = g;
          }
        }
        //MIRAMOS SI TENEMOS UN PRODUCTO QUE SEA UNA PROMO
        if(this.productos[posicionProducto].detallesPromo){
          console.log("promo");
          var posPromo = posicionProducto;
          //RESTAMOS LA CANTIDAD DEL PRODUCTO EN LA PROMO
          var idProductoARestar = this.productos[posicionProducto].detallesPromo.id;
          for(g = 0; g < this.productos.length; g++){
            if(this.productos[g].id == idProductoARestar){
              posicionProducto = g;
            }
          }
          var nuevo_valor_producto = Number(this.productos[posicionProducto].disponibles) - Number(this.productos[posPromo].detallesPromo.cantidad) * Number(pedido.productos[k].cantidad);
          var path_a_restar = "/PRODUCTOS/" + idProductoARestar + "/disponibles";
          console.log("path --> " + path_a_restar);
          console.log("viejo valor de " + this.productos[posicionProducto].nombre + " = " + this.productos[posicionProducto].disponibles);
          this.productos[posicionProducto].disponibles = nuevo_valor_producto;
          console.log("nuevo valor de " + this.productos[posicionProducto].nombre + " = " + this.productos[posicionProducto].disponibles);
          console.log("__________________________________________________");
          this.crud.edit(path_a_restar, nuevo_valor_producto);
         //MIRAMOS SI TENEMOS UN PRODUCTO QUE SEA UN COMBO
        }else if(this.productos[posicionProducto].combo){
          console.log("combo");
          //HALLAMOS EL ID DE TODOS LOS PRODUCTOS EN EL COMBO
          var arreglo_id_productos_combo = [];
          var j = 0;
          var idCombo = pedido.productos[k].id;
          for(var g = 0; g < this.productos.length; g++){
            if(this.productos[g].id == idCombo){
              posicionProducto = g;
            }
          }
          for(var p = 0; p < this.productos[posicionProducto].combo.idProductos.length; p++){
            if(this.productos[posicionProducto].combo.idProductos[p] != ','){
              if(arreglo_id_productos_combo[j] && arreglo_id_productos_combo[j].length > 0){
                arreglo_id_productos_combo[j] += this.productos[posicionProducto].combo.idProductos[p];
              }else{
                arreglo_id_productos_combo[j] = this.productos[posicionProducto].combo.idProductos[p];
              }
            }else{
              j++;
            }
          }
          //RESTAMOS TODOS LOS PRODUCTOS DEL COMBO
          for(var w = 0; w < arreglo_id_productos_combo.length; w++){
            var idProductoARestar = arreglo_id_productos_combo[w];
            for(var g = 0; g < this.productos.length; g++){
              if(this.productos[g].id == idProductoARestar){
                posicionProducto = g;
              }
            }
            var nuevo_valor_producto = Number(this.productos[posicionProducto].disponibles) - (1 * Number(pedido.productos[k].cantidad));
            var path_a_restar = "/PRODUCTOS/" + idProductoARestar + "/disponibles";
            console.log("path --> " + path_a_restar);
            console.log("viejo valor de " + this.productos[posicionProducto].nombre + " = " + this.productos[posicionProducto].disponibles);
            this.productos[posicionProducto].disponibles = nuevo_valor_producto;
            console.log("nuevo valor de " + this.productos[posicionProducto].nombre + " = " + this.productos[posicionProducto].disponibles);
            console.log("__________________________________________________");
            this.crud.edit(path_a_restar, nuevo_valor_producto);
          }
        //MIRAMOS SI TENEMOS UN PRODUCTO NORMAL
        }else{
          console.log("normal");
          //RESTAMOS EL PRODUCTO COMPRADO
          var idProductoARestar = pedido.productos[k].id
          var nuevo_valor_producto = Number(this.productos[posicionProducto].disponibles) - Number(pedido.productos[k].cantidad);
          var path_a_restar = "/PRODUCTOS/" + idProductoARestar + "/disponibles";
          console.log("path --> " + path_a_restar);
          console.log("viejo valor de " + this.productos[posicionProducto].nombre + " = " + this.productos[posicionProducto].disponibles);
          this.productos[posicionProducto].disponibles = nuevo_valor_producto;
          console.log("nuevo valor de " + this.productos[posicionProducto].nombre + " = " + this.productos[posicionProducto].disponibles);
          console.log("__________________________________________________");
          this.crud.edit(path_a_restar, nuevo_valor_producto);
        }
      }
     
    } catch (error) {
      console.log(error);
    }
}

}
