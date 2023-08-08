import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioDialogoFormularioComponent } from './componentes/usuario-dialogo-formulario/usuario-dialogo-formulario.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDialogoFormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
