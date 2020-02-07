import { LoginPage } from './../pages/login/login';
import { UsersPage } from './../pages/users/users';
import { ListaProductosPedidoPage } from './../pages/lista-productos-pedido/lista-productos-pedido';
import { DetallePedidoPage } from './../pages/detalle-pedido/detalle-pedido';
import { RecibosPage } from './../pages/recibos/recibos';
import { ContabilidadPage } from './../pages/contabilidad/contabilidad';
import { Camera } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';
import { DetalleProductoPage } from './../pages/detalle-producto/detalle-producto';
import { PipesModule } from './../pipes/pipes.module';
import { AuthService } from './../services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

// Imports Firebase auth, Database, Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
export const firebaseConfig = {
  apiKey: "AIzaSyAVCcHaDu7iETTruTao-QsbiDC6aow4b9s",
  authDomain: "barbero-express.firebaseapp.com",
  databaseURL: "https://barbero-express.firebaseio.com",
  projectId: "barbero-express",
  storageBucket: "barbero-express.appspot.com",
  messagingSenderId: "1021518127997"
}

// Servicios
import { crudDB } from '../services/crudDB.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { TabsHomePage } from '../pages/tabs-home/tabs-home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsHomePage,    
    DetalleProductoPage,
    ContabilidadPage,
    PedidosPage,
    RecibosPage,
    DetallePedidoPage,
    ListaProductosPedidoPage,
    UsersPage,
    LoginPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),          
    PipesModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsHomePage,    
    DetalleProductoPage,
    ContabilidadPage,
    PedidosPage,
    RecibosPage,
    DetallePedidoPage,
    ListaProductosPedidoPage,
    UsersPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    AuthService,
    crudDB,
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireStorage,
    CallNumber
  ]
})
export class AppModule {}
