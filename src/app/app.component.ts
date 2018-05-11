import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { ViewChild } from '@angular/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenido') contenido:NavController;
  rootPage:any = 'LoginPage';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private afAut: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
  }

  terminarSesion(){
    this.afAut.auth.signOut();
    this.contenido.setRoot(LoginPage);
  }
}

