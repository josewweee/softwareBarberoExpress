webpackJsonp([1],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_info__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrito_carrito__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_general_productos_lista_general_productos__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
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
        this.tabListaGeneralProductos = __WEBPACK_IMPORTED_MODULE_3__lista_general_productos_lista_general_productos__["a" /* ListaGeneralProductosPage */];
        this.tabCarrito = __WEBPACK_IMPORTED_MODULE_2__carrito_carrito__["a" /* CarritoPage */];
        this.tabPerfil = __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__["a" /* PerfilPage */];
        this.tabInfo = __WEBPACK_IMPORTED_MODULE_0__info_info__["a" /* InfoPage */];
    }
    TabsHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsHomePage');
    };
    TabsHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-tabs-home',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/tabs-home/tabs-home.html"*/'<ion-tabs color="primary">\n  <ion-tab tabTitle="LISTA" tabIcon="list" [root]="tabListaGeneralProductos"></ion-tab>\n  <ion-tab tabTitle="CARRITO" tabIcon="cart" [root]="tabCarrito" menuClose></ion-tab>\n  <ion-tab tabTitle="PEDIDOS" tabIcon="information-circle" [root]="tabInfo"  ></ion-tab>\n  <ion-tab tabTitle="LOGIN/REGISTRO" tabIcon="contact" [root]="tabPerfil"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/tabs-home/tabs-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */]])
    ], TabsHomePage);
    return TabsHomePage;
}());

//# sourceMappingURL=tabs-home.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(64);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, crud, authService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.authService = authService;
        this.storage = storage;
        this.path = "INFO/diciembre/text";
        this.productos = [];
        this.pedidos = [];
        this.pedidoUsuarioNoRegistrado = [];
        var index_data_usuario_no_registrado;
        this.crud.get(this.path).valueChanges()
            .subscribe(function (textDB) {
            _this.text = textDB;
        });
        this.authService.getStatus().subscribe(function (result) {
            if (result) {
                _this.loggeado = true;
                _this.user = result;
                var path = "/USUARIOS/" + _this.user.uid + "/PEDIDOS/";
                _this.crud.getList(path).valueChanges()
                    .subscribe(function (pedidosDB) {
                    _this.pedidos = pedidosDB;
                    console.log(_this.pedidos);
                });
                /* console.log("Loggeado = " + this.loggeado); */
            }
            else {
                _this.loggeado = false;
                storage.get('idPedido').then(function (val) {
                    var path = "/PEDIDOS/" + val + "/";
                    _this.crud.getList(path).valueChanges()
                        .subscribe(function (pedidosDB) {
                        /*  console.log("Cambios" + pedidosDB); */
                        if (pedidosDB.length < 1) {
                            _this.pedidos = [];
                        }
                        else {
                            _this.pedidos[0] = pedidosDB;
                        }
                        /* console.log(this.pedidos); */
                        //BUSCAMOS EL INDEX DE LA DATA PERSONAL
                        try {
                            for (var i = 0; i < _this.pedidos[0].length; i++) {
                                var arreglo_interno_a_pedidos = _this.pedidos[0][i];
                                if (arreglo_interno_a_pedidos != undefined) {
                                    if (arreglo_interno_a_pedidos.telefono != undefined) {
                                        index_data_usuario_no_registrado = i;
                                    }
                                }
                            }
                            _this.nombre_usuario_no_registrado = _this.pedidos[0][index_data_usuario_no_registrado].nombre;
                            /* console.log(this.nombre_usuario_no_registrado); */
                            _this.total_usuario_no_registrado = _this.pedidos[0][index_data_usuario_no_registrado - 1];
                            /* console.log(this.total_usuario_no_registrado); */
                        }
                        catch (error) {
                            console.log(error);
                        }
                    });
                });
            }
        });
    }
    InfoPage.prototype.verPedido = function (pedido) {
        var text = "";
        var i = 0;
        var index_productos_usuario_no_registrado;
        if (this.loggeado) {
            for (i = 0; i < pedido.productos.length; i++) {
                text += pedido.productos[i].nombre + " x " + pedido.productos[i].cantidad + '\n';
            }
        }
        else {
            //BUSCAMOS EL INDEX DE LOS PRODUCTOS
            try {
                //nos adentramos al arreglo del pedido, para hallar la posicion productos
                for (i = 0; i < this.pedidos[0].length; i++) {
                    var arreglo_interno_a_pedidos = this.pedidos[0][i];
                    if (arreglo_interno_a_pedidos[0] != undefined) {
                        if (arreglo_interno_a_pedidos[0].cantidad != undefined) {
                            index_productos_usuario_no_registrado = i;
                        }
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
            for (i = 0; i < this.pedidos[0][index_productos_usuario_no_registrado].length; i++) {
                text += pedido[index_productos_usuario_no_registrado][i].nombre + " x " + pedido[index_productos_usuario_no_registrado][i].cantidad + '\n';
            }
        }
        alert("Tu pedido:" + '\n' + text);
    };
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/info/info.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-buttons start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>    \n      </ion-buttons>\n      <ion-title>PEDIDOS</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <!-- BOTON FLOTANTE DE WHATSSAPP-->\n<ion-footer>\n    <ion-fab bottom right>\n        <a href="https://wa.me/573508455990?text=Buenos%20dias" button ion-fab color="secondary">\n          <ion-icon name="logo-whatsapp" style="font-size:50px;"></ion-icon>\n        </a>\n    </ion-fab>\n</ion-footer>\n\n  <ion-content padding>\n      <!-- <ion-item>\n          <img src="../../assets/imgs/tarjeta.jpg" class="slide-image"/>\n      </ion-item> -->\n      <ion-item *ngFor="let pedido of pedidos">      \n              <ion-card  class="cards-bg" (click)="verPedido(pedido)">\n            \n                <img src="../../assets/imgs/tarjeta.jpg"/>\n            \n                <ion-card-content>\n                  <ion-card-title padding style="white-space: normal" >\n                    <div *ngIf="loggeado">\n                      {{pedido.usuario.nombre}}\n                    </div>\n                    <div *ngIf="!loggeado">\n                      {{nombre_usuario_no_registrado}}\n                    </div>\n                  </ion-card-title>\n                  <p padding style="white-space: normal" *ngIf="loggeado">\n                      {{pedido.direccion}}\n                  </p>\n                  <p padding style="white-space: normal" *ngIf="!loggeado">\n                    {{pedido[2]}}\n                </p>\n                </ion-card-content>\n            \n                <ion-row no-padding>\n                  <ion-col>\n                    <button ion-button clear small color="danger" icon-start  *ngIf="loggeado">\n                        <ion-icon name="cash"></ion-icon>\n                      {{pedido.total}}\n                    </button>\n                    <button ion-button clear small color="danger" icon-start  *ngIf="!loggeado">\n                      <ion-icon name="cash"></ion-icon>\n                    {{total_usuario_no_registrado}}\n                  </button>\n                  </ion-col>\n                  <!-- <ion-col text-right>\n                    <button ion-button clear small color="danger" icon-start  *ngIf="loggeado">\n                        <ion-icon name="clock"></ion-icon>\n                      {{pedido.estado}}\n                    </button>\n                    <button ion-button clear small color="danger" icon-start *ngIf="!loggeado">\n                      <ion-icon name="clock"></ion-icon>\n                    {{pedido[3]}}\n                  </button>\n                  </ion-col> -->\n                </ion-row>\n            \n              </ion-card>\n      </ion-item>\n  </ion-content>\n  \n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sing_up_sing_up__ = __webpack_require__(342);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, authService, toastCtrl, crud, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.crud = crud;
        this.modalCtrl = modalCtrl;
        this.operation = 'login';
        this.pathUsuarios = '/USUARIOS/';
        this.authService.getStatus().subscribe(function (result) {
            if (result) {
                _this.viewCtrl.dismiss();
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.regis = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__sing_up_sing_up__["a" /* SingUpPage */]);
        modal.present();
    };
    LoginPage.prototype.loginWithEmail = function () {
        var _this = this;
        this.authService.loginWithEmail(this.email, this.password).then(function (data) {
            console.log(data);
            var toast = _this.toastCtrl.create({
                message: 'Bienvenido',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            // this.navCtrl.setRoot(ListaGeneralProductosPage);      
        }).catch(function (error) {
            alert('Asegurate de que pusiste bien los datos');
            console.log(error);
        });
    };
    // loginFacebook() {
    //   this.authService.loginWithFacebook().then( (response)=> {
    //     alert('Loggeado con Facebook con éxito, bienvenido a Barbero Express.');
    //     this.viewCtrl.dismiss();      
    //     localStorage.setItem('loginData', JSON.stringify(response))
    //   });
    // }
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        return new Promise(function (resolve, rejevt) {
            _this.authService.loginWithGoogle()
                .then(function (response) {
                _this.viewCtrl.dismiss();
                alert('Loggeado con Google con éxito, bienvenido a Barbero Express.');
                localStorage.setItem('loginData', JSON.stringify(response));
                // var papi = localStorage.getItem('loginData')      
                // var papus = JSON.parse(papi);               
                resolve(response);
            }, function (err) { return rejevt(err); });
        });
    };
    LoginPage.prototype.registerWithEmail = function () {
        var _this = this;
        if (this.password.length < 3) {
            alert('La contraseña debe contener más de 3 caracteres.');
            return;
        }
        if (this.email.length < 3) {
            alert('Debes de poner un correo valido.');
            return;
        }
        return new Promise(function (resolve, rejevt) {
            _this.authService.registerWithEmail(_this.email, _this.password)
                .then(function (res) {
                resolve(res);
                var user = {
                    email: _this.email,
                    uid: res.user.uid,
                    emailVerified: res.user.emailVerified,
                    creationTime: res.user.metadata.creationTime,
                    lastSingInTime: res.user.metadata.lastSignInTime
                };
                console.log(res.user.uid);
                _this.pathUsuarios += res.user.uid;
                _this.crud.create(_this.pathUsuarios, user);
                _this.loginWithEmail();
            }, function (err) { return rejevt(err); });
        });
    };
    LoginPage.prototype.cancelar = function () {
        console.log('Entró');
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/login/login.html"*/'\n<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Login/Registro</ion-title>  \n    <ion-buttons start>\n        <button menuToggle>\n            <ion-icon name="close" color="primary" (click)="cancelar()"></ion-icon>\n        </button>\n    </ion-buttons>  \n  </ion-toolbar>  \n</ion-header>\n<ion-content>    \n   <!--  <img src="../../assets/imgs/tarjeta.jpg" class="slide-image"/>   -->  \n    <ion-list padding>\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating >Contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      <a padding href="https://docs.google.com/document/d/1rk0Ft5SqRf7JsSpf4UVtTxITgL2P7N2ShAke9WieqRI/edit#">VER POLÍTICA DE PRIVACIDAD</a>\n      <hr>\n      <a padding href="https://docs.google.com/document/d/156_bmoPZ3u0pyPeF3-ptuUrrrNkXkXNmB-bAZZWxcgg/edit#heading=h.h10pw64smgv2">VER TÉRMINOS Y CONDICIONES</a>\n      <hr>       \n    </ion-list>\n    <ion-list>\n      <button style="display: block; margin:auto;" ion-button color="primary" (click)="loginWithEmail()">Iniciar Sesión</button>\n      <button style="display: block; margin:auto;top: 10px;" ion-button color="primary" (click)="registerWithEmail()">Registrarse</button>\n    </ion-list>\n      <img src="../../assets/imgs/tarjeta.jpg" class="slide-image"/>\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__["a" /* crudDB */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__check_out_check_out__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_producto_detalle_producto__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(64);
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
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarritoPage = /** @class */ (function () {
    function CarritoPage(navCtrl, navParams, crud, authService, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.productos = [];
        this.estadito = false;
        this.productos_usuario_no_registrado = [];
        this.authService.getStatus().subscribe(function (result) {
            if (result) {
                _this.estadito = true;
                _this.user = result;
                var path = "/USUARIOS/" + _this.user.uid + "/CARRITO/";
                _this.crud.getList(path).valueChanges()
                    .subscribe(function (productosDB) {
                    _this.productos = productosDB;
                    if (_this.productos.length > 0) {
                        _this.total = _this.productos.map(_this.precio).reduce(_this.sum);
                    }
                });
            }
            else {
                //this.user = navParams.get('user');
                _this.user = null;
                storage.get('usuario').then(function (val) {
                    var path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + val + "/CARRITO/";
                    _this.userTemp = val;
                    _this.crud.getList(path).valueChanges()
                        .subscribe(function (productosDB) {
                        _this.productos = productosDB;
                        if (_this.productos.length > 0) {
                            _this.total = _this.productos.map(_this.precio).reduce(_this.sum);
                        }
                    });
                });
            }
        });
    }
    CarritoPage.prototype.precio = function (item) {
        return parseInt(item.subtotal);
    };
    CarritoPage.prototype.sum = function (prev, next) {
        return parseInt(prev) + parseInt(next);
    };
    CarritoPage.prototype.add = function (a, b) {
        return a + b;
    };
    CarritoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarritoPage');
    };
    CarritoPage.prototype.borrarDelCarrito = function (producto) {
        if (this.user != null) {
            //console.log("hola?");
            var path = "/USUARIOS/" + this.user.uid + "/CARRITO/" + producto.id;
            this.total = 0;
            this.crud.delete(path);
        }
        else {
            var path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/CARRITO/" + producto.id;
            this.total = 0;
            this.crud.delete(path);
        }
    };
    CarritoPage.prototype.vaciarCarrito = function () {
        this.total = 0;
        if (this.user != null) {
            var path = "/USUARIOS/" + this.user.uid + "/CARRITO/";
            this.crud.delete(path);
        }
        else {
            var path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/CARRITO/";
            this.crud.delete(path);
        }
    };
    CarritoPage.prototype.irAVistaDeDetalleProducto = function (producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalle_producto_detalle_producto__["a" /* DetalleProductoPage */], { producto: producto });
    };
    CarritoPage.prototype.irCheckOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__check_out_check_out__["a" /* CheckOutPage */], { user: this.user });
    };
    CarritoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-carrito',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/carrito/carrito.html"*/'<!--\n  Generated template for the CarritoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>    \n    </ion-buttons>\n    <ion-title>CARRITO</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- BOTON FLOTANTE DE WHATSSAPP-->\n<ion-footer>\n    <ion-fab bottom right>\n        <a href="https://wa.me/573508455990?text=Buenos%20dias" button ion-fab color="secondary">\n          <ion-icon name="logo-whatsapp" style="font-size:50px;"></ion-icon>\n        </a>\n    </ion-fab>\n</ion-footer>\n\n<ion-content >\n  <img  src="../../assets/imgs/1024IMAGE.png"/>\n  <ion-list >\n    <!-- <ion-item-sliding *ngFor="let producto of productos"> -->\n      <ion-item *ngFor="let producto of productos">          \n        <ion-avatar item-start>\n          <img style="width: 100px; height: 100px;" src="{{producto.foto}}"/>                          \n        </ion-avatar> \n        <h1 style="text-transform: capitalize;">{{producto.nombre}}</h1>      \n        <h3 style="text-transform: capitalize;">Marca: {{producto.marca}}</h3>\n        <h3>Precio: ${{producto.precio | number: \'1.0-0\'}}</h3>\n        <h3>Tipo: {{producto.tipo}}</h3>  \n        <h3>Cantidad: {{producto.cantidad}}</h3>\n        <br>\n        <h2>Total: {{producto.cantidad * producto.precio | number: \'1.0-0\'}}</h2>        \n        <button ion-button (click)="borrarDelCarrito(producto)">\n          Borrar\n        </button>        \n        \n      </ion-item>      \n      <ion-item-options side="right">\n        <button ion-button color="danger">\n          <ion-icon name="trash"></ion-icon>\n          Borrar\n        </button>\n      </ion-item-options>\n      \n  </ion-list>\n  <ion-list>\n    <ion-item-divider>\n        <h1>Subtotal: ${{total | number: \'1.0-0\'}}</h1>\n    </ion-item-divider>        \n  </ion-list>\n  <ion-list padding>\n      <p>¡RECUERDA QUE SOLO PAGAS CUANDO RECIBAS EL PRODUCTO!</p>\n      <p>LOS ENVIOS LUEGO DE LAS 11AM, LLEGAN AL OTRO DIA.</p>\n      <button ion-button icon-start (click)="irCheckOut()">\n          <ion-icon name="checkmark"></ion-icon>\n          Confirmar Datos Envío\n        </button>      \n\n        <button ion-button icon-end (click)="vaciarCarrito()" >\n          Vaciar carrito\n          <ion-icon name="trash"></ion-icon>\n        </button>\n    <!-- </ion-item-sliding> -->\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/carrito/carrito.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], CarritoPage);
    return CarritoPage;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(64);
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
 * Generated class for the DetalleProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleProductoPage = /** @class */ (function () {
    function DetalleProductoPage(navCtrl, navParams, crud, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.producto = {};
        this.producto = navParams.get('producto') || {};
        this.user = navParams.get('user');
        if (this.user != null) {
            console.log("enhora buena");
        }
        else {
            storage.get('usuario').then(function (val) {
                _this.userTemp = val;
            });
        }
    }
    DetalleProductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleProductoPage');
    };
    DetalleProductoPage.prototype.agregarAlCarrito = function (productoEntrante) {
        if (productoEntrante.cantidad < 1 || productoEntrante.cantidad == null) {
            alert("Parcero, recuerda escribir la cantidad que quieres del producto, justo al lado del botón AGREGAR AL CARRITO. Gracias y bienvenido!!!");
        }
        else {
            if (this.user != null) {
                this.path = "/USUARIOS/" + this.user.uid + "/CARRITO/" + productoEntrante.id;
                var productoFinal = {
                    nombre: productoEntrante.nombre,
                    marca: productoEntrante.marca,
                    precio: productoEntrante.precio,
                    tipo: productoEntrante.tipo,
                    foto: productoEntrante.foto,
                    id: productoEntrante.id,
                    cantidad: productoEntrante.cantidad,
                    subtotal: parseInt(productoEntrante.cantidad) * parseInt(productoEntrante.precio)
                };
                this.crud.create(this.path, productoFinal);
                var toast = this.toastCtrl.create({
                    message: productoFinal.cantidad + " " + (productoFinal.nombre + " ") + "agregados al carrito correctamente",
                    duration: 3000,
                    position: 'top'
                });
                this.navCtrl.pop();
                toast.present();
            }
            else {
                this.path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/CARRITO/" + productoEntrante.id;
                var productoFinal = {
                    nombre: productoEntrante.nombre,
                    marca: productoEntrante.marca,
                    precio: productoEntrante.precio,
                    tipo: productoEntrante.tipo,
                    foto: productoEntrante.foto,
                    id: productoEntrante.id,
                    cantidad: productoEntrante.cantidad,
                    subtotal: parseInt(productoEntrante.cantidad) * parseInt(productoEntrante.precio)
                };
                this.crud.create(this.path, productoFinal);
                var toast = this.toastCtrl.create({
                    message: productoFinal.cantidad + " " + (productoFinal.nombre + " ") + "agregados al carrito correctamente",
                    duration: 3000,
                    position: 'top'
                });
                this.navCtrl.pop();
                toast.present();
            }
        }
    };
    DetalleProductoPage.prototype.restar = function (producto) {
        if (producto.cantidad < 0 || producto.cantidad == null) {
            producto.cantidad = 1;
        }
        else {
            producto.cantidad -= 1;
        }
    };
    DetalleProductoPage.prototype.sumar = function (producto) {
        if (producto.cantidad < 0 || producto.cantidad == null) {
            producto.cantidad = 1;
        }
        else {
            producto.cantidad += 1;
        }
    };
    DetalleProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detalle-producto',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/detalle-producto/detalle-producto.html"*/'<!--\n  Generated template for the DetalleProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title padding style="text-transform: uppercase;">{{producto.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- BOTON FLOTANTE DE WHATSSAPP-->\n<ion-footer>\n    <ion-fab bottom right>\n        <a href="https://wa.me/573508455990?text=Buenos%20dias" button ion-fab color="secondary">\n          <ion-icon name="logo-whatsapp" style="font-size:50px;"></ion-icon>\n        </a>\n    </ion-fab>\n</ion-footer>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-card>\n          <img src="{{producto.foto}}" />          \n        </ion-card>\n      </ion-item>\n      <ion-item>\n        <h2>Precio: ${{producto.precio | number: \'1.0-0\'}}</h2>\n      </ion-item>\n      <ion-item>\n        <h2 style="text-transform: capitalize">Marca: {{producto.marca}}</h2>\n      </ion-item>\n      <ion-item>\n        <h2 style="text-transform: capitalize">Tipo: {{producto.tipo}}</h2>\n      </ion-item>\n      \n        <h2 *ngIf="producto.descripcion != \'null\'">Descripción</h2>\n        <p *ngIf="producto.descripcion != \'null\'">\n          {{producto.descripcion}}\n        </p>\n      \n    </ion-list>  \n    <ion-item text-center>\n        <!-- <ion-input type="number" placeholder="cantidad" pattern="[0-9]{16}" [(ngModel)]="producto.cantidad"></ion-input> -->\n        <p>\n          <button style="width: 30px;" ion-button color="light" icon-only (click)="restar(producto)">\n            <ion-icon name=\'remove\'></ion-icon>\n          </button>\n  \n  \n          <button style="width: 30px;" ion-button color="light" icon-only>\n            {{producto.cantidad}}\n          </button>\n  \n  \n          <button style="width: 30px;" ion-button color="light" icon-only (click)="sumar(producto)">\n            <ion-icon name=\'add\'></ion-icon>\n          </button>\n        </p>\n  \n  \n  \n  \n        <button style="height: 40px;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n          AGREGAR AL CARRITO\n        </button>\n      </ion-item>  \n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/detalle-producto/detalle-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DetalleProductoPage);
    return DetalleProductoPage;
}());

//# sourceMappingURL=detalle-producto.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-user/edit-user.module": [
		624,
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
webpackAsyncContext.id = 276;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(201);
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(crud, toastCtrl, navCtrl, navParams, modalCtrl, authService, crudDB, alertCtrl) {
        var _this = this;
        this.crud = crud;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.crudDB = crudDB;
        this.alertCtrl = alertCtrl;
        this.uid = "";
        this.email = "";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.authService.getStatus().subscribe(function (result) {
            if (result) {
                console.log("Usuario conectado en lista de productos");
                console.log(result);
                console.log(result.uid);
                var path = "/USUARIOS/" + result.uid;
                _this.crud.get(path).valueChanges().subscribe(function (user) {
                    _this.user = user;
                    _this.uid = _this.user.uid;
                    _this.email = _this.user.email;
                    console.log(_this.user);
                    // modal.dismiss();       
                    // this.nav.setRoot(ListaGeneralProductosPage, { user: this.user});
                });
                _this.estadito = true;
            }
            else {
                _this.estadito = false;
            }
            // else{          
            //   this.estadito = false;
            //   console.log("El usuario no se encuentra conectado.")
            //   console.log(result);
            //   // Open loginPage view   
            //   let modal = this.modalCtrl.create(LoginPage);     
            //   modal.present();                       
            // }              
        });
    }
    PerfilPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Descuento Barberos',
            message: "Bienvenidos parceros, esta es una forma de agradecer su constancia.",
            inputs: [
                {
                    name: 'descuento',
                    placeholder: 'Introduce el descuento'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        console.log(data.descuento);
                        var idDescuento = Date.now();
                        var path = "/USUARIOS/" + _this.user.uid + "/PROMOCIONES/" + idDescuento;
                        var descuentoFinal = {
                            id: idDescuento,
                            codigo: data.descuento,
                        };
                        _this.crud.create(path, descuentoFinal);
                        var toast = _this.toastCtrl.create({
                            message: "C\u00F3digo " + data.descuento + " " + " agregado con \u00E9xito.",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.logOut = function () {
        this.estadito = false;
        this.authService.logout();
    };
    PerfilPage.prototype.registro = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        modal.present();
        console.log("hola");
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/perfil/perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>    \n    </ion-buttons>\n    <ion-title>PERFIL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- BOTON FLOTANTE DE WHATSSAPP-->\n<ion-footer>\n    <ion-fab bottom right>\n        <a href="https://wa.me/573508455990?text=Buenos%20dias" button ion-fab color="secondary">\n          <ion-icon name="logo-whatsapp" style="font-size:50px;"></ion-icon>\n        </a>\n    </ion-fab>\n</ion-footer>\n\n<ion-content padding>\n    <ion-item>\n        <img src="../../assets/imgs/tarjeta.jpg" class="slide-image"/>\n    </ion-item>\n      <button style="display: block; margin:auto;" ion-button color="primary" (click)="registro()">Registrarse/Iniciar sesión</button>\n      <button style="display: block; margin:auto;top: 20px" ion-button color="primary" (click)="logOut()" *ngIf="estadito == true">Cerrar Sesión</button>\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(50);
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
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SingUpPage = /** @class */ (function () {
    function SingUpPage(navCtrl, navParams, authService, crud, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.crud = crud;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.operation = 'login';
        this.pathUsuarios = '/USUARIOS/';
    }
    SingUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingUpPage');
    };
    SingUpPage.prototype.registerWithEmail = function () {
        var _this = this;
        if (this.password !== this.password2) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        if (this.password.length < 6) {
            alert('La contraseña debe contener más de 6 caracteres.');
            return;
        }
        return new Promise(function (resolve, rejevt) {
            _this.authService.registerWithEmail(_this.email, _this.password)
                .then(function (res) {
                resolve(res);
                var user = {
                    email: _this.email,
                    uid: res.user.uid,
                    telefono: _this.telefono,
                    emailVerified: res.user.emailVerified,
                    creationTime: res.user.metadata.creationTime,
                    lastSingInTime: res.user.metadata.lastSignInTime
                };
                console.log(res.user.uid);
                _this.pathUsuarios += res.user.uid;
                _this.crud.create(_this.pathUsuarios, user);
                _this.loginWithEmail();
            }, function (err) { return rejevt(err); });
        });
    };
    SingUpPage.prototype.loginWithEmail = function () {
        var _this = this;
        this.authService.loginWithEmail(this.email, this.password).then(function (data) {
            console.log(data);
            var toast = _this.toastCtrl.create({
                message: 'Bienvenido',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            _this.viewCtrl.dismiss();
        }).catch(function (error) {
            alert('Ocurrió un error');
            console.log(error);
        });
    };
    SingUpPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SingUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-sing-up',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/sing-up/sing-up.html"*/'<!--\n  Generated template for the SingUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="primary">\n      <ion-title>Registro</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="cancel()">\n          <span color="primary">Cancelar</span>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>  \n  </ion-header>\n\n\n<ion-content>    \n        <img src="../../assets/imgs/tarjeta.jpg" class="slide-image"/>\n    \n    <ion-list padding>\n\n        <ion-item>\n          <ion-label floating>Email @</ion-label>\n          <ion-input type="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Teléfono</ion-label>\n          <ion-input type="number" [(ngModel)]="telefono"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating >Contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Repita Contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="password2"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n      <a padding href="https://docs.google.com/document/d/1rk0Ft5SqRf7JsSpf4UVtTxITgL2P7N2ShAke9WieqRI/edit#">VER POLÍTICA DE PRIVACIDAD</a>\n      <hr>\n      <a padding href="https://docs.google.com/document/d/156_bmoPZ3u0pyPeF3-ptuUrrrNkXkXNmB-bAZZWxcgg/edit#heading=h.h10pw64smgv2">VER TÉRMINOS Y CONDICIONES</a>\n      <hr>\n      <button style="display: block; margin:auto;" ion-button color="primary" (click)="registerWithEmail()">Confirmar Registro y Aceptar Terminos y Políticas</button>\n      <button style="display: block; margin:auto; top: 20px;" ion-button color="primary" (click)="cancel()">Cancelar</button>\n      <!-- <button ion-button color="primary" (click)="loginGoogle()">Google</button>   -->\n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/sing-up/sing-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */]])
    ], SingUpPage);
    return SingUpPage;
}());

//# sourceMappingURL=sing-up.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_home_tabs_home__ = __webpack_require__(142);
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
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckOutPage = /** @class */ (function () {
    function CheckOutPage(app, toastCtrl, crud, navCtrl, navParams, alertCtrl, storage) {
        var _this = this;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.crud = crud;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.productos = [];
        this.user = navParams.get('user');
        if (this.user != null) {
            var pathUsuario = "/USUARIOS/" + this.user.uid;
            this.crud.get(pathUsuario).valueChanges()
                .subscribe(function (object) {
                _this.datosUbicacion = object;
                console.log(_this.productos);
                try {
                    _this.datosUbicacion.nombre ? _this.nombre = _this.datosUbicacion.nombre : _this.nombre = "";
                    _this.datosUbicacion.telefono ? _this.telefono = _this.datosUbicacion.telefono : _this.telefono = "";
                    _this.datosUbicacion.direccion ? _this.direccion = _this.datosUbicacion.direccion : _this.direccion = "";
                    _this.datosUbicacion.departamento ? _this.departamento = _this.datosUbicacion.departamento : _this.departamento = "";
                    _this.datosUbicacion.municipio ? _this.municipio = _this.datosUbicacion.municipio : _this.municipio = "";
                    _this.datosUbicacion.barrio ? _this.barrio = _this.datosUbicacion.barrio : _this.barrio = "";
                    //this.nombre = this.datosUbicacion.nombre;
                }
                catch (error) {
                    console.log(error);
                }
                /*          try {
                           this.telefono = this.datosUbicacion.telefono;
                         } catch (error) {
                           this.telefono = "";
                         }
                         try {
                           this.direccion = this.datosUbicacion.direccion;
                         } catch (error) {
                           this.direccion = "";
                         }
                         try {
                           this.departamento = this.datosUbicacion.departamento;
                         } catch (error) {
                           this.departamento = "";
                         }
                         try {
                           this.municipio = this.datosUbicacion.municipio;
                         } catch (error) {
                           this.municipio = "";
                         }
                         try {
                           this.barrio = this.datosUbicacion.barrio;
                         } catch (error) {
                           this.barrio = "";
                         } */
            });
            var path = "/USUARIOS/" + this.user.uid + "/CARRITO/";
            this.crud.getList(path).valueChanges()
                .subscribe(function (productosDB) {
                _this.productos = productosDB;
                console.log(_this.productos);
                if (_this.productos.length > 0) {
                    _this.total = _this.productos.map(_this.precio).reduce(_this.sum);
                }
            });
        }
        else {
            this.user = navParams.get('user');
            storage.get('usuario').then(function (val) {
                var path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + val + "/CARRITO/";
                _this.userTemp = val;
                _this.crud.getList(path).valueChanges()
                    .subscribe(function (productosDB) {
                    _this.productos = productosDB;
                    if (_this.productos.length > 0) {
                        _this.total = _this.productos.map(_this.precio).reduce(_this.sum);
                    }
                });
            });
        }
    }
    CheckOutPage.prototype.precio = function (item) {
        return parseInt(item.subtotal);
    };
    CheckOutPage.prototype.sum = function (prev, next) {
        return parseInt(prev) + parseInt(next);
    };
    CheckOutPage.prototype.add = function (a, b) {
        return a + b;
    };
    CheckOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckOutPage');
    };
    CheckOutPage.prototype.sumaTotal = function (subtotal, envio) {
        return subtotal + envio;
    };
    CheckOutPage.prototype.confirmar = function () {
        var _this = this;
        var idPedido = Date.now();
        var pathPedidos = "/PEDIDOS/" + idPedido;
        var monto_total = this.total;
        if (idPedido == null || this.telefono == null || this.departamento == null || this.municipio == null || this.direccion == null || this.productos == null || this.total == null || this.barrio == null || this.observaciones == null) {
            alert("Debes escribir todos los datos para poder realizar el envío correctamente, en caso de que no apliquen, deber poner NO APLICA, gracias y disculpa las molestias.");
            return;
        }
        if (this.telefono.length < 10) {
            alert("Revisa que el numero este bien escrito o agrega 034 antes de tu numero, si es un telefono fijo");
            return;
        }
        switch (this.municipio.replace(" ", "").toUpperCase()) {
            case "MEDELLIN":
                monto_total = this.total + 4500;
                break;
            case "MEDELLÍN":
                monto_total = this.total + 4500;
                break;
            case "MED":
                monto_total = this.total + 4500;
                break;
            case "MEDÉLLIN":
                monto_total = this.total + 4500;
                break;
            case "MÉDELLIN":
                monto_total = this.total + 4500;
                break;
            default:
                monto_total = this.total + 6500;
                break;
        }
        if (this.user != null) {
            var pedido = {
                id: idPedido,
                usuario: {
                    uid: this.user.uid,
                    nombre: this.nombre,
                    email: this.user.email,
                    telefono: this.telefono
                },
                departamento: this.departamento,
                municipio: this.municipio,
                barrio: this.barrio,
                direccion: this.direccion,
                observaciones: this.observaciones,
                productos: this.productos,
                total: monto_total,
                estado: "Procesando"
            };
            var path = "/USUARIOS/" + this.user.uid + "/PEDIDOS/" + idPedido;
            this.crud.create(path, pedido);
            this.crud.create(pathPedidos, pedido);
            var pathUser = "/USUARIOS/" + this.user.uid + "/nombre";
            this.crud.create(pathUser, this.nombre);
            var pathUser2 = "/USUARIOS/" + this.user.uid + "/telefono";
            this.crud.create(pathUser2, this.telefono);
            var pathUser3 = "/USUARIOS/" + this.user.uid + "/direccion";
            this.crud.create(pathUser3, this.direccion);
            var pathUserDep = "/USUARIOS/" + this.user.uid + "/departamento";
            this.crud.create(pathUserDep, this.departamento);
            var pathUserMuni = "/USUARIOS/" + this.user.uid + "/municipio";
            this.crud.create(pathUserMuni, this.municipio);
            var pathUserBarrio = "/USUARIOS/" + this.user.uid + "/barrio";
            this.crud.create(pathUserBarrio, this.barrio);
            var pathCarrito = "/USUARIOS/" + this.user.uid + "/CARRITO/";
            this.crud.delete(pathCarrito);
            var toast = this.toastCtrl.create({
                message: "El pedido # " + idPedido + " se ha procesado exitosamente, en las pr\u00F3ximas horas uno de nuestros colaboradores te contactar\u00E1 para confirmar el horario de entrega, gracias por tu compra.",
                duration: 9000,
                position: 'middle'
            });
            toast.present();
            console.log('Saved clicked');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */]);
        }
        else {
            var pedido = {
                id: idPedido,
                usuario: {
                    uid: this.userTemp,
                    nombre: this.nombre,
                    email: "USUARIO NO REGISTRADO",
                    telefono: this.telefono
                },
                departamento: this.departamento,
                municipio: this.municipio,
                barrio: this.barrio,
                direccion: this.direccion,
                observaciones: this.observaciones,
                productos: this.productos,
                total: monto_total,
                estado: "Procesando"
            };
            var path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/PEDIDOS/" + idPedido;
            this.crud.create(path, pedido);
            this.crud.create(pathPedidos, pedido);
            var pathUser = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/nombre";
            this.crud.create(pathUser, this.nombre);
            var pathUser2 = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/telefono";
            this.crud.create(pathUser2, this.telefono);
            var pathUser3 = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/direccion";
            this.crud.create(pathUser3, this.direccion);
            var pathCarrito = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + this.userTemp + "/CARRITO/";
            this.crud.delete(pathCarrito);
            this.storage.set("idPedido", idPedido);
            var toast = this.toastCtrl.create({
                message: "El pedido # " + idPedido + " se ha procesado exitosamente, en las pr\u00F3ximas horas uno de nuestros colaboradores te contactar\u00E1 para confirmar el horario de entrega, gracias por tu compra.",
                duration: 9000,
                position: 'middle'
            });
            toast.present();
        }
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_home_tabs_home__["a" /* TabsHomePage */]);
        setTimeout(function () {
            _this.app.getRootNav().getActiveChildNav().select(2);
        }, 1000);
        //this.navCtrl.pop();
        //this.navCtrl.setRoot(InfoPage);
        //this.app.getRootNav().setRoot(InfoPage);
        /*  this.nav.parent.select(3);
         this.navCtrl.pop();
         
         //this.navCtrl.pop(); */
    };
    CheckOutPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CheckOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-check-out',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/check-out/check-out.html"*/'<!--\n  Generated template for the CheckOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>CONFIRMAR PEDIDO</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n    <img  src="../../assets/imgs/tarjeta.jpg"/>  \n    <ion-list>  \n      <ion-item>\n        <ion-label floating>Nombre y Apellido</ion-label>      \n        <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n      </ion-item>  \n\n      <ion-item>\n        <ion-label floating>Teléfono celular</ion-label>      \n        <ion-input type="number" [(ngModel)]="telefono"></ion-input>\n      </ion-item> \n    \n    <ion-item>\n        <ion-label floating>Departamento</ion-label>      \n        <ion-input type="text" [(ngModel)]="departamento"></ion-input>\n    </ion-item> \n\n    <ion-item>\n      <ion-label floating>Municipio</ion-label>      \n      <ion-input type="text" [(ngModel)]="municipio"></ion-input>\n    </ion-item>     \n    \n    <ion-item>\n      <ion-label floating>Barrio</ion-label>      \n      <ion-input type="text" [(ngModel)]="barrio"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Dirección</ion-label>      \n      <ion-input type="text" [(ngModel)]="direccion"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Apartamento/Numero de casa/local/Nombre Barbería</ion-label>      \n      <ion-input type="text" [(ngModel)]="observaciones" ></ion-input>\n    </ion-item>    \n  \n    \n  \n    \n  </ion-list>\n  <ion-list>\n    <ion-item-divider> \n        <h2 padding style="white-space: normal">PEDIDOS DESPUES DE LAS 11:30AM\n            LLEGAN AL OTRO DIA.\n        </h2>\n        <h2 padding>Subtotal: ${{total | number: \'1.0-0\'}}</h2>\n        <h2 padding>Envío Medellín: $4,500</h2>\n        <h2 padding style="white-space: normal">Envíos al resto del país Desde: $7,000\n        (Varia segun el peso)\n        </h2>      \n      <br>\n      <!-- <h1>TOTAL: {{total + 4500 | number: \'1.0-0\'}}</h1> -->\n    </ion-item-divider>                  \n  </ion-list>\n  <ion-list padding>\n      <p>PEDIDOS DESPUES DE LAS 11:30AM, LLEGAN AL OTRO DIA.</p>\n      <p>¡RECUERDA QUE SOLO PAGAS CUANDO RECIBAS EL PRODUCTO!</p>\n    <button ion-button icon-start (click)="confirmar()">\n      <ion-icon name="checkmark"></ion-icon>\n      Confirmar y aceptar T&C\n    </button>  \n      <button ion-button icon-end (click)="goBack()">\n        Cancelar\n        <ion-icon name="trash"></ion-icon>\n      </button>\n     \n  </ion-list>\n  <p padding>Al confirmar estas aceptando nuestros terminos y condiciones</p>\n  <a padding href="https://docs.google.com/document/d/1rk0Ft5SqRf7JsSpf4UVtTxITgL2P7N2ShAke9WieqRI/edit#">VER POLÍTICA DE PRIVACIDAD</a>\n  <hr>\n  <a padding href="https://docs.google.com/document/d/156_bmoPZ3u0pyPeF3-ptuUrrrNkXkXNmB-bAZZWxcgg/edit#heading=h.h10pw64smgv2">VER TÉRMINOS Y CONDICIONES</a>\n  <hr>   \n</ion-content>\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/check-out/check-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CheckOutPage);
    return CheckOutPage;
}());

//# sourceMappingURL=check-out.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaGeneralProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_producto_detalle_producto__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(64);
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
 * Generated class for the ListaGeneralProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaGeneralProductosPage = /** @class */ (function () {
    function ListaGeneralProductosPage(navCtrl, navParams, crud, modalCtrl, authService, crudDB, toastCtrl, myAppInit, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.crud = crud;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.crudDB = crudDB;
        this.toastCtrl = toastCtrl;
        this.myAppInit = myAppInit;
        this.storage = storage;
        this.productos = [];
        this.pathProductos = "/PRODUCTOS/";
        this.estadito = false;
        this.tipos = [];
        this.filtered = [];
        this.ListaCortaTipos = [];
        this.items = [];
        this.usuario_no_registrado = [];
        // this.user = this.navParams.get('user'); 
        this.is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
        console.log("mobile =  " + this.is_mobile);
        this.crud.getList(this.pathProductos).valueChanges()
            .subscribe(function (productosDB) {
            _this.productos = productosDB;
            for (var i = 0; i < _this.productos.length; i++) {
                if (_this.productos[i].cantidad == null) {
                    _this.productos[i].cantidad = 1;
                }
            }
            _this.items = _this.productos.slice(0, 20);
        });
        var pathTipos = "/TIPOS/";
        this.crud.getList(pathTipos).valueChanges()
            .subscribe(function (tiposDB) {
            _this.tipos = tiposDB;
            _this.filtered = _this.tipos.filter(function (el) {
                return el.text.toLowerCase() != "productos estrella";
            });
            //BUSCAMOS LOS PRODUCTOS ESTRELLA Y LOS UBICAMOS DE PRIMEROS
            var b;
            var tipoEncontrado = false;
            for (b = 0; tipoEncontrado == false && b < _this.tipos.length; b++) {
                if (_this.tipos[b].text.toLowerCase() == "productos estrella") {
                    tipoEncontrado = true;
                    b--;
                }
            }
            var temp = _this.tipos[0];
            _this.tipos[0] = _this.tipos[b];
            _this.tipos[b] = temp;
            //BUSCAMOS LOS TONICOS Y LOS UBICAMOS DE TERCEROS
            var c;
            tipoEncontrado = false;
            for (c = 0; tipoEncontrado == false && c < _this.tipos.length; c++) {
                if (_this.tipos[c].text.toLowerCase() == "tonicos") {
                    tipoEncontrado = true;
                    c--;
                }
            }
            var temp2 = _this.tipos[2];
            _this.tipos[2] = _this.tipos[c];
            _this.tipos[c] = temp2;
            //LISTA DE PRODUCTOS QUE SE VERAN EN LA PANTALLA (AUMENTA GRADUALMENTE)
            _this.ListaCortaTipos = _this.tipos.slice(0, 3);
        });
        // Authentication status
        this.authService.getStatus().subscribe(function (result) {
            if (result) {
                var path = "/USUARIOS/" + result.uid;
                _this.crud.get(path).valueChanges().subscribe(function (user) {
                    _this.user = user;
                });
                _this.estadito = true;
            }
            else {
                _this.user = null;
                storage.get('usuario').then(function (val) {
                    var max = 9999999999999999;
                    var min = 0;
                    var random = "USERNUMBER" + Math.floor(Math.random() * (max - min + 1) + min).toString();
                    var key;
                    try {
                        key = val.toString().substring(0, 10);
                        console.log(key);
                    }
                    catch (error) {
                        key = 12345678901234567890;
                    }
                    if (key == "USERNUMBER") {
                        console.log("VAL = " + val);
                        console.log("usuario ya registrado");
                    }
                    else {
                        val = random;
                    }
                    var path = "/INFO/" + "TEMPORALES/USUARIOS/" + val;
                    _this.crud.create(path, val);
                    storage.set("usuario", val);
                });
            }
        });
    }
    ListaGeneralProductosPage.prototype.VolverNumerico = function (producto) {
        if (producto.recomendado != "") {
            producto.recomendado = Number(producto.recomendado);
            if (producto.recomendado >= 90) {
                return producto;
            }
        }
        return;
    };
    //PONEMOS LOS DATOS DE CADA TIPO EN LA LISTA
    ListaGeneralProductosPage.prototype.filterItemsOfType = function (type) {
        if (type.toLowerCase() == 'productos estrella') {
            var productos_en_enteros = this.productos.map(this.VolverNumerico);
            var productos_enteros_sin_null = productos_en_enteros.filter(function (x) { return x != undefined; });
            var productos_ordenados = productos_enteros_sin_null.sort(function (a, b) { return b.recomendado - a.recomendado; });
            return productos_ordenados;
        }
        //ELIMINAMOS LOS PRODUCTOS ERRONEOS
        var noUndefined = this.productos.filter(function (x) { return x.tipo != undefined; });
        //FILTRAMOS POR TIPO
        return noUndefined.filter(function (x) { return x.tipo.replace(/\s/g, '').toLowerCase().includes(type.toLowerCase()); });
    };
    //ARMAMOS LISTAS DE TIPOS
    ListaGeneralProductosPage.prototype.filterItemsNames = function () {
        return this.ListaCortaTipos.filter(function (x) { return x.text.toLowerCase() != 'todos los productos'; });
    };
    ListaGeneralProductosPage.prototype.cambioLista = function (evento) {
        if (evento.length > 0) {
            this.items = this.productos;
        }
        else {
            this.items = this.productos.slice(0, 20);
        }
    };
    ListaGeneralProductosPage.prototype.cambioTipo = function (evento) {
        if (evento != "TODOS LOS PRODUCTOS") {
            this.items = this.productos;
        }
        else {
            this.items = this.productos.slice(0, 20);
        }
    };
    //AGREGAMOS MAS DATOS A LA PANTALLA PRINCIPAL PARA EL SCROLL INFINITO
    ListaGeneralProductosPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        var k;
        if (this.is_mobile) {
            k = this.ListaCortaTipos.length;
            setTimeout(function () {
                _this.ListaCortaTipos = _this.ListaCortaTipos.concat(_this.tipos.slice(k, k + 3));
                infiniteScroll.complete();
            }, 10);
        }
        else {
            k = this.ListaCortaTipos.length;
            setTimeout(function () {
                _this.ListaCortaTipos = _this.ListaCortaTipos.concat(_this.tipos.slice(k, k + 3));
                infiniteScroll.complete();
            }, 10);
            /* var k = this.items.length;
            setTimeout(() => {
              this.items = this.items.concat(this.productos.slice(k, k+10));
              infiniteScroll.complete();
            }, 100); */
        }
    };
    ListaGeneralProductosPage.prototype.irAVistaDeDetalleProducto = function (producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_producto_detalle_producto__["a" /* DetalleProductoPage */], { producto: producto, user: this.user });
    };
    ListaGeneralProductosPage.prototype.agregarAlCarrito = function (productoEntrante) {
        var _this = this;
        if (productoEntrante.cantidad < 1 || productoEntrante.cantidad == null) {
            alert("Parcero, recuerda escribir la cantidad que quieres del producto, justo al lado del botón AGREGAR AL CARRITO. Gracias y bienvenido!!!");
        }
        else {
            var productoFinal_1 = {
                nombre: productoEntrante.nombre,
                marca: productoEntrante.marca,
                precio: productoEntrante.precio,
                tipo: productoEntrante.tipo,
                foto: productoEntrante.foto,
                id: productoEntrante.id,
                cantidad: productoEntrante.cantidad,
                subtotal: parseInt(productoEntrante.cantidad) * parseInt(productoEntrante.precio)
            };
            if (this.user != null) {
                var path = "/USUARIOS/" + this.user.uid + "/CARRITO/" + productoEntrante.id;
                this.crud.create(path, productoFinal_1);
                var toast = this.toastCtrl.create({
                    message: productoFinal_1.cantidad + " " + (productoFinal_1.nombre + " ") + "agregados al carrito correctamente",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                this.storage.get('usuario').then(function (val) {
                    var path = "/INFO/" + "TEMPORALES" + "/USUARIOS/" + val + "/CARRITO/" + productoEntrante.id;
                    _this.crud.create(path, productoFinal_1);
                    var toast = _this.toastCtrl.create({
                        message: productoFinal_1.cantidad + " " + (productoFinal_1.nombre + " ") + "agregados al carrito correctamente",
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }
        }
    };
    ListaGeneralProductosPage.prototype.irCarrito = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__carrito_carrito__["a" /* CarritoPage */], { user: this.user });
    };
    ListaGeneralProductosPage.prototype.restar = function (producto) {
        if (producto.cantidad < 0 || producto.cantidad == null) {
            producto.cantidad = 1;
        }
        else {
            producto.cantidad -= 1;
        }
    };
    ListaGeneralProductosPage.prototype.sumar = function (producto) {
        if (producto.cantidad < 0 || producto.cantidad == null) {
            producto.cantidad = 1;
        }
        else {
            producto.cantidad += 1;
        }
    };
    ListaGeneralProductosPage.prototype.sumarUno = function (producto) {
        if (producto.cantidad == null) {
            producto.cantidad = 1;
        }
    };
    ListaGeneralProductosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'page-lista-general-productos',template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/lista-general-productos/lista-general-productos.html"*/'<!--\n  Generated template for the ListaGeneralProductosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-list style="height: 10px; " start>\n          <ion-item color="primary" >\n            <ion-label>SELECCIONA CATEGORÍA</ion-label>\n            <ion-select [(ngModel)]="catego"  (ngModelChange)="cambioTipo($event)">                                  \n              <ion-option *ngFor="let tipo of filtered">{{tipo.text}}</ion-option>                                      \n            </ion-select>\n          </ion-item>\n      </ion-list>  \n  </ion-navbar>\n  <div class="searchBoxContainer" color="primary">\n    <ion-input type="search" id="searchField" placeholder="Busca el producto que deseas..." [(ngModel)]="query" (ngModelChange)="cambioLista($event)"></ion-input>\n  </div>\n</ion-header>\n\n<!-- BOTON FLOTANTE DE WHATSSAPP-->\n<ion-footer>\n  <ion-fab bottom right>\n      <a href="https://wa.me/573508455990?text=Buenos%20dias" button ion-fab color="secondary">\n        <ion-icon name="logo-whatsapp" style="font-size:50px;"></ion-icon>\n      </a>\n  </ion-fab>\n</ion-footer>\n <!-- <ion-fab bottom right *ngIf="is_mobile" style="size:300px;">\n      <a href="https://wa.me/573508455990?text=Buenos%20dias!" button ion-fab color="secondary">\n        <ion-icon name="logo-whatsapp" style="font-size:30px;"></ion-icon>>\n      </a>\n  </ion-fab>\n\n  <ion-fab bottom right *ngIf="!is_mobile">\n    <a href="https://wa.me/573508455990?text=Buenos%20dias!" button ion-fab color="secondary">\n      <ion-icon name="logo-whatsapp" style="font-size:80px;"></ion-icon>\n    </a>\n</ion-fab>\n</ion-footer> -->\n\n<ion-content style="background-color: ghostwhite">\n  <!-- MODO CELULAR-->\n    <div *ngIf="is_mobile">\n        <!-- HTML MODO LISTA INICIAL-->\n      <ion-col col-33 *ngFor="let tipo of filterItemsNames() | search: query  | types: catego">\n          <div *ngIf="!query">\n          <h1 text-center style="font-size: 15px; background-color: ghostwhite; margin-bottom: auto">{{tipo.text}}</h1>\n          <ion-item style="background-color: ghostwhite; padding-left: 0px;">          \n            <ion-scroll scrollX style="height:300px;">\n              <div class="scroll-item">\n                  <ion-card class="card card-1" style="height: 300px; width: fit-content; display: flex; margin-left: 0px;">\n                <ion-col col-33 *ngFor="let producto of filterItemsOfType(tipo.text)">\n                      <ion-card-content>\n                      <img style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto; max-width: none;" src="{{producto.foto}}" (click)="irAVistaDeDetalleProducto(producto)"/>\n                        <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; text-align: center;">\n                          <h6>{{producto.nombre}}</h6>\n                            \n                        </ion-card-title>\n                        <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                            ${{producto.precio | number: \'1.0-0\'}}\n                        </p>\n                        \n                        <p style="text-align: center;"> \n                            <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="restar(producto)">\n                                <ion-icon name=\'remove\'></ion-icon>                \n                            </button>\n                                          \n                \n                            <button style="width: 20px; height: 20px;" ion-button color="light" icon-only>                \n                                {{producto.cantidad}}\n                            </button>\n                \n                  \n                              <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="sumar(producto)">\n                                <ion-icon name=\'add\'></ion-icon>\n                              </button>\n                        </p>\n                        <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n                            Agregar\n                        </button>\n                        \n                      </ion-card-content>\n                         \n                </ion-col>\n              </ion-card> \n              </div>\n            </ion-scroll>\n          </ion-item>\n        </div>   \n      </ion-col>\n      <!-- HTML MODO BUSCAR-->\n       <div *ngIf="query">\n          <ion-grid>\n              <ion-row>\n                <ion-col  col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor="let producto of items | search: query">\n                    <ion-card style="height: 100%; width: 100%; margin-left: 0px; padding-left: 0px;">\n                        <img (click)="irAVistaDeDetalleProducto(producto)" style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto;" src="{{producto.foto}}"/>\n                        <ion-card-content>\n                          <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; height: 85px; text-align: center;">\n                            <h6>{{producto.nombre}}</h6>\n                              \n                          </ion-card-title>\n                          <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                              ${{producto.precio | number: \'1.0-0\'}}\n                          </p>\n                          \n                          <p style="text-align: center;"> \n                              <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="restar(producto)">\n                                  <ion-icon name=\'remove\'></ion-icon>                \n                              </button>\n                                            \n                  \n                              <button style="width: 20px; height: 20px;" ion-button color="light" icon-only>                \n                                  {{producto.cantidad}}\n                              </button>\n                  \n                    \n                                <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="sumar(producto)">\n                                  <ion-icon name=\'add\'></ion-icon>\n                                </button>\n                          </p>\n                          <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n                              Agregar\n                          </button>\n                        </ion-card-content>\n                      </ion-card>                              \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n\n          <div *ngIf="catego">\n            <ion-grid>\n                <ion-row>\n                  <ion-col  col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor="let producto of items | types: catego">\n                      <ion-card style="height: 100%; width: 100%; margin-left: 0px; padding-left: 0px;">\n                          <img (click)="irAVistaDeDetalleProducto(producto)" style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto;" src="{{producto.foto}}"/>\n                          <ion-card-content>\n                            <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; height: 85px; text-align: center;">\n                              <h6>{{producto.nombre}}</h6>\n                                \n                            </ion-card-title>\n                            <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                                ${{producto.precio | number: \'1.0-0\'}}\n                            </p>\n                            \n                            <p style="text-align: center;"> \n                                <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="restar(producto)">\n                                    <ion-icon name=\'remove\'></ion-icon>                \n                                </button>\n                                              \n                    \n                                <button style="width: 20px; height: 20px;" ion-button color="light" icon-only>                \n                                    {{producto.cantidad}}\n                                </button>\n                    \n                      \n                                  <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="sumar(producto)">\n                                    <ion-icon name=\'add\'></ion-icon>\n                                  </button>\n                            </p>\n                            <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n                                Agregar\n                            </button>\n                          </ion-card-content>\n                        </ion-card>                              \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n    </div>\n  <!-- MODO WEB -->\n  <div *ngIf="!is_mobile">\n    <ion-col col-33 *ngFor="let tipo of filterItemsNames() | search: query | types: catego">\n      <div *ngIf="!query">\n        <!--HTML MODO VISTA INICIAL-->\n        <h1 text-center style="font-size: 15px; background-color: ghostwhite; margin-bottom: auto">{{tipo.text}}</h1>\n        <ion-item style="background-color: ghostwhite; padding-left: 0px;">   \n          <ion-scroll scrollX style="height:400px; width: 100%">\n            <div class="scroll-item" >\n              <ion-grid>\n                <ion-row style="display:inline-block; width: 33%;">\n                  <ion-col  col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor="let producto of filterItemsOfType(tipo.text) | search: query | types: catego">\n                    <ion-card style="height: 100%; width: 100%; margin-left: 0px; padding-left: 0px;">\n                          <img (click)="irAVistaDeDetalleProducto(producto)" style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto;" src="{{producto.foto}}"/>\n                          <ion-card-content>\n                            <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; height: 85px; text-align: center;">\n                              <h6>{{producto.nombre}}</h6>\n                                \n                            </ion-card-title>\n                            <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                                ${{producto.precio | number: \'1.0-0\'}}\n                            </p>\n                            \n                            <p style="text-align: center;"> \n                                <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="restar(producto)">\n                                    <ion-icon name=\'remove\'></ion-icon>                \n                                </button>\n                                              \n                    \n                                <button style="width: 20px; height: 20px;" ion-button color="light" icon-only>                \n                                    {{producto.cantidad}}\n                                </button>\n                    \n                      \n                                  <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="sumar(producto)">\n                                    <ion-icon name=\'add\'></ion-icon>\n                                  </button>\n                            </p>\n                            <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n                                Agregar\n                            </button>\n                          </ion-card-content>\n                        </ion-card>                         \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n        </ion-scroll>\n        </ion-item>\n      </div>\n      \n    </ion-col>\n\n    \n     <!-- HTML MODO BUSCAR-->\n     <div *ngIf="query">\n        <ion-grid>\n            <ion-row>\n              <ion-col  col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor="let producto of items | search: query">\n                  <ion-card style="height: 100%; width: 100%; margin-left: 0px; padding-left: 0px;">\n                      <img (click)="irAVistaDeDetalleProducto(producto)" style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto;" src="{{producto.foto}}"/>\n                      <ion-card-content>\n                        <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; height: 85px; text-align: center;">\n                          <h6>{{producto.nombre}}</h6>\n                            \n                        </ion-card-title>\n                        <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                            ${{producto.precio | number: \'1.0-0\'}}\n                        </p>\n                        \n                        <p style="text-align: center;"> \n                            <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="restar(producto)">\n                                <ion-icon name=\'remove\'></ion-icon>                \n                            </button>\n                                          \n                \n                            <button style="width: 20px; height: 20px;" ion-button color="light" icon-only>                \n                                {{producto.cantidad}}\n                            </button>\n                \n                  \n                              <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="sumar(producto)">\n                                <ion-icon name=\'add\'></ion-icon>\n                              </button>\n                        </p>\n                        <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n                            Agregar\n                        </button>\n                      </ion-card-content>\n                    </ion-card>                              \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div *ngIf="catego">\n          <ion-grid>\n              <ion-row>\n                <ion-col  col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor="let producto of items | types: catego">\n                    <ion-card style="height: 100%; width: 100%; margin-left: 0px; padding-left: 0px;">\n                        <img (click)="irAVistaDeDetalleProducto(producto)" style="background-size: cover; width: 150px; height: 150px; display: block; margin:auto;" src="{{producto.foto}}"/>\n                        <ion-card-content>\n                          <ion-card-title (click)="irAVistaDeDetalleProducto(producto)" style="text-transform: uppercase; height: 85px; text-align: center;">\n                            <h6>{{producto.nombre}}</h6>\n                              \n                          </ion-card-title>\n                          <p  (click)="irAVistaDeDetalleProducto(producto)" style="text-align: center;">\n                              ${{producto.precio | number: \'1.0-0\'}}\n                          </p>\n                          \n                          <p style="text-align: center;"> \n                              <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="restar(producto)">\n                                  <ion-icon name=\'remove\'></ion-icon>                \n                              </button>\n                                            \n                  \n                              <button style="width: 20px; height: 20px;" ion-button color="light" icon-only>                \n                                  {{producto.cantidad}}\n                              </button>\n                  \n                    \n                                <button style="width: 20px; height: 20px;" ion-button color="light" icon-only (click)="sumar(producto)">\n                                  <ion-icon name=\'add\'></ion-icon>\n                                </button>\n                          </p>\n                          <button style="height: 30px; display: block; margin:auto;" ion-button color="primary" (click)="agregarAlCarrito(producto)">\n                              Agregar\n                          </button>\n                        </ion-card-content>\n                      </ion-card>                              \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n\n\n  </div>\n      <!-- SCROLL AL FINAL-->\n      <ion-infinite-scroll threshold="200px" (ionInfinite)="loadData($event)">\n        <ion-infinite-scroll-content\n          loadingSpinner="bubbles"\n          loadingText="Cargando...">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/pages/lista-general-productos/lista-general-productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_crudDB_service__["a" /* crudDB */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], ListaGeneralProductosPage);
    return ListaGeneralProductosPage;
}());

//# sourceMappingURL=lista-general-productos.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_home_tabs_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(233);
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
    function MyApp(platform, statusBar, splashScreen, push, crudDB, modalCtrl, alertCtrl, authService) {
        //let modal = this.modalCtrl.create(LoginPage);
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.crudDB = crudDB;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.mailsShown = [];
        this.boolLog = false;
        this.estadito = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_home_tabs_home__["a" /* TabsHomePage */];
        this.initializeApp();
        // Authentication status
        this.authService.getStatus().subscribe(function (result) {
            if (result) {
                console.log("Usuario conectado en lista de productos");
                console.log(result);
                console.log(result.uid);
                var path = "/USUARIOS/" + result.uid;
                _this.crudDB.get(path).valueChanges().subscribe(function (user) {
                    _this.user = user;
                    // modal.dismiss();       
                    // this.nav.setRoot(ListaGeneralProductosPage, { user: this.user});
                });
                _this.estadito = true;
            }
            else {
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pushSetup();
        });
    };
    MyApp.prototype.pushSetup = function () {
        var options = {
            android: {
                senderID: '1021518127997'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp.prototype.openPage = function (page, user) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario        
        this.nav.setRoot(page.component, { user: user });
    };
    MyApp.prototype.logOut = function () {
        this.authService.logout();
    };
    MyApp.prototype.logIn = function () {
        console.log("El usuario no se encuentra conectado.");
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jose/Documentos/trabajo/barberoExpress/appBarberoExpress/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_3__services_crudDB_service__["a" /* crudDB */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(470);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return crudDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(187);
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

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_home_tabs_home__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_check_out_check_out__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_info_info__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detalle_producto_detalle_producto__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lista_general_productos_lista_general_productos__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_carrito_carrito__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_crudDB_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sing_up_sing_up__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// Imports Firebase auth, Database, Module




var firebaseConfig = {
    apiKey: "AIzaSyAVCcHaDu7iETTruTao-QsbiDC6aow4b9s",
    authDomain: "barbero-express.firebaseapp.com",
    databaseURL: "https://barbero-express.firebaseio.com",
    projectId: "barbero-express",
    storageBucket: "barbero-express.appspot.com",
    messagingSenderId: "1021518127997",
    appId: "1:1021518127997:web:bde1f5ccb6fa6423"
};
// Servicios




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_tabs_home_tabs_home__["a" /* TabsHomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_carrito_carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lista_general_productos_lista_general_productos__["a" /* ListaGeneralProductosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detalle_producto_detalle_producto__["a" /* DetalleProductoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_check_out_check_out__["a" /* CheckOutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sing_up_sing_up__["a" /* SingUpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_1__pages_tabs_home_tabs_home__["a" /* TabsHomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_carrito_carrito__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lista_general_productos_lista_general_productos__["a" /* ListaGeneralProductosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detalle_producto_detalle_producto__["a" /* DetalleProductoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_check_out_check_out__["a" /* CheckOutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sing_up_sing_up__["a" /* SingUpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_crudDB_service__["a" /* crudDB */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__["AngularFireStorage"],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__["a" /* Push */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_12__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(322);
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

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_types__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(615);
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

/***/ 614:
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
                try {
                    return JSON.stringify(item.tipo).toLowerCase().includes(args);
                }
                catch (error) {
                }
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

/***/ 615:
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

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { FriendComponent } from './friend/friend';

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            // declarations: [FriendComponent],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map