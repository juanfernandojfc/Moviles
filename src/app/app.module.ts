import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {AngularFireModule} from 'angularfire2/angularfire2';
import { configuracion } from './firebase.config';

import { AngularFireAuthModule} from 'angularfire2/auth';
import { RegistrarPage } from '../pages/registrar/registrar';
import { HomePage } from '../pages/home/home';
import { RegistrarProyectoPage } from '../pages/registrar-proyecto/registrar-proyecto';
@NgModule({
  declarations: [
    MyApp,
    RegistrarPage,
    HomePage,
    RegistrarProyectoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(configuracion) ,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistrarPage,
    HomePage,
    RegistrarProyectoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
