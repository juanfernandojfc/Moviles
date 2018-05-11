import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, MenuController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private autenticacion: AngularFireAuth,
    private toast: ToastController,
    public alertas: AlertController,
    private menu: MenuController) {
      
  }

  ionViewWillLoad(){
    //metodo usado para mostrar mensaje si el usuario se loguea correctamente o no 
    this.autenticacion.authState.subscribe(datos => {
      if(datos && datos.email && datos.uid){
      this.toast.create({
        message: `Bienvenido a Juntemonos : ${datos.email}`,
        duration: 3000
      }).present();
      this.menu.enable(true);
    }else{
      this.toast.create({
        message: `no se encontraron detalles de autenticación`,
        duration: 3000
      }).present();
    }
    });
  }

}
