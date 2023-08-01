import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { UsuariosModule } from './paginas/usuarios/usuarios.module';
import { CursosModule } from './paginas/cursos/cursos.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    PanelComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule,
    MatMenuModule,
    MatTableModule,
    UsuariosModule,
    CursosModule,
    AppRoutingModule
  ],
  exports: [
    PanelComponent,
    
    
  ]

})
export class PanelModule { }
