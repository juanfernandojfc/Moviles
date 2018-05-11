import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarProyectoPage } from './registrar-proyecto';

@NgModule({
  declarations: [
    RegistrarProyectoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarProyectoPage),
  ],
})
export class RegistrarProyectoPageModule {}
