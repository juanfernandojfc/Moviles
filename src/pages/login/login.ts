import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController} from 'ionic-angular';
import { usuario } from '../../modelos/usuario.modelo';
import { RegistrarPage } from '../registrar/registrar';

import { AngularFireAuth} from 'angularfire2/auth';

import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {} as usuario

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private autenticacion: AngularFireAuth,
    public alertas: AlertController,
    private menu: MenuController) {
      this.menu.enable(false);
  }

  registrar(){
    this.navCtrl.push(RegistrarPage)
  }

  async login(usuario: usuario){
    try{
    const resultado = this.autenticacion.auth.signInWithEmailAndPassword(usuario.email, usuario.pass);
    console.log(resultado);
    if(resultado){//si el usuario se loguea corrrectamente envielo a home 
      this.navCtrl.setRoot(HomePage);
    }else{
    }
    }catch(e){
      console.log(e);
    }
   //this.navCtrl.setRoot(HomePage);
  }
}
