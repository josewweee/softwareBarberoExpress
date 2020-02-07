import { Push } from '@ionic-native/push';
import { TabsHomePage } from './../pages/tabs-home/tabs-home';
import { CheckOutPage } from './../pages/check-out/check-out';
import { InfoPage } from './../pages/info/info';
import { PerfilPage } from './../pages/perfil/perfil';
import { DetalleProductoPage } from './../pages/detalle-producto/detalle-producto';
import { ListaGeneralProductosPage } from './../pages/lista-general-productos/lista-general-productos';
import { LoginPage } from './../pages/login/login';
import { CarritoPage } from './../pages/carrito/carrito';
import { PipesModule } from './../pipes/pipes.module';
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
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
  messagingSenderId: "1021518127997",
  appId: "1:1021518127997:web:bde1f5ccb6fa6423"
}

// Servicios
import { crudDB } from './../services/crudDB.service';
import { AuthService } from './../services/auth.service';

import { MyApp } from './app.component';
import { SingUpPage } from '../pages/sing-up/sing-up';

@NgModule({
  declarations: [
    MyApp,
    TabsHomePage,
    CarritoPage,
    LoginPage,
    ListaGeneralProductosPage,
    DetalleProductoPage,
    PerfilPage,
    InfoPage,
    CheckOutPage,
    SingUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),      
    ComponentsModule,
    PipesModule    ,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsHomePage,
    CarritoPage,
    LoginPage,
    ListaGeneralProductosPage,
    DetalleProductoPage,
    PerfilPage,
    InfoPage,
    CheckOutPage,
    SingUpPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    crudDB,
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireStorage,
    Push
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
