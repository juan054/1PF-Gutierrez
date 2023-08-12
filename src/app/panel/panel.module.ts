import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosModule } from './paginas/usuarios/usuarios.module';
import { CursosModule } from './paginas/cursos/cursos.module';
import { HomeModule } from './home/home.module';
import { PanelRoutingModule } from './panel-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PanelComponent,
    
    
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule,
    UsuariosModule,
    CursosModule,
    HomeModule,
    RouterModule,
    
   
  ],
  exports: [
    PanelComponent,
    
    
  ]

})
export class PanelModule { }
