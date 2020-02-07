webpackJsonp([8],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl, navParams, crud) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.usuarios = [];
        this.path = "/USUARIOS/";
        this.crud.getList(this.path).valueChanges()
            .subscribe(function (usuariosDB) {
            _this.usuarios = usuariosDB;
            _this.contadorUsuarios = _this.usuarios.length;
        });
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/users/users.html"*/'<!--\n  Generated template for the UsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>USUARIOS</ion-title>    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n  <ion-item>\n    <h1>{{contadorUsuarios}} USUARIOS REGISTRADOS</h1>\n  </ion-item>\n  <ion-list>\n    <ion-item-sliding *ngFor="let usuario of usuarios">\n      <ion-item >          \n        <ion-avatar item-start>\n          <img style="width: 100px; height: 100px;" src="./../../assets/imgs/userIcon.png"/>              \n        </ion-avatar> \n        <h1 style="text-transform: capitalize;">{{usuario.uid}}</h1>      \n        <h3>Nombre: {{usuario.nombre}}</h3>              \n        <h3>Teléfono: {{usuario.telefono}}</h3>  \n        <h3>Email: {{usuario.email}}</h3>                  \n      </ion-item>              \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/users/users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__["a" /* crudDB */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContabilidadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContabilidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContabilidadPage = /** @class */ (function () {
    function ContabilidadPage(navCtrl, navParams, crud, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.alertCtrl = alertCtrl;
        //VARIABLES GLOBALES
        this.pedidos = [];
        this.productos = [];
        this.ListosParaEnviar = [];
        //PATHS PARA LA BASE DE DATOS
        this.path_pedidos = "/PEDIDOS/";
        this.pathProductos = "/PRODUCTOS/";
        this.pathDataBarber = "/DOMICILIARIOS/USUARIOS/0/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario = "/DOMICILIARIOS/USUARIOS/0/TOTAL_DIA/" + "domiciliario";
        this.pathDataBarber1 = "/DOMICILIARIOS/USUARIOS/1/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario1 = "/DOMICILIARIOS/USUARIOS/1/TOTAL_DIA/" + "domiciliario";
        this.pathDataBarber2 = "/DOMICILIARIOS/USUARIOS/2/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario2 = "/DOMICILIARIOS/USUARIOS/2/TOTAL_DIA/" + "domiciliario";
        this.pathDataBarber3 = "/DOMICILIARIOS/USUARIOS/3/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario3 = "/DOMICILIARIOS/USUARIOS/3/TOTAL_DIA/" + "domiciliario";
        this.PathEmpresa3 = "/DOMICILIARIOS/USUARIOS/3/PEDIDOS/";
        this.PathEmpresa2 = "/DOMICILIARIOS/USUARIOS/2/PEDIDOS/";
        this.PathEmpresa1 = "/DOMICILIARIOS/USUARIOS/1/PEDIDOS/";
        this.PathEmpresa0 = "/DOMICILIARIOS/USUARIOS/0/PEDIDOS/";
        this.pathPediosListos = "/DOMICILIARIOS/PEDIDOS_LISTOS/";
        this.pathDeudas = "/TOTAL_DIA/CONTABILIDAD/total_deuda";
        //VARIABLES GLBALES
        //this.ganancia = 0;
        this.mano_de_obra = 1200000;
        this.costos_adicionales = 0;
        this.costo_domicilio = 7000;
        this.mercancia = 0;
        this.valor_deuda = 0;
        this.fecha = new Date().toDateString().replace(/\s/g, '_');
        //DATOS DE LAS DEUDAS DE LA DB
        this.crud.get("/TOTAL_DIA/" + this.fecha + "/ganancias").valueChanges()
            .subscribe(function (data) {
            _this.ganancia = Number(data);
        });
        this.crud.get("/TOTAL_DIA/" + this.fecha + "/mercancia").valueChanges()
            .subscribe(function (data) {
            _this.mercancia = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/ingresos_netos").valueChanges()
            .subscribe(function (data) {
            _this.ingresos_netos = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/egresos").valueChanges()
            .subscribe(function (data) {
            _this.egresos = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/utilidades").valueChanges()
            .subscribe(function (data) {
            _this.utilidades = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/total_deuda").valueChanges()
            .subscribe(function (data) {
            _this.deuda_total = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_0").valueChanges()
            .subscribe(function (data) {
            _this.deudor1 = Number(data);
            console.log(_this.deudor1);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_1").valueChanges()
            .subscribe(function (data) {
            _this.deudor2 = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_2").valueChanges()
            .subscribe(function (data) {
            _this.deudor3 = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_3").valueChanges()
            .subscribe(function (data) {
            _this.deudor4 = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/ganancia_esperada").valueChanges()
            .subscribe(function (data) {
            _this.ganancia_esperada = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/mercancia_esperada").valueChanges()
            .subscribe(function (data) {
            _this.mercancia_esperada = Number(data);
        });
        // DATOS DE LOS PEDIDOS DE LA DB
        this.crud.getList(this.path_pedidos).valueChanges()
            .subscribe(function (pedidosDB) {
            _this.pedidos = pedidosDB;
        });
        this.crud.getList(this.pathPediosListos).valueChanges()
            .subscribe(function (data) {
            _this.ListosParaEnviar = data;
            _this.cantidadEnviosMensajeros = Number((_this.ListosParaEnviar != null) ? _this.ListosParaEnviar.length : 0);
        });
        //DATOS DE LOS PRODUCTOS DE LA DB
        this.crud.getList(this.pathProductos).valueChanges()
            .subscribe(function (productos) {
            _this.productos = productos;
        });
        //DATOS DOMICILIARIO 0
        this.crud.get(this.pathDataBarber).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario0 = Number(data);
        });
        //DATOS DOMICILIARIO 1
        this.crud.get(this.pathDataBarber1).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero1 = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario1).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario1 = Number(data);
        });
        //DATOS DOMICILIARIO 2
        this.crud.get(this.pathDataBarber2).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero2 = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario2).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario2 = Number(data);
        });
        //DATOS DOMICILIARIO 3
        this.crud.get(this.pathDataBarber3).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero3 = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario3).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario3 = Number(data);
        });
    }
    ContabilidadPage.prototype.sacarGanancias = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ver ganancias del dia',
            message: '¿PREPARADO PAL SALSEO?',
            buttons: [
                {
                    text: 'CANCELAR',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado, que pussy");
                    }
                },
                {
                    text: 'DAMELO TODO',
                    handler: function () {
                        var i = 0;
                        _this.ganancia = 0;
                        _this.ganancia_esperada = 0;
                        var contador_pedidos = 0;
                        while (i < _this.pedidos.length) {
                            if (_this.pedidos[i].estado.slice(0, 3) == "G -") {
                                try {
                                    contador_pedidos++;
                                    /*  this.ganancia += Number(this.gananciaPedido(this.pedidos[i]));
                                     this.mercancia += Number(this.dinero_mercancia(this.pedidos[i])); */
                                    /*  console.log("GANANCIAS ACOMULADAS " + " = " + this.ganancia + " # " + contador_pedidos);
                                     console.log("MERCANCIA ACOMULADA " + " = " + this.mercancia + " # " + contador_pedidos);
                                     console.log("___________________________"); */
                                }
                                catch (error) {
                                    console.log(error);
                                }
                            }
                            if (_this.pedidos[i].estado.slice(0, 3) == "D -" || _this.pedidos[i].estado.slice(0, 3) == "G -") {
                                /*  this.mercancia_esperada += Number(this.dinero_mercancia(this.pedidos[i]));
                                 this.ganancia_esperada += this.gananciaPedido(this.pedidos[i]); */
                            }
                            i++;
                        }
                        /* this.ganancia -= Number(this.mano_de_obra/30);
                        this.ganancia -= Number(this.costos_adicionales);
                        this.ganancia_esperada -= Number(this.mano_de_obra/30);
                        this.ganancia_esperada -= Number(this.costos_adicionales);
                        console.log(this.ganancia);
                        this.guardar_ganancias_base_de_datos(); */
                    }
                }
            ]
        });
        alert.present();
    };
    //FUNCION PARA HALLAR LAS GANANCIAS DE UN PEDIDO
    ContabilidadPage.prototype.gananciaPedido = function (pedido) {
        var costo_domicilio = this.costo_domicilio;
        var ganancias_producto = 0;
        var pago_domicilio_cliente = Number(4500);
        var posicionProducto = 0;
        var total_ganancia_pedido = 0;
        for (var i = 0; i < pedido.productos.length; i++) {
            var idProd = pedido.productos[i].id;
            for (var j = 0; j < this.productos.length; j++) {
                var idBodega = this.productos[j].id;
                if (idProd == idBodega) {
                    posicionProducto = j;
                }
            }
            ganancias_producto = Number(this.productos[posicionProducto].ganancia);
            total_ganancia_pedido += ganancias_producto;
        }
        //this.ganancia += total_ganancia_pedido - (costo_domicilio -pago_domicilio_cliente);
        console.log("Pedido de: " + pedido.usuario.nombre + " Ganancia " + (total_ganancia_pedido - (costo_domicilio - pago_domicilio_cliente)));
        return (total_ganancia_pedido - (costo_domicilio - pago_domicilio_cliente));
    };
    ContabilidadPage.prototype.Dinero_en_bodega = function () {
        this.dinero_bodega = 0;
        for (var i = 0; i < this.productos.length; i++) {
            var producto = this.productos[i];
            if (producto.disponibles > 0) {
                this.dinero_bodega += (Number(producto.costo) * Number(producto.disponibles));
            }
            /* console.log("dinero en " + producto.nombre + " de = " + (Number(producto.costo) * Number(producto.disponibles))); */
        }
        console.log("dinero en bodega" + this.dinero_bodega);
    };
    ContabilidadPage.prototype.guardar_ganancias_base_de_datos = function () {
        var pathGanancias = "/TOTAL_DIA/" + this.fecha + "/ganancias";
        var pathMercancia = "/TOTAL_DIA/" + this.fecha + "/mercancia";
        console.log("path = " + pathGanancias);
        this.crud.create(pathGanancias, this.ganancia);
        this.crud.create(pathMercancia, this.mercancia);
    };
    ContabilidadPage.prototype.dinero_mercancia = function (pedido) {
        var costo_mercancia_producto = 0;
        var total_mercancia = 0;
        var posicionProducto = 0;
        for (var i = 0; i < pedido.productos.length; i++) {
            var idProd = pedido.productos[i].id;
            for (var j = 0; j < this.productos.length; j++) {
                var idBodega = this.productos[j].id;
                if (idProd == idBodega) {
                    posicionProducto = j;
                }
            }
            costo_mercancia_producto = Number(this.productos[posicionProducto].costo);
            total_mercancia += costo_mercancia_producto;
        }
        return total_mercancia;
    };
    ContabilidadPage.prototype.agregar_deudas = function (valor_deuda0, prestamista) {
        var path;
        var pagando_deuda = false;
        var nuevo_valor = 0;
        var valor_deuda = Number(valor_deuda0);
        if (valor_deuda < 0) {
            pagando_deuda = true;
        }
        var abono_deuda = true;
        var movimiento_deudas = false;
        switch (prestamista) {
            case 0:
                path = "/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_0";
                nuevo_valor = this.deudor1 + valor_deuda;
                this.deudor1 += nuevo_valor;
                movimiento_deudas = true;
                break;
            case 1:
                path = "/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_1";
                nuevo_valor = this.deudor2 + valor_deuda;
                this.deudor2 += nuevo_valor;
                movimiento_deudas = true;
                break;
            case 2:
                path = "/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_2";
                nuevo_valor = this.deudor3 + valor_deuda;
                this.deudor3 += nuevo_valor;
                movimiento_deudas = true;
                break;
            case 3:
                path = "/TOTAL_DIA/CONTABILIDAD/DEUDAS/provedor_3";
                nuevo_valor = this.deudor4 + valor_deuda;
                this.deudor4 += nuevo_valor;
                movimiento_deudas = true;
                break;
            case 4:
                abono_deuda = false;
                movimiento_deudas = false;
                break;
            case 5:
                abono_deuda = true;
                movimiento_deudas = false;
                break;
            default:
                break;
        }
        if (abono_deuda && !movimiento_deudas) {
            this.egresos += Math.abs(Number(valor_deuda));
            this.crud.edit("/TOTAL_DIA/CONTABILIDAD/egresos", this.egresos);
        }
        else if (!abono_deuda && !movimiento_deudas) {
            this.ingresos_netos += Math.abs(Number(valor_deuda));
            this.crud.edit("/TOTAL_DIA/CONTABILIDAD/ingresos_netos", this.ingresos_netos);
        }
        if (movimiento_deudas) {
            this.crud.edit(path, nuevo_valor);
            this.deuda_total = Number(this.deudor1 + this.deudor2 + this.deudor3 + this.deudor4);
            this.crud.edit(this.pathDeudas, this.deuda_total);
            if (pagando_deuda) {
                this.egresos += Math.abs(Number(valor_deuda));
                this.crud.edit("/TOTAL_DIA/CONTABILIDAD/egresos", this.egresos);
            }
        }
        this.utilidades = this.ingresos_netos - this.egresos;
        this.crud.edit("/TOTAL_DIA/CONTABILIDAD/utilidades", this.utilidades);
    };
    ContabilidadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contabilidad',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/contabilidad/contabilidad.html"*/'<!--\n  Generated template for the ContabilidadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>contabilidad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n\n        <ion-item>\n            <ion-label floating >Mano de obra, (Valor mensual)</ion-label>\n          <ion-input type="text" placeholder="Mano de obra, (valor mensual)" [(ngModel)]="mano_de_obra" style="text-align: center;" required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating >Valor Domicilio</ion-label>\n        <ion-input type="text" placeholder="Valor domicilio" [(ngModel)]="costo_domicilio" style="text-align: center;" required></ion-input>\n      </ion-item>\n\n        <ion-item>\n            <ion-label floating >Costos adicionales</ion-label>\n          <ion-input type="text" placeholder="Costos adicionales" [(ngModel)]="costos_adicionales" style="text-align: center;" required></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="signup-col">\n      <button ion-button class="submit-btn" (click)="sacarGanancias()" style="display:block; margin:auto;">Ver total dia</button>\n    </ion-col>\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-item>\n      <h1 style="text-align: center">Ganancia / Ganancia esperada</h1>\n      <h1 style="text-align: center">{{ganancia}} / {{ganancia_esperada}}</h1>\n      <h1 style="text-align: center">Merca / Merca esperada</h1>\n      <h1 style="text-align: center">{{mercancia}} / {{mercancia_esperada}}</h1>\n    </ion-item>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="signup-col">\n      <button ion-button class="submit-btn" (click)="Dinero_en_bodega()" style="display:block; margin:auto;">Dinero en bodega</button>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-item>\n      <h1 style="text-align: center">Dinero en bodega: {{dinero_bodega}}</h1>\n    </ion-item>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n        <!-- LISTA DE CONTABILIDAD -->\n      <ion-row>\n        <ion-col>\n          <h3> Deuda total: {{deuda_total}}</h3>\n            <ion-item>\n                <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n              <ion-input type="text" [(ngModel)]="str_valor_deuda" style="text-align: center;" required></ion-input>\n            </ion-item>\n        </ion-col>     \n      </ion-row>\n       \n      <ion-row>\n          <ion-col>\n              <h3> Deuda hermano ramon: {{deudor1}}</h3>\n              <ion-item>\n                  <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                <ion-input type="text" [(ngModel)]="str_provedor1" style="text-align: center;" required></ion-input>\n              </ion-item>\n          </ion-col>     \n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" (click)="agregar_deudas(str_provedor1,0)" style="display:block; margin:auto;">Agregar deuda</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h3> Deuda cristian: {{deudor2}}</h3>\n                <ion-item>\n                    <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                  <ion-input type="text" [(ngModel)]="str_provedor2" style="text-align: center;" required></ion-input>\n                </ion-item>\n            </ion-col>     \n            <ion-col class="signup-col">\n              <button ion-button class="submit-btn" (click)="agregar_deudas(str_provedor2,1)" style="display:block; margin:auto;">Agregar deuda</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <h3> Deuda ramon: {{deudor3}}</h3>\n                  <ion-item>\n                      <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                    <ion-input type="text" [(ngModel)]="str_provedor3" style="text-align: center;" required></ion-input>\n                  </ion-item>\n              </ion-col>     \n              <ion-col class="signup-col">\n                <button ion-button class="submit-btn" (click)="agregar_deudas(str_provedor3,2)" style="display:block; margin:auto;">Agregar deuda</button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <h3> Deuda jose: {{deudor4}}</h3>\n                    <ion-item>\n                        <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                      <ion-input type="text" [(ngModel)]="str_provedor4" style="text-align: center;" required></ion-input>\n                    </ion-item>\n                </ion-col>     \n                <ion-col class="signup-col">\n                  <button ion-button class="submit-btn" (click)="agregar_deudas(str_provedor4,3)" style="display:block; margin:auto;">Agregar deuda</button>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                  <ion-col>\n                      <h3> ingresos netos: {{ingresos_netos}}</h3>\n                      <ion-item>\n                          <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                        <ion-input type="text" [(ngModel)]="str_ingresos" style="text-align: center;" required></ion-input>\n                      </ion-item>\n                  </ion-col>     \n                  <ion-col class="signup-col">\n                    <button ion-button class="submit-btn" (click)="agregar_deudas(str_ingresos,4)" style="display:block; margin:auto;">Sumar ingresos</button>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <h3> Egresos: {{egresos}}</h3>\n                        <ion-item>\n                            <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                          <ion-input type="text" [(ngModel)]="str_egresos" style="text-align: center;" required></ion-input>\n                        </ion-item>\n                    </ion-col>     \n                    <ion-col class="signup-col">\n                      <button ion-button class="submit-btn" (click)="agregar_deudas(str_egresos,5)" style="display:block; margin:auto;">Sumar egreso</button>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                      <ion-col>\n                          <h3> utilidades: {{utilidades}}</h3>\n                          <ion-item>\n                              <ion-label floating >Valor,(sin comas o puntos)</ion-label>\n                            <ion-input type="text" [(ngModel)]="str_utilidades" style="text-align: center;" required></ion-input>\n                          </ion-item>\n                      </ion-col>     \n                    </ion-row>\n\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/contabilidad/contabilidad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContabilidadPage);
    return ContabilidadPage;
}());

//# sourceMappingURL=contabilidad.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaProductosPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListaProductosPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaProductosPedidoPage = /** @class */ (function () {
    function ListaProductosPedidoPage(navCtrl, navParams, crud, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.toastCtrl = toastCtrl;
        this.lista = [];
        this.lista = this.navParams.get("lista");
        this.id = this.navParams.get("id");
        this.pedido = this.navParams.get("pedido");
        var pathTotalPedido = "/PEDIDOS/" + this.pedido.id + "/total";
        this.crud.get(pathTotalPedido).valueChanges()
            .subscribe(function (total) {
            _this.total = Number(total);
        });
    }
    ListaProductosPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaProductosPedidoPage');
    };
    ListaProductosPedidoPage.prototype.borrarProducto = function (producto) {
        var productoEncontrado = false;
        var indexProducto = 0;
        for (var i = 0; i < this.lista.length && productoEncontrado == false; i++) {
            if (this.lista[i].id == producto.id) {
                indexProducto = i;
                productoEncontrado = true;
            }
        }
        var pathListaPedidos = "/PEDIDOS/" + this.pedido.id + "/productos/";
        this.lista.splice(indexProducto, 1);
        this.crud.edit(pathListaPedidos, this.lista);
        var pathTotal = "/PEDIDOS/" + this.pedido.id + "/total";
        this.total = Number(this.total) - (Number(producto.precio) * Number(producto.cantidad));
        this.pedido.total = Number(this.pedido.total) - (Number(producto.precio) * Number(producto.cantidad));
        this.crud.edit(pathTotal, this.total);
        var toast = this.toastCtrl.create({
            message: "Producto Borrado Exitosamente",
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ListaProductosPedidoPage.prototype.agregarProductos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { lista: this.pedido.productos, id: this.pedido.id, total: this.pedido.total });
    };
    ListaProductosPedidoPage.prototype.sumarUno = function (producto) {
        var productoEncontrado = false;
        var indexProducto = 0;
        for (var i = 0; i < this.lista.length && productoEncontrado == false; i++) {
            if (this.lista[i].id == producto.id) {
                indexProducto = i;
                productoEncontrado = true;
            }
        }
        var pathPedido = "/PEDIDOS/" + this.pedido.id + "/productos/" + indexProducto + "/cantidad";
        producto.cantidad = producto.cantidad + 1;
        this.crud.edit(pathPedido, producto.cantidad);
        var pathTotal = "/PEDIDOS/" + this.pedido.id + "/total";
        console.log("viejo total = " + this.total);
        this.total = Number(this.total) + Number(producto.precio);
        this.pedido.total = Number(this.pedido.total) + Number(producto.precio);
        this.crud.edit(pathTotal, this.total);
    };
    ListaProductosPedidoPage.prototype.restarUno = function (producto) {
        if (producto.cantidad > 1) {
            var productoEncontrado = false;
            var indexProducto = 0;
            for (var i = 0; i < this.lista.length && productoEncontrado == false; i++) {
                if (this.lista[i].id == producto.id) {
                    indexProducto = i;
                    productoEncontrado = true;
                }
            }
            var pathPedido = "/PEDIDOS/" + this.pedido.id + "/productos/" + indexProducto + "/cantidad";
            producto.cantidad = producto.cantidad - 1;
            this.crud.edit(pathPedido, producto.cantidad);
            var pathTotal = "/PEDIDOS/" + this.pedido.id + "/total";
            this.total = Number(this.total) - Number(producto.precio);
            this.pedido.total = Number(this.pedido.total) - Number(producto.precio);
            this.crud.edit(pathTotal, this.total);
        }
        else {
            this.borrarProducto(producto);
        }
    };
    ListaProductosPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lista-productos-pedido',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/lista-productos-pedido/lista-productos-pedido.html"*/'<!--\n  Generated template for the ListaProductosPedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>listaProductosPedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n    <ion-list>\n        <ion-item-sliding *ngFor="let producto of lista">\n          <ion-item >          \n            <ion-avatar item-start>\n              <img style="width: 100px; height: 100px;" src="{{producto.foto}}"/>              \n            </ion-avatar> \n            <h1 style="text-transform: capitalize;">{{producto.nombre}}</h1>      \n            <h3>Marca: {{producto.marca}}</h3>      \n            <h3>Tipo: {{producto.tipo}}</h3>  \n            <h1>Precio: ${{producto.precio}}</h1>               \n            <h1>Cantidad: {{producto.cantidad}}</h1>\n\n            <button ion-button color="ok" (click)="sumarUno(producto)">\n              <ion-icon name="add"></ion-icon>&nbsp;\n            </button>\n            <button ion-button color="ok" (click)="restarUno(producto)">\n              <ion-icon name="remove"></ion-icon>&nbsp;\n            </button>\n            <button ion-button color="ok" (click)="borrarProducto(producto)">\n              <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n              </button>\n          </ion-item>                 \n        </ion-item-sliding>\n      </ion-list>\n      <button ion-button color="ok" (click)="agregarProductos()">\n          <ion-icon name="add-circle"></ion-icon>&nbsp;\n          agregar productos\n        </button>\n    </ion-col>\n    <ion-col>\n        <img style="width: 100%; height: 90px;" src="../assets/imgs/barra_abajo.png"/>\n        <ion-item>      \n            <hr>\n            NOMBRE: {{pedido.usuario.nombre}}\n            <hr>\n            TELEFONO: {{pedido.usuario.telefono}}\n            <hr>\n            Departamento: {{pedido.departamento}}\n            <hr>      \n            MUNICIPIO: {{pedido.municipio}}\n            <hr>\n            Barrio: {{pedido.barrio}}\n            <hr>\n            DIRECCION: {{pedido.direccion}}\n            <hr>\n            Observaciones: {{pedido.observaciones}}\n            <hr>\n            TOTAL: {{pedido.total}}\n            <hr>     \n          </ion-item>\n          <img style="width: 100%; height: 90px;" src="../assets/imgs/barra_abajo.png"/>  \n    </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/lista-productos-pedido/lista-productos-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ListaProductosPedidoPage);
    return ListaProductosPedidoPage;
}());

//# sourceMappingURL=lista-productos-pedido.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the DetalleProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleProductoPage = /** @class */ (function () {
    function DetalleProductoPage(navCtrl, navParams, camera, storage, crud) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.storage = storage;
        this.crud = crud;
        this.producto = {};
        this.productos = [];
        this.salida = [];
        this.producto = navParams.get('producto') || {};
        if (!this.producto.id) {
            this.producto.id = Date.now();
        }
        var pathProductos = "PRODUCTOS/";
        this.crud.getList(pathProductos).valueChanges()
            .subscribe(function (productosDB) {
            _this.productos = productosDB;
        });
        this.salida = this.productos;
    }
    DetalleProductoPage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: this.camera.PictureSourceType.CAMERA
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetalleProductoPage.prototype.createUploadTask = function (file, path) {
        var _this = this;
        var filePath = "" + path;
        this.ref = this.storage.ref(filePath);
        this.image = 'data:image/jpg;base64,' + file;
        alert("Cargando foto en la base de datos");
        this.ref.putString(this.image, 'data_url').then(function () {
            _this.ref.getDownloadURL().subscribe(function (url) {
                _this.downloadURL = url;
                _this.producto.foto = _this.downloadURL;
                alert("Foto cargada con éxito en la base de datos");
            });
        });
    };
    DetalleProductoPage.prototype.openFromGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.camera.getPicture({
                            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                            destinationType: this.camera.DestinationType.DATA_URL
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetalleProductoPage.prototype.uploadHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64, pathFotoUsuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openFromGallery()];
                    case 1:
                        base64 = _a.sent();
                        pathFotoUsuario = "PRODUCTOS/" + this.producto.id + "/fotoProducto.jpg";
                        this.createUploadTask(base64, pathFotoUsuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetalleProductoPage.prototype.confirmarRegistro = function (producto, costo, ganancia) {
        this.producto.costo = costo;
        this.producto.ganancia = this.producto.precio - this.producto.costo;
        var path = "PRODUCTOS/" + producto.id;
        this.crud.create(path, this.producto);
        alert("El producto fue almacenado por un caballo en Barbero Express, gracias.");
        console.log("modificado");
        //this.navCtrl.pop();
    };
    DetalleProductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleProductoPage');
    };
    DetalleProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-detalle-producto',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/detalle-producto/detalle-producto.html"*/'<!--\n  Generated template for the DetalleProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{producto.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-group>        \n    <!-- Foto Paciente -->\n      <ion-item>\n        <ion-thumbnail item-start>          \n          <img src="{{producto.foto}}">\n        </ion-thumbnail>\n        <h2>FOTO PRODUCTO</h2>\n        <button ion-button full (click)="uploadHandler()">Tomar Foto</button>\n      </ion-item>\n      <!-- Id -->\n      <ion-item>\n        <ion-label floating>ID</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.id"></ion-input>\n      </ion-item>    \n      <!-- Nombre -->\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.nombre"></ion-input>\n      </ion-item>\n      <!-- Tipo     -->\n      <ion-item>\n        <ion-label floating>Tipo</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.tipo"></ion-input>\n      </ion-item>    \n      <!-- Precio -->\n      <ion-item>\n        <ion-label floating>Precio</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.precio"></ion-input>\n      </ion-item>   \n      <!-- Costo -->\n      <ion-item>\n        <ion-label floating>Costo</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.costo"></ion-input>\n      </ion-item>    \n      <!-- Porcentaje Ganancia -->\n      <ion-item>\n        <ion-label floating>Ganancia</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.ganancia"></ion-input>\n      </ion-item>   \n      <!-- Marca -->\n      <ion-item>\n        <ion-label floating>Marca</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.marca"></ion-input>\n      </ion-item>  \n      <!-- Descripción  -->\n      <ion-item>\n        <ion-label floating>Descripción</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.descripcion"></ion-input>\n      </ion-item>\n      <!-- Recomendado -->\n      <ion-item>\n        <ion-label floating>Recomendado</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.recomendado"></ion-input>\n      </ion-item> \n      <!-- Disponibles    -->\n      <ion-item>\n        <ion-label floating>Disponibles</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.disponibles"></ion-input>\n      </ion-item>\n      <!-- GIF -->\n      <ion-item>\n        <ion-label floating>GIF</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.gif"></ion-input>\n      </ion-item>\n      <!-- Numero Compras -->\n      <ion-item>\n        <ion-label floating>Número Compras</ion-label>\n        <ion-input type="text" [(ngModel)]="producto.numCompras"></ion-input>\n      </ion-item>\n    </ion-item-group>\n    </ion-list>\n    <button ion-button color="primary" (click)="confirmarRegistro(producto, producto.costo, producto.ganancia)">CONFIARMAR REGISTRO</button>    \n  </ion-content>\n  \n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/detalle-producto/detalle-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"], __WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__["a" /* crudDB */]])
    ], DetalleProductoPage);
    return DetalleProductoPage;
}());

//# sourceMappingURL=detalle-producto.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalle_pedido_detalle_pedido__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, navParams, crud, alertCtrl, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.path = "/PEDIDOS/";
        this.pathNacionales = "/PEDIDOS_NACIONALES/";
        this.pedidos = [];
        this.verdes = [];
        this.pedidosNacionales = [];
        this.pathDataBarber = "/DOMICILIARIOS/USUARIOS/0/TOTAL_DIA/" + "barbero";
        this.pathPediosListos = "/DOMICILIARIOS/PEDIDOS_LISTOS/";
        this.pathDataDomiciliario = "/DOMICILIARIOS/USUARIOS/0/TOTAL_DIA/" + "domiciliario";
        this.pathDataBarber1 = "/DOMICILIARIOS/USUARIOS/1/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario1 = "/DOMICILIARIOS/USUARIOS/1/TOTAL_DIA/" + "domiciliario";
        this.pathDataBarber2 = "/DOMICILIARIOS/USUARIOS/2/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario2 = "/DOMICILIARIOS/USUARIOS/2/TOTAL_DIA/" + "domiciliario";
        this.pathDataBarber3 = "/DOMICILIARIOS/USUARIOS/3/TOTAL_DIA/" + "barbero";
        this.pathDataDomiciliario3 = "/DOMICILIARIOS/USUARIOS/3/TOTAL_DIA/" + "domiciliario";
        this.PathEmpresa3 = "/DOMICILIARIOS/USUARIOS/3/PEDIDOS/";
        this.PathEmpresa2 = "/DOMICILIARIOS/USUARIOS/2/PEDIDOS/";
        this.PathEmpresa1 = "/DOMICILIARIOS/USUARIOS/1/PEDIDOS/";
        this.PathEmpresa0 = "/DOMICILIARIOS/USUARIOS/0/PEDIDOS/";
        this.pathRecibos = "/RECIBOS/";
        this.pathProductos = "/PRODUCTOS/";
        this.recibos = [];
        this.productos = [];
        this.ListosParaEnviar = [];
        //PEDIDOS, RECIBOS Y PRODUCTOS
        this.ganancia = 0;
        this.crud.getList(this.path).valueChanges()
            .subscribe(function (pedidosDB) {
            _this.pedidos = pedidosDB;
            _this.cantidadPedidos = _this.pedidos.length;
        });
        this.crud.getList(this.pathNacionales).valueChanges()
            .subscribe(function (pedidosDB) {
            _this.pedidosNacionales = pedidosDB;
        });
        this.crud.getList(this.pathProductos).valueChanges()
            .subscribe(function (productos) {
            _this.productos = productos;
        });
        this.crud.getList(this.pathRecibos).valueChanges()
            .subscribe(function (data) {
            _this.recibos = data;
            _this.totalRecibos = _this.recibos.map(_this.precio).reduce(_this.sum);
        });
        //DATOS DOMICILIARIO 0
        this.crud.get(this.pathDataBarber).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario).valueChanges()
            .subscribe(function (data) {
            _this.totalSantiago = Number(data);
        });
        this.crud.getList(this.PathEmpresa0).valueChanges()
            .subscribe(function (data) {
            //this.ListosParaEnviar = data;
            _this.cantidadEnviosMensajero0 = data.length;
        });
        //DATOS DOMICILIARIO 1
        this.crud.get(this.pathDataBarber1).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero1 = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario1).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario1 = Number(data);
        });
        this.crud.getList(this.PathEmpresa1).valueChanges()
            .subscribe(function (data) {
            //this.ListosParaEnviar = data;
            _this.cantidadEnviosMensajero1 = data.length;
        });
        //DATOS DOMICILIARIO 2
        this.crud.get(this.pathDataBarber2).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero2 = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario2).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario2 = Number(data);
        });
        this.crud.getList(this.PathEmpresa2).valueChanges()
            .subscribe(function (data) {
            //this.ListosParaEnviar = data;
            _this.cantidadEnviosMensajero2 = data.length;
        });
        //DATOS DOMICILIARIO 3
        this.crud.get(this.pathDataBarber3).valueChanges()
            .subscribe(function (data) {
            _this.totalBarbero3 = Number(data);
        });
        this.crud.get(this.pathDataDomiciliario3).valueChanges()
            .subscribe(function (data) {
            _this.totalDomiciliario3 = Number(data);
        });
        this.crud.getList(this.PathEmpresa3).valueChanges()
            .subscribe(function (data) {
            //this.ListosParaEnviar = data;
            _this.cantidadEnviosMensajero3 = data.length;
        });
        //TRAEMOS EL VALOR DEL COSTO DEL DOMICILIO
        this.crud.get("/DOMICILIARIOS/COSTO_DOMICILIO").valueChanges()
            .subscribe(function (data) {
            _this.costo_domicilio = Number(data);
        });
        //TRAEMOS EL ARREGLO DE LOS PEDIDOS LISTOS PARA ENVIAR
        this.crud.getList(this.pathPediosListos).valueChanges()
            .subscribe(function (data) {
            _this.ListosParaEnviar = data;
            _this.cantidadEnviosMensajeros = Number((_this.ListosParaEnviar != null) ? _this.ListosParaEnviar.length : 0);
        });
        //DATOS DE CONTABILIDAD
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/ganancia_esperada").valueChanges()
            .subscribe(function (data) {
            _this.ganancia_esperada = Number(data);
        });
        this.crud.get("/TOTAL_DIA/CONTABILIDAD/mercancia_esperada").valueChanges()
            .subscribe(function (data) {
            _this.mercancia_esperada = Number(data);
        });
    }
    //FUNCION PARA GENERAR LISTA DE PEDIDOS EN COLOR VERDE
    PedidosPage.prototype.GenerarLista = function () {
        var _this = this;
        var i = 0;
        var texto = "Total pedidos: " + this.ListosParaEnviar.length + '\n' + '\n' + "Desde: " + '\n' + "Nombre: cristian franco, poblado, unidad torres de patio bonito" + '\n' +
            "Teléfono: 305 766 8478" + '\n' +
            "Dirección: carrera 45#1-191, interior 1512" + '\n' + '\n';
        while (i < this.ListosParaEnviar.length) {
            texto += (i + 1) + ")" + '\n';
            texto += "nombre: " + this.ListosParaEnviar[i].usuario.nombre + '\n';
            texto += "telefono: " + this.ListosParaEnviar[i].usuario.telefono + '\n';
            texto += "direccion: " + this.ListosParaEnviar[i].direccion + '\n';
            texto += "observaciones: " + this.ListosParaEnviar[i].observaciones + '\n';
            texto += "cobrar: $ " + this.ListosParaEnviar[i].total + '\n';
            texto += '\n';
            i++;
        }
        var texto_alerta = texto.replace(/\n/g, "<br>");
        console.log(texto);
        var alert = this.alertCtrl.create({
            title: "¡Pedidos para hoy!",
            message: texto_alerta,
            buttons: [
                {
                    text: "copiar",
                    handler: function () {
                        _this.copyText(texto);
                    }
                }
            ]
        });
        alert.present();
    };
    //FUNCION PARA PONER COLORES DEPENDIENDO DEL ESTADO DEL PEDIDO
    PedidosPage.prototype.getBorder = function (estado) {
        var pos1 = estado[0];
        switch (pos1) {
            case 'W':
                return '15px solid green';
            case 'F':
                return '15px solid yellow';
            case 'M':
                return '15px solid red';
            case 'D':
                return '15px solid purple';
            case 'G':
                return '15px solid blue';
            default:
                return '15px solid white';
        }
    };
    //FUNCIONES DE MODIFICAR EL COLOR DEL PEDIDO DEPENDIENDO DEL ESTADO
    PedidosPage.prototype.okey = function (pedido) {
        var path = "/PEDIDOS/" + pedido.id + "/estado";
        var pathPedido = "/DOMICILIARIOS/PEDIDOS_LISTOS/" + pedido.id;
        if (pedido.estado.slice(0, 3) != 'W -') {
            if (pedido.estado.slice(0, 3) != 'F -') {
                if (pedido.estado.slice(0, 3) != 'M -') {
                    if (pedido.estado.slice(0, 3) != 'D -') {
                        this.crud.edit(path, 'W - ' + pedido.estado);
                    }
                    else {
                        this.crud.edit(path, 'W - ' + pedido.estado.slice(4));
                    }
                }
                else {
                    this.crud.edit(path, 'W - ' + pedido.estado.slice(4));
                }
            }
            else {
                this.crud.edit(path, 'W - ' + pedido.estado.slice(4));
            }
        }
        else {
            this.crud.edit(path, 'W - ' + pedido.estado.slice(4));
        }
        this.crud.create(pathPedido, pedido);
    };
    PedidosPage.prototype.enProceso = function (pedido) {
        var path = "/PEDIDOS/" + pedido.id + "/estado";
        if (pedido.estado.slice(0, 3) != 'F -') {
            if (pedido.estado.slice(0, 3) != 'W -') {
                if (pedido.estado.slice(0, 3) != 'M -') {
                    if (pedido.estado.slice(0, 3) != 'D -') {
                        this.crud.edit(path, 'F - ' + pedido.estado);
                    }
                    else {
                        var pathPedido = "/DOMICILIARIOS/PEDIDOS_LISTOS/" + pedido.id;
                        try {
                            this.crud.delete(pathPedido);
                        }
                        catch (error) {
                            throw new Error('No hay pedidos');
                        }
                        this.crud.edit(path, 'F - ' + pedido.estado.slice(4));
                    }
                }
                else {
                    this.crud.edit(path, 'F - ' + pedido.estado.slice(4));
                }
            }
            else {
                this.crud.edit(path, 'F - ' + pedido.estado.slice(4));
                var pathPedido = "/DOMICILIARIOS/PEDIDOS_LISTOS/" + pedido.id;
                try {
                    this.crud.delete(pathPedido);
                }
                catch (error) {
                    throw new Error(error);
                }
            }
        }
        else {
            this.crud.edit(path, 'F - ' + pedido.estado.slice(4));
        }
    };
    PedidosPage.prototype.conProblemas = function (pedido) {
        var path = "/PEDIDOS/" + pedido.id + "/estado";
        if (pedido.estado.slice(0, 3) != 'M -') {
            if (pedido.estado.slice(0, 3) != 'W -') {
                if (pedido.estado.slice(0, 3) != 'F -') {
                    if (pedido.estado.slice(0, 3) != 'D -') {
                        this.crud.edit(path, 'M - ' + pedido.estado);
                    }
                    else {
                        this.crud.edit(path, 'M - ' + pedido.estado.slice(4));
                    }
                }
                else {
                    this.crud.edit(path, 'M - ' + pedido.estado.slice(4));
                }
            }
            else {
                this.crud.edit(path, 'M - ' + pedido.estado.slice(4));
            }
        }
        else {
            this.crud.edit(path, 'M - ' + pedido.estado.slice(4));
        }
        var pathPedido = "/DOMICILIARIOS/PEDIDOS_LISTOS/" + pedido.id;
        try {
            this.crud.delete(pathPedido);
        }
        catch (error) {
            throw new Error('No hay pedidos');
        }
    };
    PedidosPage.prototype.despachado = function (pedido) {
        var now = new Date();
        var path = "/PEDIDOS/" + pedido.id + "/estado";
        if (pedido.estado.slice(0, 3) != 'D -') {
            if (pedido.estado.slice(0, 3) != 'W -') {
                if (pedido.estado.slice(0, 3) != 'F -') {
                    if (pedido.estado.slice(0, 3) != 'M -') {
                        this.crud.edit(path, 'D - ' + pedido.estado);
                    }
                    else {
                        this.crud.edit(path, 'D - ' + pedido.estado.slice(4));
                    }
                }
                else {
                    this.crud.edit(path, 'D - ' + pedido.estado.slice(4));
                }
            }
            else {
                this.crud.edit(path, 'D - ' + pedido.estado.slice(4));
            }
        }
        else {
            this.crud.edit(path, 'D - ' + pedido.estado.slice(4));
        }
        pedido.fecha = now.getTime();
        var pathTiempoDespachoPedido = "/PEDIDOS/" + pedido.id + "/fecha";
        this.crud.edit(pathTiempoDespachoPedido, pedido.fecha);
        //vemos la ganancia de este pedido
        this.mercancia_esperada += Number(this.dinero_mercancia(pedido));
        this.ganancia_esperada += Number(this.gananciaPedido(pedido));
        this.guardar_ganancias_base_de_datos();
    };
    //FUNCIONES PARA PONER EN MORADO (DESPACHADO) Y ENTREGAR, TODOS LOS PEDIDOS EN LA LISTA DE MENSAJEROS
    PedidosPage.prototype.despachadosGeneral = function () {
        this.mercancia_esperada = 0;
        this.ganancia_esperada = 0;
        var now = new Date();
        var i = 0;
        //arreglo de pedidos seleccionados en verde y en la lista de los mensajeros
        while (i < this.ListosParaEnviar.length) {
            if (this.ListosParaEnviar[i].estado != undefined) {
                try {
                    //los ponemos en color morado (estado despachado)
                    this.ListosParaEnviar[i].estado = 'D - ' + this.ListosParaEnviar[i].estado.slice(4);
                    var path = "/PEDIDOS/" + this.ListosParaEnviar[i].id + "/estado";
                    this.crud.edit(path, this.ListosParaEnviar[i].estado);
                    //agregamos la fecha de cuando fue despachado
                    this.ListosParaEnviar[i].fecha = now.getTime();
                    var pathFecha = "/PEDIDOS/" + this.ListosParaEnviar[i].id + "/fecha";
                    this.crud.edit(pathFecha, this.ListosParaEnviar[i].fecha);
                    //ganancia esperada
                    this.mercancia_esperada += Number(this.dinero_mercancia(this.pedidos[i]));
                    this.ganancia_esperada += Number(this.gananciaPedido(this.pedidos[i]));
                    console.log("mercancia " + this.mercancia_esperada);
                    console.log("ganancia " + this.ganancia_esperada);
                }
                catch (error) {
                    Object(__WEBPACK_IMPORTED_MODULE_5_rxjs__["throwError"])(error);
                }
            }
            i++;
        }
        this.guardar_ganancias_base_de_datos();
    };
    PedidosPage.prototype.gananciaPedido = function (pedido) {
        var costo_domicilio = this.costo_domicilio;
        var ganancias_producto = 0;
        var pago_domicilio_cliente = Number(4500);
        var posicionProducto = 0;
        var total_ganancia_pedido = 0;
        for (var i = 0; i < pedido.productos.length; i++) {
            var idProd = pedido.productos[i].id;
            for (var j = 0; j < this.productos.length; j++) {
                var idBodega = this.productos[j].id;
                if (idProd == idBodega) {
                    posicionProducto = j;
                }
            }
            ganancias_producto = Number(this.productos[posicionProducto].ganancia);
            total_ganancia_pedido += ganancias_producto;
        }
        return (total_ganancia_pedido - (costo_domicilio - pago_domicilio_cliente));
    };
    PedidosPage.prototype.dinero_mercancia = function (pedido) {
        var costo_mercancia_producto = 0;
        var total_mercancia = 0;
        var posicionProducto = 0;
        for (var i = 0; i < pedido.productos.length; i++) {
            var idProd = pedido.productos[i].id;
            for (var j = 0; j < this.productos.length; j++) {
                var idBodega = this.productos[j].id;
                if (idProd == idBodega) {
                    posicionProducto = j;
                }
            }
            costo_mercancia_producto = Number(this.productos[posicionProducto].costo) * Number(pedido.productos.productos[i].cantidad);
            total_mercancia += costo_mercancia_producto;
        }
        return total_mercancia;
    };
    PedidosPage.prototype.guardar_ganancias_base_de_datos = function () {
        var pathGanancias = "/TOTAL_DIA/CONTABILIDAD/ganancia_esperada";
        var pathMercancia = "/TOTAL_DIA/CONTABILIDAD/mercancia_esperada";
        this.crud.create(pathGanancias, this.ganancia_esperada);
        this.crud.create(pathMercancia, this.mercancia_esperada);
    };
    PedidosPage.prototype.entregadosGeneral = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Entregados',
            message: '¿Estás seguro de borrar estos pedidos?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        var i = 0;
                        while (i < _this.pedidos.length) {
                            if (_this.pedidos[i].estado.slice(0, 3) == "G -") {
                                try {
                                    //this.generarGanancia(this.pedidos[i]);
                                    var pathCrear = "/RECIBOS/" + _this.pedidos[i].id;
                                    var pathBorrar = "/PEDIDOS/" + _this.pedidos[i].id;
                                    var pathTotalRecib = "/TOTAL_RECIBOS/";
                                    _this.pedidos[i].estado = _this.pedidos[i].estado + "*>";
                                    _this.crud.create(pathCrear, _this.pedidos[i]);
                                    _this.crud.delete(pathBorrar);
                                    _this.crud.create(pathTotalRecib, _this.totalRecibos);
                                }
                                catch (error) {
                                    console.log(error);
                                }
                            }
                            else {
                            }
                            i++;
                        }
                        //console.log("Ganancia de hoy = " +  this.ganancia);
                    }
                }
            ]
        });
        alert.present();
    };
    //FUNCIONES PARA CAMBIAR ESTADO DE LOS PEDIDOS NACIONALES (CON OTRO PATH)
    PedidosPage.prototype.okey_nacionales = function (pedido) {
        var path = "/PEDIDOS_NACIONALES/" + pedido.id + "/estado";
        this.crud.edit(path, 'W - ' + pedido.estado.slice(4));
    };
    PedidosPage.prototype.enProceso_nacionales = function (pedido) {
        var path = "/PEDIDOS_NACIONALES/" + pedido.id + "/estado";
        this.crud.edit(path, 'F - ' + pedido.estado.slice(4));
    };
    PedidosPage.prototype.conProblemas_nacionales = function (pedido) {
        var path = "/PEDIDOS_NACIONALES/" + pedido.id + "/estado";
        this.crud.edit(path, 'M - ' + pedido.estado.slice(4));
    };
    //FUNCIONES PARA EL REDUCE MAP QUE SE HACE EN EL CONTRUCTOR
    PedidosPage.prototype.precio = function (item) {
        return parseInt(item.total);
    };
    PedidosPage.prototype.sum = function (prev, next) {
        return parseInt(prev) + parseInt(next);
    };
    PedidosPage.prototype.add = function (a, b) {
        return a + b;
    };
    //SE EJECUTA SIEMPRE QUE CARGUE LA PAGINA
    PedidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidosPage');
    };
    PedidosPage.prototype.irDetallePedido = function (pedido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalle_pedido_detalle_pedido__["a" /* DetallePedidoPage */], { pedido: pedido });
    };
    PedidosPage.prototype.llamar = function (telefono) {
        this.callNumber.callNumber(telefono, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    PedidosPage.prototype.asignarSantiago = function (pedido) {
        var pathPedido = "/DOMICILIARIOS/USUARIOS/" + 0 + "/PEDIDOS/" + pedido.id;
        this.crud.create(pathPedido, pedido);
    };
    PedidosPage.prototype.asignarOtro = function (pedido) {
        var pathPedido = "/DOMICILIARIOS/USUARIOS/" + 1 + "/PEDIDOS/" + pedido.id;
        this.crud.create(pathPedido, pedido);
    };
    PedidosPage.prototype.asignarTres = function (pedido) {
        var pathPedido = "/DOMICILIARIOS/USUARIOS/" + 2 + "/PEDIDOS/" + pedido.id;
        this.crud.create(pathPedido, pedido);
    };
    PedidosPage.prototype.asignarAlejandro = function (pedido) {
        var pathPedido = "/DOMICILIARIOS/USUARIOS/" + 3 + "/PEDIDOS/" + pedido.id;
        this.crud.create(pathPedido, pedido);
    };
    PedidosPage.prototype.entregado = function (pedido) {
        var _this = this;
        pedido.fecha = Date().toLocaleString();
        var alert = this.alertCtrl.create({
            title: 'Confirmar entrega',
            message: '¿Estás seguro de que este pedido ha sido entregado?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        var pathCrear = "/RECIBOS/" + pedido.id;
                        var pathBorrar = "/PEDIDOS/" + pedido.id;
                        var pathTotalRecib = "/TOTAL_RECIBOS/";
                        pedido.estado = pedido.estado + "*>";
                        _this.crud.create(pathCrear, pedido);
                        _this.crud.delete(pathBorrar);
                        _this.crud.create(pathTotalRecib, _this.totalRecibos);
                        console.log('entregado');
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.entregadoNacional = function (pedido) {
        var _this = this;
        pedido.fecha = Date().toLocaleString();
        var alert = this.alertCtrl.create({
            title: 'Confirmar entrega',
            message: '¿Estás seguro de que este pedido ha sido entregado?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        var pathCrear = "/RECIBOS/" + pedido.id;
                        var pathBorrar = "/PEDIDOS_NACIONALES/" + pedido.id;
                        var pathTotalRecib = "/TOTAL_RECIBOS/";
                        _this.crud.create(pathCrear, pedido);
                        _this.crud.delete(pathBorrar);
                        _this.crud.create(pathTotalRecib, _this.totalRecibos);
                        console.log('Borrado');
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.borrar = function (pedido) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Borrar',
            message: 'Estás seguro de borrar este pedido?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Borrar',
                    handler: function () {
                        var pathBorrar = "/PEDIDOS/" + pedido.id;
                        _this.crud.delete(pathBorrar);
                        var pathTotalRecib = "/TOTAL_RECIBOS/";
                        _this.crud.create(pathTotalRecib, _this.totalRecibos);
                        console.log('Borrado');
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.borrarNacional = function (pedido) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Borrar',
            message: 'Estás seguro de borrar este pedido?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Borrar',
                    handler: function () {
                        var pathBorrar = "/PEDIDOS_NACIONALES/" + pedido.id;
                        _this.crud.delete(pathBorrar);
                        var pathTotalRecib = "/TOTAL_RECIBOS/";
                        _this.crud.create(pathTotalRecib, _this.totalRecibos);
                        console.log('Borrado');
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.sumarDosmil1 = function (totalBarbero, totalDomiciliario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar sumar 2.000',
            message: 'Estás seguro de sumar 2.000?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Sumar',
                    handler: function () {
                        _this.totalBarbero1 -= 2000;
                        _this.totalDomiciliario1 += 2000;
                        _this.crud.edit(_this.pathDataDomiciliario1, _this.totalDomiciliario1);
                        _this.crud.edit(_this.pathDataBarber1, _this.totalBarbero1);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.sumarDosmil2 = function (totalBarbero, totalDomiciliario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar sumar 2.000',
            message: 'Estás seguro de sumar 2.000?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Sumar',
                    handler: function () {
                        _this.totalBarbero2 -= 2000;
                        _this.totalDomiciliario2 += 2000;
                        _this.crud.edit(_this.pathDataDomiciliario2, _this.totalDomiciliario2);
                        _this.crud.edit(_this.pathDataBarber2, _this.totalBarbero2);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.sumarDosmil3 = function (totalBarbero, totalDomiciliario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar sumar 2.000',
            message: 'Estás seguro de sumar 2.000?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Sumar',
                    handler: function () {
                        _this.totalBarbero3 -= 2000;
                        _this.totalDomiciliario3 += 2000;
                        _this.crud.edit(_this.pathDataDomiciliario3, _this.totalDomiciliario3);
                        _this.crud.edit(_this.pathDataBarber3, _this.totalBarbero3);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.sumarCuatromilquinientos1 = function (totalBarbero, totalDomiciliario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar sumar 4.500',
            message: 'Estás seguro de sumar 4.500?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Sumar',
                    handler: function () {
                        _this.totalBarbero1 -= 4500;
                        _this.totalDomiciliario1 += 4500;
                        _this.crud.edit(_this.pathDataDomiciliario1, _this.totalDomiciliario1);
                        _this.crud.edit(_this.pathDataBarber1, _this.totalBarbero1);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.sumarCuatromilquinientos2 = function (totalBarbero, totalDomiciliario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar sumar 4.500',
            message: 'Estás seguro de sumar 4.500?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Sumar',
                    handler: function () {
                        _this.totalBarbero2 -= 4500;
                        _this.totalDomiciliario2 += 4500;
                        _this.crud.edit(_this.pathDataDomiciliario2, _this.totalDomiciliario2);
                        _this.crud.edit(_this.pathDataBarber2, _this.totalBarbero2);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.sumarCuatromilquinientos3 = function (totalBarbero, totalDomiciliario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar sumar 4.500',
            message: 'Estás seguro de sumar 4.500?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Sumar',
                    handler: function () {
                        _this.totalBarbero3 -= 4500;
                        _this.totalDomiciliario3 += 4500;
                        _this.crud.edit(_this.pathDataDomiciliario3, _this.totalDomiciliario3);
                        _this.crud.edit(_this.pathDataBarber3, _this.totalBarbero3);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.limpiarMensajero = function (num_mensajero) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar limpieza del mensajero',
            message: '¿Estás seguro de reiniciar al mensajero?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Limpiar',
                    handler: function () {
                        var pathDom;
                        var error = false;
                        var pathBarbero;
                        var pathPedidos;
                        switch (num_mensajero) {
                            case 0:
                                pathDom = "/DOMICILIARIOS/USUARIOS/0/TOTAL_DIA/" + "domiciliario";
                                pathBarbero = "/DOMICILIARIOS/USUARIOS/0/TOTAL_DIA/" + "barbero";
                                pathPedidos = "/DOMICILIARIOS/USUARIOS/0/PEDIDOS/";
                                break;
                            case 1:
                                pathDom = "/DOMICILIARIOS/USUARIOS/1/TOTAL_DIA/" + "domiciliario";
                                pathBarbero = "/DOMICILIARIOS/USUARIOS/1/TOTAL_DIA/" + "barbero";
                                pathPedidos = "/DOMICILIARIOS/USUARIOS/1/PEDIDOS/";
                                break;
                            case 2:
                                pathDom = "/DOMICILIARIOS/USUARIOS/2/TOTAL_DIA/" + "domiciliario";
                                pathBarbero = "/DOMICILIARIOS/USUARIOS/2/TOTAL_DIA/" + "barbero";
                                pathPedidos = "/DOMICILIARIOS/USUARIOS/2/PEDIDOS/";
                                break;
                            case 3:
                                pathDom = "/DOMICILIARIOS/USUARIOS/3/TOTAL_DIA/" + "domiciliario";
                                pathBarbero = "/DOMICILIARIOS/USUARIOS/3/TOTAL_DIA/" + "barbero";
                                pathPedidos = "/DOMICILIARIOS/USUARIOS/3/PEDIDOS/";
                                break;
                            default:
                                error = true;
                                break;
                        }
                        if (error == false) {
                            var nuevo_valor_barbero = 0;
                            var nuevo_valor_mensajero = 0;
                            _this.crud.edit(pathDom, nuevo_valor_mensajero);
                            _this.crud.edit(pathBarbero, nuevo_valor_barbero);
                            try {
                                _this.crud.delete(pathPedidos);
                            }
                            catch (error) {
                                throw new Error('No hay pedidos');
                            }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    PedidosPage.prototype.listaFaltantes = function () {
        var i = 0;
        while (i < this.pedidos.length) {
            var path = this.pedidos[i].productos;
            console.log(path);
            i++;
        }
    };
    PedidosPage.prototype.confirmarNacional = function (pedido) {
        pedido.totalNacional = pedido.total - 4500;
    };
    PedidosPage.prototype.verProductosFaltantesDeBodega = function () {
        var _this = this;
        var text = "Productos faltantes para el dia de hoy: " + '\n';
        var lista_productos_faltantes = [{
                id: "",
                nombre: "",
                cantidad: 0
            }];
        //ARREGLO CON LOS PEDIDOS EN ESTADO AMARILLO
        var pedidos_de_hoy = [];
        for (var g = 0; g < this.pedidos.length; g++) {
            var estado_pedido = this.pedidos[g].estado.slice(0, 3);
            if (estado_pedido == "F -") {
                pedidos_de_hoy.push(this.pedidos[g]);
            }
        }
        for (var i = 0; i < pedidos_de_hoy.length; i++) {
            for (var j = 0; j < pedidos_de_hoy[i].productos.length; j++) {
                var id_producto_a_evaluar = pedidos_de_hoy[i].productos[j].id;
                for (var k = 0; k < this.productos.length; k++) {
                    var id_producto_bodega = this.productos[k].id;
                    if (id_producto_a_evaluar === id_producto_bodega) {
                        if (this.productos[k].combo) {
                            //ESTAMOS EN UN PRODUCTO QUE ES UN COMBO
                            var arreglo_id_productos_combo = [];
                            var j = 0;
                            //HALLAMOS EL ID DE TODOS LOS PRODUCTOS EN EL COMBO
                            for (var p = 0; p < this.productos[k].combo.idProductos.length; p++) {
                                if (this.productos[k].combo.idProductos[p] != ',') {
                                    if (arreglo_id_productos_combo[j] && arreglo_id_productos_combo[j].length > 0) {
                                        arreglo_id_productos_combo[j] += this.productos[k].combo.idProductos[p];
                                    }
                                    else {
                                        arreglo_id_productos_combo[j] = this.productos[k].combo.idProductos[p];
                                    }
                                }
                                else {
                                    j++;
                                }
                            }
                            //BUSCAMOS EN TODOS LOS PRODUCTOS DEL COMBO
                            for (var h = 0; h < arreglo_id_productos_combo.length; h++) {
                                id_producto_a_evaluar = arreglo_id_productos_combo[h];
                                for (var k = 0; k < this.productos.length; k++) {
                                    id_producto_bodega = this.productos[k].id;
                                    if (id_producto_a_evaluar === id_producto_bodega) {
                                        var cantidadPromo = 0; //INICIALMENTE EL PRODUCTO NO ES UNA PROMO
                                        //SOLO SE ACTIVA ESTE IF, SI ESTAMOS CON UN PRODUCTO CON LA VARIABLE PROMO
                                        if (this.productos[k].detallesPromo) {
                                            cantidadPromo = Number(this.productos[k].detallesPromo.cantidad); //VOLVEMOS EL PRODUCTO UNA PROMO
                                        }
                                        var cantidad_comprada = Number(1 + cantidadPromo);
                                        var cantidad_en_bodega = Number(this.productos[k].disponibles);
                                        var resta_de_producto_en_bodega = (cantidad_en_bodega - cantidad_comprada);
                                        if (resta_de_producto_en_bodega < 1) {
                                            var nombre_producto = this.productos[k].nombre;
                                            var cantidad_a_comprar = Math.abs(cantidad_en_bodega - cantidad_comprada);
                                            if (cantidad_a_comprar == 0) {
                                                cantidad_a_comprar = 1;
                                            }
                                            var ya_esta_faltando = false;
                                            for (var w = 0; w < lista_productos_faltantes.length && ya_esta_faltando == false; w++) {
                                                if (id_producto_a_evaluar == lista_productos_faltantes[w].id) {
                                                    ya_esta_faltando = true;
                                                    lista_productos_faltantes[w].cantidad += cantidad_a_comprar;
                                                }
                                            }
                                            if (ya_esta_faltando == false) {
                                                var nuevo_producto_faltante = {
                                                    id: id_producto_a_evaluar,
                                                    nombre: nombre_producto,
                                                    cantidad: cantidad_a_comprar
                                                };
                                                lista_productos_faltantes.push(nuevo_producto_faltante);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            //NO ES UN COMBO EL PRODUCTO QUE TENEMOS, SOLO ACOMULAMOS SU CANTIDAD
                            var cantidadPromo = 0; //INICIALMENTE EL PRODUCTO NO ES UNA PROMO
                            //SOLO SE ACTIVA ESTE IF, SI ESTAMOS CON UN PRODUCTO CON LA VARIABLE PROMO
                            if (this.productos[k].detallesPromo) {
                                cantidadPromo = Number(this.productos[k].detallesPromo.cantidad); //VOLVEMOS EL PRODUCTO UNA PROMO
                            }
                            var cantidad_comprada = Number(pedidos_de_hoy[i].productos[j].cantidad + cantidadPromo);
                            var cantidad_en_bodega = Number(this.productos[k].disponibles);
                            var resta_de_producto_en_bodega = (cantidad_en_bodega - cantidad_comprada);
                            if (resta_de_producto_en_bodega < 1) {
                                var nombre_producto = pedidos_de_hoy[i].productos[j].nombre;
                                var cantidad_a_comprar = Math.abs(cantidad_en_bodega - cantidad_comprada);
                                if (cantidad_a_comprar == 0) {
                                    cantidad_a_comprar = 1;
                                }
                                var ya_esta_faltando = false;
                                for (var w = 0; w < lista_productos_faltantes.length && ya_esta_faltando == false; w++) {
                                    if (id_producto_a_evaluar == lista_productos_faltantes[w].id) {
                                        ya_esta_faltando = true;
                                        lista_productos_faltantes[w].cantidad += cantidad_a_comprar;
                                    }
                                }
                                if (ya_esta_faltando == false) {
                                    var nuevo_producto_faltante = {
                                        id: id_producto_a_evaluar,
                                        nombre: nombre_producto,
                                        cantidad: cantidad_a_comprar
                                    };
                                    lista_productos_faltantes.push(nuevo_producto_faltante);
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var p = 1; p < lista_productos_faltantes.length; p++) {
            text += '\n' + lista_productos_faltantes[p].nombre + " x " + lista_productos_faltantes[p].cantidad;
        }
        var texto_alerta = text.replace(/\n/g, "<br>");
        console.log(text);
        var alert = this.alertCtrl.create({
            title: "¡Pedidos para hoy!",
            message: texto_alerta,
            buttons: [
                {
                    text: "copiar",
                    handler: function () {
                        _this.copyText(text);
                    }
                }
            ]
        });
        alert.present();
    };
    /* To copy any Text */
    PedidosPage.prototype.copyText = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    PedidosPage.prototype.limpiar_listos = function () {
        var pathPedido = "/DOMICILIARIOS/PEDIDOS_LISTOS/";
        try {
            this.crud.delete(pathPedido);
        }
        catch (error) {
            throw new Error(error);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PedidosPage.prototype, "index", void 0);
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/pedidos/pedidos.html"*/'<!--\n  Generated template for the PedidosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="text-align: center;"> <ion-icon name="person"></ion-icon> {{cantidadPedidos}} - <ion-icon name="cash"></ion-icon>  $ {{totalBarbero + totalBarbero1+totalBarbero2+totalBarbero3 | number: \'1.0-0\'}} - <ion-icon name="bicycle"></ion-icon> {{cantidadEnviosMensajeros | number: \'1.0-0\'}}   <!-- $ {{totalSantiago + totalDomiciliario1 + totalDomiciliario2 + totalDomiciliario3 | number: \'1.0-0\'}} --> </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <button ion-button color="ok" (click)="limpiar_listos()" style="margin:auto; display:block;">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n        Limpiar listos\n    </button>\n  <ion-item>\n      <ion-title>MENSAJERO 0</ion-title>\n      <ion-item>BARBERO: {{totalBarbero | number: \'1.0-0\'}}</ion-item>\n      <ion-item>MENSAJERO 0: {{totalSantiago | number: \'1.0-0\'}}</ion-item>\n      <ion-item>CANTIDAD PEDIDOS: {{cantidadEnviosMensajero0 | number: \'1.0-0\'}}</ion-item>\n      <button ion-button color="ok" (click)="sumarDosmil2(totalBarbero, totalSantiago)">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n        SUMAR 2.000\n    </button>\n    <button ion-button color="ok" (click)="sumarCuatromilquinientos2(totalBarbero, totalSantiago)">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n        SUMAR 4.500\n    </button>\n    <button ion-button color="ok" (click)="limpiarMensajero(0)">\n        <ion-icon name="trash"></ion-icon>&nbsp;\n        LIMPIAR\n    </button>\n  </ion-item>   \n  <ion-item>\n      <ion-title>MENSAJERO 1</ion-title>\n      <ion-item>BARBERO: ${{totalBarbero1 | number: \'1.0-0\'}}</ion-item>\n      <ion-item>MENSAJERO 1: ${{totalDomiciliario1 | number: \'1.0-0\'}}</ion-item>\n      <ion-item>CANTIDAD PEDIDOS: {{cantidadEnviosMensajero1 | number: \'1.0-0\'}}</ion-item>\n      <button ion-button color="ok" (click)="sumarDosmil1(totalBarbero1, totalDomiciliario1)">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n          SUMAR 2.000\n      </button>\n      <button ion-button color="ok" (click)="sumarCuatromilquinientos1(totalBarbero1, totalDomiciliario1)">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n          SUMAR 4.500\n      </button>\n      <button ion-button color="ok" (click)="limpiarMensajero(1)">\n          <ion-icon name="trash"></ion-icon>&nbsp;\n          LIMPIAR\n      </button>\n  </ion-item> \n <!--  <ion-item>\n    <ion-title>HECTOR</ion-title>\n      <ion-item>BARBERO 2: ${{totalBarbero2 | number: \'1.0-0\'}}</ion-item>\n      <ion-item>HECTOR: ${{totalDomiciliario2 | number: \'1.0-0\'}}</ion-item>\n      <button ion-button color="ok" (click)="sumarDosmil2(totalBarbero2, totalDomiciliario2)">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n          SUMAR 2.000\n      </button>\n      <button ion-button color="ok" (click)="sumarCuatromilquinientos2(totalBarbero2, totalDomiciliario2)">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n          SUMAR 4.500\n      </button>\n      <button ion-button color="ok" (click)="limpiar2(totalBarbero2, totalDomiciliario2)">\n          <ion-icon name="trash"></ion-icon>&nbsp;\n          LIMPIAR\n      </button>\n  </ion-item>   -->\n  <ion-item>\n    <ion-title>MENSAJERO 3</ion-title>\n    <ion-item>BARBERO: ${{totalBarbero3 | number: \'1.0-0\'}}</ion-item>\n    <ion-item>MENSAJERO 3: ${{totalDomiciliario3 | number: \'1.0-0\'}}</ion-item>\n    <ion-item>CANTIDAD PEDIDOS: {{cantidadEnviosMensajero3 | number: \'1.0-0\'}}</ion-item>\n    <button ion-button color="ok" (click)="sumarDosmil3(totalBarbero3, totalDomiciliario3)">\n    <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n        SUMAR 2.000\n    </button>\n    <button ion-button color="ok" (click)="sumarCuatromilquinientos3(totalBarbero3, totalDomiciliario3)">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n        SUMAR 4.500\n    </button>\n    <button ion-button color="ok" (click)="limpiarMensajero(3)">\n        <ion-icon name="trash"></ion-icon>&nbsp;\n        LIMPIAR\n    </button>\n\n    <!-- PEDIDOS LOCALES -->\n</ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col  col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 *ngFor="let pedido of pedidos;let i=index">\n          <ion-card id="cardPedidos" [ngStyle]="{\'border\':getBorder(pedido.estado)}">\n              <img style="background-size: cover; width: 70px; height: 70px; display: block; margin:auto;" src="./../../assets/imgs/cartUser.jpg"/>\n              <ion-card-content (click)="irDetallePedido(pedido)">\n                <ion-card-title style="text-transform: uppercase; text-align: center; user-select: text;">\n                  {{pedido.usuario.nombre}}                    \n                </ion-card-title>\n              </ion-card-content>\n              <div  style="text-align: center">\n                <button ion-button color="ok" (click)="okey(pedido)">\n                    <ion-icon name="md-thumbs-up"></ion-icon> &nbsp;\n                </button>\n\n                <button ion-button color="ok" (click)="conProblemas(pedido)">\n                    <ion-icon name="md-thumbs-down"></ion-icon> &nbsp;\n                </button>\n\n                <button ion-button color="ok" (click)="enProceso(pedido)">\n                    <ion-icon name="md-help"></ion-icon> &nbsp;\n                </button>\n\n                <button ion-button color="ok" (click)="despachado(pedido)">\n                    <ion-icon name="jet"></ion-icon>&nbsp;\n                </button>\n              \n              </div>\n            \n              <ion-card-content (click)="irDetallePedido(pedido)">\n                <hr>\n                <b>TELÉFONO: </b> {{pedido.usuario.telefono}}\n                <hr>                               \n                <b>MUNICIPIO: </b> {{pedido.municipio}}\n                <hr> \n                <b>DIRECCIÓN: </b> {{pedido.direccion}}\n                <hr>\n                <b>BARRIO: </b> {{pedido.barrio}}\n                <hr>\n                <b>OBSERVACIONES: </b> {{pedido.observaciones}}\n                <hr>\n                <b>ESTADO: </b>{{pedido.estado}}                               \n                <hr>\n                <h2>TOTAL: ${{pedido.total | number: \'1.0-0\'}}</h2>\n              </ion-card-content>\n\n              <a href="https://api.whatsapp.com/send?phone=57{{pedido.usuario.telefono}}&text=Buen día *{{pedido.usuario.nombre}}* este es un mensaje automático, te hablamos de Barbero Express. Tenemos un pedido a tu nombre para ser entregado *entre las 2:000 P.M y las 8:00 P.M*. El total de tu pedido es *${{pedido.total}}*. Gracias por preferir *barberoexpress.com*. Cualquier inquietud no dudes en escribirnos.&source=&data=" target="_blank">\n                <button ion-button color="ok">\n                    <ion-icon name="logo-whatsapp"></ion-icon>&nbsp;CONFIRMAR\n                </button>\n              </a>\n              <a href="https://api.whatsapp.com/send?phone=57{{pedido.usuario.telefono}}&text=Buen día {{pedido.usuario.nombre}}, te hablamos de Barbero Express. Tenemos un pedido a tu nombre para ser entregado *Mañana* entre las 2:00 P.M y las 8:00 P.M. El total del pedido es *${{pedido.total}}*.Recuerda que estamos para servirte y Gracias por tu compra!!!&source=&data=" target="_blank">\n                <button ion-button color="ok">\n                  <ion-icon name="clock"></ion-icon>&nbsp;MAÑANA\n                </button>\n              </a>             \n              <!-- <a href="https://api.whatsapp.com/send?phone=57{{pedido.usuario.telefono}}&text=Buen día {{pedido.usuario.nombre}}, te hablamos de Barbero Express. Tu pedido acaba de salir con el mensajero. Recuerda que debe estar llegando de 2:00 P.M a 6:00 P.M. Y el total del pedido es *${{pedido.total}}*. Confirmanos cuando lo recibas por favor. Gracias por tu compra!!!&source=&data=" target="_blank">MENSAJERO EN CAMINO</a>     -->          \n              <button ion-button color="ok" (click)="llamar(pedido.usuario.telefono)">\n                <ion-icon name="call"></ion-icon>&nbsp;LLAMAR\n              </button>\n              <button ion-button color="ok" (click)="asignarSantiago(pedido)">\n                <ion-icon name="bicycle"></ion-icon>&nbsp;MENSAJERO 0\n              </button>\n             <button ion-button color="ok" (click)="asignarOtro(pedido)">\n                <ion-icon name="bicycle"></ion-icon>&nbsp;MENSAJERO 1\n              </button>\n              \n              <button ion-button color="ok" (click)="asignarAlejandro(pedido)">\n                <ion-icon name="bicycle"></ion-icon> &nbsp;MENSAJERO 3\n              </button>\n              <button ion-button color="ok" (click)="borrar(pedido)">\n                <ion-icon name="trash"></ion-icon>\n                &nbsp;BORRAR\n              </button>\n          \n              <button ion-button color="ok" (click)="entregado(pedido)">\n                <ion-icon name="checkmark-circle-outline"></ion-icon>\n                &nbsp;ENTREGADO\n              </button>\n             <!--  <button ion-button color="ok" (click)="boton(pedido)">\n                <ion-icon name="checkmark-circle-outline"></ion-icon>\n                &nbsp;ENVIADO\n              </button> -->\n            <!--   <button (click)="bord=!bord">border {{bord ? \'off\' : \'on\'}}</button> -->\n            </ion-card>                                          \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- <ion-fab vertical="bottom" horizontal="end" slot="fixed">\n      <ion-fab-button>\n          <ion-icon name="add"></ion-icon>\n      </ion-fab-button>\n  </ion-fab> -->\n  \n  <div style="text-align: center">\n    <ion-card>\n    <button ion-button color="ok" (click)="GenerarLista()">\n      <ion-icon name="bicycle"></ion-icon>&nbsp;Generar Lista\n    </button>\n\n    <button ion-button color="ok" (click)="despachadosGeneral()">\n      <ion-icon name="jet"></ion-icon>&nbsp;Despachados\n    </button>\n\n    <button ion-button color="ok" (click)="entregadosGeneral()">\n      <ion-icon name="done-all"></ion-icon>&nbsp;Entregados\n    </button>\n\n    <button ion-button color="ok" (click)="verProductosFaltantesDeBodega()">\n      <ion-icon name="cube"></ion-icon>&nbsp;Productos faltantes\n    </button>\n  </ion-card>\n\n   <!-- PEDIDOS NACIONALES -->\n  </div>\n  <ion-list>\n      <ion-label style="font-size: xx-large; text-align: center">NACIONALES - DEPARTAMENTALES</ion-label>\n      <ion-grid>\n          <ion-row>\n            <ion-col  col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 *ngFor="let pedido of pedidosNacionales">\n                <ion-card [ngStyle]="{\'border\':getBorder(pedido.estado)}">\n                    <img style="background-size: cover; width: 70px; height: 70px; display: block; margin:auto;" src="./../../assets/imgs/mapaColombia.png"/>\n                    <ion-card-content (click)="irDetallePedido(pedido)">\n                      <ion-card-title style="text-transform: uppercase; text-align: center;">\n                        {{pedido.usuario.nombre}}                    \n                      </ion-card-title>\n                    </ion-card-content>\n                      <div  style="text-align: center">\n                          <button ion-button color="ok" (click)="okey_nacionales(pedido)">\n                              <ion-icon name="md-thumbs-up"></ion-icon> &nbsp;\n                          </button>\n        \n                          <button ion-button color="ok" (click)="conProblemas_nacionales(pedido)">\n                                <ion-icon name="md-thumbs-down"></ion-icon> &nbsp;\n                          </button>\n        \n                          <button ion-button color="ok" (click)="enProceso_nacionales(pedido)">\n                                  <ion-icon name="md-help"></ion-icon> &nbsp;\n                          </button>\n                      </div>\n                    \n                      <ion-card-content (click)="irDetallePedido(pedido)">\n                      TELÉFONO: {{pedido.usuario.telefono}}\n                      <hr>                               \n                      MUNICIPIO: {{pedido.municipio}}\n                      <hr> \n                      DIRECCIÓN: {{pedido.direccion}}\n                      <hr>\n                      OBSERVACIONES: {{pedido.observaciones}}\n                      <hr>\n                      ESTADO: {{pedido.estado}}                               \n                      <hr>\n                      <h2>TOTAL: ${{pedido.total | number: \'1.0-0\'}}</h2>\n                    </ion-card-content>\n                                             \n                  \n                    <button ion-button color="ok" (click)="confirmarNacional(pedido)">\n                      <a href="https://api.whatsapp.com/send?phone=57{{pedido.usuario.telefono}}&text=Buen día {{pedido.usuario.nombre}}, te hablamos de Barbero Express. Tenemos un pedido a tu nombre para ser *enviado por interrapidisimo/Servientrega*. El total del pedido es *${{pedido.totalNacional}}*. Dado que el pedido se encuentra fuera de la ciudad de Medellín, *no contamos con pago contra entrega en tu lugar de destino*, recuerda que el flete del envio lo pagas a la hora de recibir el producto. En este caso para poder proceder con el envío, debes realizar previamente el pago del pedido por *Bancolombia-NEQUI* y confirmarnos para proceder con el envío. Gracias por tu compra. Recuerda que puedes encontrarnos en redes sociales y en la aplicación Barbero Express para Android!!!          \n\n\n\n\n\n\n\n  Para el pago necesitas el *número 3505325406*, si te preguntan *código de convenio, es el 63703*. También pueden preguntarte el *tipo de pago*, en este caso debes decir que *es un pago de factura manual*. &source=&data=" target="_blank">\n                        <ion-icon name="logo-whatsapp"></ion-icon>&nbsp;CONFIRMAR\n                      </a>\n                      </button>\n                    \n                  <a href="https://api.whatsapp.com/send?phone=57{{pedido.usuario.telefono}}&text=Buen día {{pedido.usuario.nombre}}, te hablamos de Barbero Express. Tu pedido acaba de ser despachado. Confirmanos cuando lo recibas por favor. Gracias por tu compra!!!&source=&data=" target="_blank">\n                    <button ion-button color="ok">\n                        <ion-icon name="md-plane"></ion-icon>&nbsp;ENVIO EN CAMINO\n                    </button>\n                  </a> \n                  <button ion-button color="ok" (click)="llamar(pedido.usuario.telefono)">\n                    <ion-icon name="call"></ion-icon>&nbsp;\n                    LLAMAR\n                  </button>\n\n                  \n                  <button ion-button color="ok" (click)="borrarNacional(pedido)">\n                    <ion-icon name="trash"></ion-icon>&nbsp;\n                    BORRAR\n                  </button>\n                  <button ion-button color="ok" (click)="entregadoNacional(pedido)">\n                    <ion-icon name="checkmark-circle-outline"></ion-icon>&nbsp;\n                    ENTREGADO\n                  </button>\n\n                </ion-card> \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-list>\n  \n  \n    \n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/pedidos/pedidos.html"*/,
            styles: ["mycolor:{background-color : red}"],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalle_pedido_detalle_pedido__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RecibosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecibosPage = /** @class */ (function () {
    function RecibosPage(navCtrl, navParams, crud) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.path = "/RECIBOS/";
        this.recibos = [];
        this.crud.getList(this.path).valueChanges()
            .subscribe(function (recibosDB) {
            _this.recibos = recibosDB;
        });
    }
    RecibosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecibosPage');
    };
    RecibosPage.prototype.irDetalleRecibo = function (recibo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalle_pedido_detalle_pedido__["a" /* DetallePedidoPage */], { pedido: recibo });
    };
    RecibosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-recibos',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/recibos/recibos.html"*/'<!--\n  Generated template for the RecibosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>RECIBOS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let pedido of recibos">\n      <ion-item (click)="irDetalleRecibo(pedido)">          \n        <ion-avatar item-start>\n          <img style="width: 100px; height: 100px;" src="./../../assets/imgs/ticket.png"/>              \n        </ion-avatar> \n        <h1 style="text-transform: capitalize;">{{pedido.id}}</h1>      \n        <h3>Nombre: {{pedido.usuario.nombre}}</h3>              \n        <h3>Teléfono: {{pedido.usuario.telefono}}</h3>  \n        <h3>Email: {{pedido.usuario.email}}</h3>      \n        <h1>UID: {{pedido.usuario.uid}}</h1>              \n        <ion-icon name="arrow-forward" item-end ></ion-icon>    \n      </ion-item>              \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/recibos/recibos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__["a" /* crudDB */]])
    ], RecibosPage);
    return RecibosPage;
}());

//# sourceMappingURL=recibos.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_users__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contabilidad_contabilidad__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedidos_pedidos__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recibos_recibos__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsHomePage = /** @class */ (function () {
    function TabsHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabListaGeneralProductos = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabPedidos = __WEBPACK_IMPORTED_MODULE_3__pedidos_pedidos__["a" /* PedidosPage */];
        this.tabRecibos = __WEBPACK_IMPORTED_MODULE_6__recibos_recibos__["a" /* RecibosPage */];
        this.tabContabilidad = __WEBPACK_IMPORTED_MODULE_2__contabilidad_contabilidad__["a" /* ContabilidadPage */];
        this.tabUsers = __WEBPACK_IMPORTED_MODULE_0__users_users__["a" /* UsersPage */];
    }
    TabsHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsHomePage');
    };
    TabsHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-tabs-home',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/tabs-home/tabs-home.html"*/'<ion-tabs color="primary">\n  <ion-tab tabTitle="PEDIDOS" tabIcon="notifications" [root]="tabPedidos"></ion-tab>\n  <ion-tab tabTitle="LISTA" tabIcon="list" [root]="tabListaGeneralProductos"></ion-tab>\n  <ion-tab tabTitle="RECIBOS" tabIcon="attach" [root]="tabRecibos"></ion-tab>\n  <ion-tab tabTitle="CONTABILIDAD" tabIcon="calculator" [root]="tabContabilidad"></ion-tab>\n <!--  <ion-tab tabTitle="USUARIOS" tabIcon="people" [root]="tabUsers"></ion-tab> -->\n</ion-tabs>\n\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/tabs-home/tabs-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavParams */]])
    ], TabsHomePage);
    return TabsHomePage;
}());

//# sourceMappingURL=tabs-home.js.map

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contabilidad/contabilidad.module": [
		522,
		7
	],
	"../pages/detalle-pedido/detalle-pedido.module": [
		523,
		6
	],
	"../pages/detalle-producto/detalle-producto.module": [
		524,
		5
	],
	"../pages/lista-productos-pedido/lista-productos-pedido.module": [
		525,
		4
	],
	"../pages/pedidos/pedidos.module": [
		526,
		3
	],
	"../pages/recibos/recibos.module": [
		527,
		2
	],
	"../pages/tabs-home/tabs-home.module": [
		528,
		1
	],
	"../pages/users/users.module": [
		529,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(439);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return crudDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// This is injectable service to another component
var crudDB = /** @class */ (function () {
    function crudDB(afDB) {
        this.afDB = afDB;
    }
    crudDB.prototype.get = function (path) {
        return this.afDB.object(path);
    };
    crudDB.prototype.getList = function (path) {
        return this.afDB.list(path);
    };
    crudDB.prototype.create = function (path, objeto) {
        return this.afDB.object(path).set(objeto);
    };
    crudDB.prototype.edit = function (path, objeto) {
        return this.afDB.object(path).set(objeto);
    };
    crudDB.prototype.delete = function (path) {
        return this.afDB.object(path).remove();
    };
    crudDB = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["AngularFireDatabase"]])
    ], crudDB);
    return crudDB;
}());

//# sourceMappingURL=crudDB.service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_users_users__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_lista_productos_pedido_lista_productos_pedido__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_detalle_pedido_detalle_pedido__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_recibos_recibos__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contabilidad_contabilidad__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detalle_producto_detalle_producto__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pedidos_pedidos__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_home_tabs_home__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// Imports Firebase auth, Database, Module




var firebaseConfig = {
    apiKey: "AIzaSyAVCcHaDu7iETTruTao-QsbiDC6aow4b9s",
    authDomain: "barbero-express.firebaseapp.com",
    databaseURL: "https://barbero-express.firebaseio.com",
    projectId: "barbero-express",
    storageBucket: "barbero-express.appspot.com",
    messagingSenderId: "1021518127997"
};
// Servicios







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_home_tabs_home__["a" /* TabsHomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_detalle_producto_detalle_producto__["a" /* DetalleProductoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contabilidad_contabilidad__["a" /* ContabilidadPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_recibos_recibos__["a" /* RecibosPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detalle_pedido_detalle_pedido__["a" /* DetallePedidoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_lista_productos_pedido_lista_productos_pedido__["a" /* ListaProductosPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_users_users__["a" /* UsersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contabilidad/contabilidad.module#ContabilidadPageModule', name: 'ContabilidadPage', segment: 'contabilidad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-pedido/detalle-pedido.module#DetallePedidoPageModule', name: 'DetallePedidoPage', segment: 'detalle-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-producto/detalle-producto.module#DetalleProductoPageModule', name: 'DetalleProductoPage', segment: 'detalle-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-productos-pedido/lista-productos-pedido.module#ListaProductosPedidoPageModule', name: 'ListaProductosPedidoPage', segment: 'lista-productos-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos/pedidos.module#PedidosPageModule', name: 'PedidosPage', segment: 'pedidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recibos/recibos.module#RecibosPageModule', name: 'RecibosPage', segment: 'recibos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-home/tabs-home.module#TabsHomePageModule', name: 'TabsHomePage', segment: 'tabs-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__["a" /* PipesModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_home_tabs_home__["a" /* TabsHomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_detalle_producto_detalle_producto__["a" /* DetalleProductoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contabilidad_contabilidad__["a" /* ContabilidadPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_recibos_recibos__["a" /* RecibosPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detalle_pedido_detalle_pedido__["a" /* DetallePedidoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_lista_productos_pedido_lista_productos_pedido__["a" /* ListaProductosPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_users_users__["a" /* UsersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_17__services_crudDB_service__["a" /* crudDB */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__["AngularFireStorage"],
                // FileTransfer,
                // FileUploadOptions,
                // FileTransferObject,
                // File,
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_10__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_types__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_0__search_types__["a" /* TypesPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_0__search_types__["a" /* TypesPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypesPipe = /** @class */ (function () {
    function TypesPipe() {
    }
    TypesPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            if (args == "todos los productos") {
                return true;
            }
            else {
                return JSON.stringify(item.tipo).toLowerCase().includes(args);
            }
        });
    };
    TypesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'types'
        })
    ], TypesPipe);
    return TypesPipe;
}());

//# sourceMappingURL=types.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afDB, afAuth) {
        this.afDB = afDB;
        this.afAuth = afAuth;
    }
    AuthService.prototype.loginWithFacebook = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.registerWithEmail = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.loginWithEmail = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.getStatus = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_home_tabs_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_home_tabs_home__["a" /* TabsHomePage */];
        this.initializeApp();
    }
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_producto_detalle_producto__ = __webpack_require__(162);
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
    function HomePage(navCtrl, crud, alertCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.crud = crud;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.productos = [];
        this.pathProductos = "/PRODUCTOS/";
        this.tipos = [];
        this.items = [];
        this.listaMod = [];
        try {
            this.listaMod = this.navParams.get("lista");
            this.idMod = this.navParams.get("id");
            this.totalMod = this.navParams.get("total");
            if (this.listaMod == undefined) {
                this.listaMod = [];
            }
            if (this.totalMod != undefined && this.totalMod > 0) {
                var pathTotalPedido = "/PEDIDOS/" + this.idMod + "/total";
                this.crud.get(pathTotalPedido).valueChanges()
                    .subscribe(function (totalDB) {
                    _this.totalMod = Number(totalDB);
                });
            }
            else {
            }
            if (this.idMod == undefined) {
                this.idMod = null;
            }
        }
        catch (error) {
            this.listaMod = null;
            this.idMod = null;
            this.totalMod = null;
        }
        this.crud.getList(this.pathProductos).valueChanges()
            .subscribe(function (productosDB) {
            _this.productos = productosDB;
            _this.items = _this.productos.slice(0, 20);
        });
        var pathTipos = "/TIPOS/";
        this.crud.getList(pathTipos).valueChanges()
            .subscribe(function (tiposDB) {
            _this.tipos = tiposDB;
        });
    }
    HomePage.prototype.irAVistaDeDetalleProducto = function (producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_producto_detalle_producto__["a" /* DetalleProductoPage */], { producto: producto });
    };
    HomePage.prototype.crearProducto = function () {
        var producto = {
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
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_producto_detalle_producto__["a" /* DetalleProductoPage */], { producto: producto });
    };
    HomePage.prototype.getBorder = function () {
        switch (this.idMod) {
            case null:
                this.modTIme = false;
                return '15px solid white';
            default:
                this.modTIme = true;
                return '25px solid red';
        }
    };
    HomePage.prototype.agregar_borrar = function (producto) {
        var _this = this;
        if (this.modTIme == true) {
            var productoFinal = {
                nombre: producto.nombre,
                marca: producto.marca,
                precio: producto.precio,
                tipo: producto.tipo,
                foto: producto.foto,
                id: producto.id,
                cantidad: 1,
                subtotal: producto.precio
            };
            var pathLista = "/PEDIDOS/" + this.idMod + "/productos";
            this.listaMod.push(productoFinal);
            this.crud.edit(pathLista, this.listaMod);
            var pathTotal = "/PEDIDOS/" + this.idMod + "/total";
            this.totalMod = Number(this.totalMod) + Number(producto.precio);
            this.crud.edit(pathTotal, this.totalMod);
            var toast = this.toastCtrl.create({
                message: productoFinal.cantidad + " " + (productoFinal.nombre + " ") + "agregados al carrito correctamente",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirmar Borrar',
                message: '¿Estás seguro de borrar este producto?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function () {
                            console.log("Cancelado");
                        }
                    },
                    {
                        text: 'Borrar',
                        handler: function () {
                            var path = "PRODUCTOS/" + producto.id;
                            _this.crud.delete(path);
                            console.log('Borrado');
                        }
                    },
                ]
            });
            alert_1.present();
        }
    };
    HomePage.prototype.cambioLista = function (evento) {
        if (evento.length > 0) {
            this.items = this.productos;
        }
        else {
            this.items = this.productos.slice(0, 20);
        }
    };
    HomePage.prototype.cambioTipo = function (evento) {
        if (evento != "TODOS LOS PRODUCTOS") {
            this.items = this.productos;
        }
        else {
            this.items = this.productos.slice(0, 20);
        }
    };
    HomePage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        var k = this.items.length;
        setTimeout(function () {
            _this.items = _this.items.concat(_this.productos.slice(k, k + 10));
            infiniteScroll.complete();
        }, 100);
    };
    HomePage.prototype.borrar = function (producto) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Borrar',
            message: '¿Estás seguro de borrar este producto?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Borrar',
                    handler: function () {
                        var path = "PRODUCTOS/" + producto.id;
                        _this.crud.delete(path);
                        console.log('Borrado');
                    }
                },
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/home/home.html"*/'<!--\n  Generated template for the ListaGeneralProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>ARTÍCULOS EN BODEGA</ion-title>         \n    <ion-buttons end>\n      <button ion-button (click)="crearProducto()">\n          <ion-icon name="add"></ion-icon>\n      </button>    \n  </ion-buttons>       \n  </ion-navbar>\n  <ion-list style="height: 10px; " start>\n    <ion-item color="primary" >\n      <ion-label>SELECCIONA CATEGORÍA</ion-label>\n      <ion-select [(ngModel)]="catego" (ngModelChange)="cambioTipo($event)">                                  \n        <ion-option *ngFor="let tipo of tipos">{{tipo.text}}</ion-option>                                      \n      </ion-select>\n    </ion-item>\n</ion-list> \n  <div class="searchBoxContainer" color="primary">\n    <ion-input type="search" id="searchField" placeholder="Busca el producto que deseas..." [(ngModel)]="query" (ngModelChange)="cambioLista($event)"></ion-input>\n  </div>     \n</ion-header>\n\n\n<ion-content [ngStyle]="{\'border\':getBorder()}">\n  <ion-grid>\n      <ion-row>\n        <ion-col  col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor="let producto of items | search: query | types: catego">\n            <ion-card>\n                <img (click)="irAVistaDeDetalleProducto(producto)" style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto;" src="{{producto.foto}}"/>\n                <ion-card-content>\n                  <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; height: 70px; text-align: center;">\n                    <h6>{{producto.nombre}}</h6>\n                      \n                  </ion-card-title>\n                  <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                      ${{producto.precio | number: \'1.0-0\'}}\n                  </p>\n                                    \n                  <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregar_borrar(producto)">\n                      agregar/borrar\n                  </button>\n                </ion-card-content>\n              </ion-card>                              \n              \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-infinite-scroll threshold="200px" (ionInfinite)="loadData($event)">\n      <ion-infinite-scroll-content\n        loadingSpinner="bubbles"\n        loadingText="Cargando...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lista_productos_pedido_lista_productos_pedido__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_crudDB_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetallePedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallePedidoPage = /** @class */ (function () {
    function DetallePedidoPage(navCtrl, navParams, crud, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.alertCtrl = alertCtrl;
        this.pedido = this.navParams.get("pedido");
        this.pedido_id = this.pedido.id;
        this.estadoActual = this.pedido.estado;
        this.total = this.pedido.total;
        this.direccion = this.pedido.direccion;
        this.municipio = this.pedido.municipio;
        this.departamento = this.pedido.departamento;
        this.telefono = this.pedido.usuario.telefono;
        this.observaciones = this.pedido.observaciones;
        console.log("total = " + this.total);
        var path_pedido = "/PEDIDOS_NACIONALES/" + this.pedido_id;
        this.crud.getList(path_pedido).valueChanges()
            .subscribe(function (data) {
            if (data.length > 1) {
                _this.is_nacional = true;
            }
            else {
                _this.is_nacional = false;
            }
        });
    }
    DetallePedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePedidoPage');
    };
    DetallePedidoPage.prototype.entregado = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Borrar',
            message: 'Estás seguro de borrar este pedido?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Borrar',
                    handler: function () {
                        var pathCrear = "/RECIBOS/" + _this.pedido.id;
                        var pathBorrar = "/PEDIDOS/" + _this.pedido.id;
                        _this.crud.create(pathCrear, _this.pedido);
                        _this.crud.delete(pathBorrar);
                        console.log('Borrado');
                    }
                }
            ]
        });
        alert.present();
    };
    DetallePedidoPage.prototype.editar = function (num) {
        if (num == 1) {
            //editar total
            var pathTotal = "/PEDIDOS/" + this.pedido.id + "/total";
            this.crud.edit(pathTotal, this.total);
            //editar direccion
            var pathDireccion = "/PEDIDOS/" + this.pedido.id + "/direccion";
            this.crud.edit(pathDireccion, this.direccion);
            //editar telefono
            var pathTelefono = "/PEDIDOS/" + this.pedido.id + "/usuario/telefono";
            this.crud.edit(pathTelefono, this.telefono);
            //editar total
            var pathMunicipio = "/PEDIDOS/" + this.pedido.id + "/municipio";
            this.crud.edit(pathMunicipio, this.municipio);
            //editar estado
            var path = "/PEDIDOS/" + this.pedido.id + "/estado";
            this.crud.edit(path, this.estadoActual);
            //editar observaciones
            var pathObsrvaciones = "/PEDIDOS/" + this.pedido.id + "/observaciones";
            this.crud.edit(pathObsrvaciones, this.observaciones);
            //Pedidos nacionales
        }
        else {
            //editar total
            var pathTotal = "/PEDIDOS_NACIONALES/" + this.pedido.id + "/total";
            this.crud.edit(pathTotal, this.total);
            //editar direccion
            var pathDireccion = "/PEDIDOS_NACIONALES/" + this.pedido.id + "/direccion";
            this.crud.edit(pathDireccion, this.direccion);
            //editar telefono
            var pathTelefono = "/PEDIDOS_NACIONALES/" + this.pedido.id + "/usuario/telefono";
            this.crud.edit(pathTelefono, this.telefono);
            //editar total
            var pathMunicipio = "/PEDIDOS_NACIONALES/" + this.pedido.id + "/municipio";
            this.crud.edit(pathMunicipio, this.municipio);
            //editar estado
            var path = "/PEDIDOS_NACIONALES/" + this.pedido.id + "/estado";
            this.crud.edit(path, this.estadoActual);
            console.log("nacional");
        }
    };
    DetallePedidoPage.prototype.volverNacional = function () {
        var pathCrear = "/PEDIDOS_NACIONALES/" + this.pedido.id;
        var pathBorrar = "/PEDIDOS/" + this.pedido.id;
        this.crud.create(pathCrear, this.pedido);
        this.crud.delete(pathBorrar);
    };
    DetallePedidoPage.prototype.borrar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Borrar',
            message: 'Estás seguro de borrar este pedido?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancelado");
                    }
                },
                {
                    text: 'Borrar',
                    handler: function () {
                        var pathBorrar = "/PEDIDOS/" + _this.pedido.id;
                        _this.crud.delete(pathBorrar);
                        console.log('Borrado');
                    }
                }
            ]
        });
        alert.present();
    };
    DetallePedidoPage.prototype.editarPedido = function () {
        console.log("id = " + this.pedido.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */], { lista: this.pedido.productos, id: this.pedido.id, pedido: this.pedido });
    };
    DetallePedidoPage.prototype.verLista = function () {
        console.log(this.pedido.productos);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__lista_productos_pedido_lista_productos_pedido__["a" /* ListaProductosPedidoPage */], { lista: this.pedido.productos, id: this.pedido.id, pedido: this.pedido });
    };
    DetallePedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-detalle-pedido',template:/*ion-inline-start:"/home/jose/Documentos/B/app/bodega/src/src/pages/detalle-pedido/detalle-pedido.html"*/'<!--\n  Generated template for the DetallePedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detallePedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n  <ion-card>\n    <img style="width: 400px; height: 200px;" src="./../../assets/imgs/cartUser.jpg"/>              \n  </ion-card> \n  <ion-list>\n\n    <!-- NO EDITABLES -->\n    <ion-item>      \n      ID: {{pedido.id}}\n      <hr>\n      NOMBRE: {{pedido.usuario.nombre}}\n      <hr>\n      EMAIL: {{pedido.usuario.email}}\n      <hr>\n      USER_ID: {{pedido.usuario.uid}}\n      <hr>      \n      Departamento: {{pedido.departamento}}\n      <hr>\n      Observaciones: {{pedido.observaciones}}\n      <hr>\n      Barrio: {{pedido.barrio}}\n      <hr>     \n    </ion-item>\n    \n\n    <!-- EDITABLES -->\n    <ion-item>\n        <ion-label>Telefono</ion-label> \n        <ion-input type="text" [(ngModel)]="telefono"></ion-input>          \n    </ion-item>\n\n    <ion-item>\n        <ion-label>Municipio</ion-label> \n        <ion-input type="text" [(ngModel)]="municipio"></ion-input>          \n    </ion-item>  \n\n    <ion-item>\n        <ion-label>Direccion</ion-label> \n        <ion-input type="text" [(ngModel)]="direccion"></ion-input>          \n    </ion-item>\n\n    <ion-item>\n        <ion-label>Total</ion-label> \n        <ion-input type="text" [(ngModel)]="total"></ion-input>          \n    </ion-item> \n\n    <ion-item>\n        <ion-label>ESTADO DEL PEDIDO</ion-label> \n        <ion-input type="text" [(ngModel)]="estadoActual"></ion-input>          \n    </ion-item>\n\n    <ion-item>\n      <ion-label>OBSERVACIONES</ion-label> \n      <ion-input type="text" [(ngModel)]="observaciones"></ion-input>          \n  </ion-item>\n  \n\n    <ion-item>\n      <ion-label style="text-align: center;">LISTA DE PRODUCTOS</ion-label>      \n    </ion-item>    \n    <ion-item>\n      <button ion-button full (click)="verLista()">VER LISTA</button>  \n    </ion-item>\n   \n  </ion-list>\n  <ion-list>\n    <button ion-button full (click)="editar(1)" style="background-color: black" *ngIf="!is_nacional">EDITAR</button>\n   <!--  <button ion-button full (click)="editarPedido()" style="background-color: red">MODIFICAR</button> -->\n    <button ion-button full (click)="editar(2)" style="background-color: black" *ngIf="is_nacional">EDITAR NACIONAL</button>\n    <button ion-button full (click)="volverNacional()" *ngIf="!is_nacional" >VOLVER NACIONAL</button>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/B/app/bodega/src/src/pages/detalle-pedido/detalle-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], DetallePedidoPage);
    return DetallePedidoPage;
}());

//# sourceMappingURL=detalle-pedido.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map