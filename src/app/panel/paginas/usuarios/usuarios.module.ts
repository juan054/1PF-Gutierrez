import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuarioDialogoFormularioComponent } from './componentes/usuario-dialogo-formulario/usuario-dialogo-formulario.component';




@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDialogoFormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
