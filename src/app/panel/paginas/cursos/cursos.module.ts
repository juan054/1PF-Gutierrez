import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursoDialogoFormularioComponent } from './curso-dialogo-formulario/curso-dialogo-formulario.component';





@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogoFormularioComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
