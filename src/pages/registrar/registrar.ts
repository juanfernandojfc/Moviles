import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuario } from '../../modelos/usuario.modelo';
import { AngularFireAuth} from 'angularfire2/auth'
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  usuario = { } as usuario;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private autenticacion : AngularFireAuth) {
  }

  registrar(usuario:usuario){
    try{
    const resultado = this.autenticacion.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.pass);
    console.log(resultado);
    }
    catch(e){
      console.log(e);
    }
  }
}
