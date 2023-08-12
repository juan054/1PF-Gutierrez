import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './autenticacion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';




@NgModule({
  declarations: [
    AutenticacionComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    RouterModule,
    
  ]
})
export class AutenticacionModule { }
