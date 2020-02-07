import { crudDB } from './../../services/crudDB.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';
import { TabsHomePage } from '../tabs-home/tabs-home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password: any;
  password2: string;
  email: any;  
  nick: string;
  operation: string = 'login';
  pathDomiciliarios: string = '/DOMICILIARIOS/USUARIOS/';  
  listaDomiciliarios: any[];
  codigoDomiciliario: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authService: AuthService, private toastCtrl: ToastController, public crud: crudDB,public modalCtrl: ModalController, public storage: Storage) {
                // this.authService.getStatus().subscribe((result) => {            
                //   if(result){
                //     this.viewCtrl.dismiss();
                //   } 
                // }); 
    this.crud.getList(this.pathDomiciliarios).valueChanges()
    .subscribe((listaDB) => {
      this.listaDomiciliarios = listaDB;
      storage.get('login_barberoexpress').then((val) => {
        console.log("usuario" +  val);
        if(val){
          for(var w=0;w<this.listaDomiciliarios.length;w++){
            if(val == this.listaDomiciliarios[w].password){
              console.log("yeah");
              var usuario = this.listaDomiciliarios[w];
              this.navCtrl.setRoot(PedidosPage, {usuario: usuario}); 
            }
          }
        }else{
          console.log("error con" + val);
        }
      }); 
    });
  
    this.crud.getList(this.pathDomiciliarios).valueChanges()
    .subscribe((listaDB) => {
      this.listaDomiciliarios = listaDB;
    });

  }

  entrar(codigo: number, password: string) {
    let usuario = this.listaDomiciliarios[codigo];
    if (usuario.password == password){
      let toast = this.toastCtrl.create({
        message: 'Bienvenido',
        duration: 3000,
        position: 'bottom'
      });
      localStorage.setItem('login_barberoexpress', password.toString());
      console.log(password.toString());
      toast.present();    
      this.navCtrl.setRoot(PedidosPage, {usuario: usuario}); 
    } 
    else {
      let toast = this.toastCtrl.create({
        message: 'Datos incorrectos.',
        duration: 3000,
        position: 'middle'
      });
      toast.present();    
      return;
    }         
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password).then((data) => {
      console.log(data);
      let toast = this.toastCtrl.create({
        message: 'Bienvenido',
        duration: 3000,
        position: 'top'
      });
      toast.present();      
      // this.navCtrl.setRoot(ListaGeneralProductosPage);      
    }).catch((error) => {
      alert('Ocurrió un error');
      console.log(error);
    })
  }
  // loginFacebook() {
  //   this.authService.loginWithFacebook().then( (response)=> {
  //     alert('Loggeado con Facebook con éxito, bienvenido a Barbero Express.');
  //     this.viewCtrl.dismiss();      
  //     localStorage.setItem('loginData', JSON.stringify(response))
  //   });
  // }
  loginGoogle(){
    return new Promise<any>((resolve, rejevt) => {
      this.authService.loginWithGoogle()
      .then( (response) => {        
        this.viewCtrl.dismiss();
        alert('Loggeado con Google con éxito, bienvenido a Barbero Express.')
        localStorage.setItem('loginData', JSON.stringify(response))
        // var papi = localStorage.getItem('loginData')      
        // var papus = JSON.parse(papi);               
        resolve(response)
      }, err => rejevt(err))
    })    
    
  }
  cancelar() {
    console.log('Entró')
    this.viewCtrl.dismiss();
  }

}
