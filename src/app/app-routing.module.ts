import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { UsuariosComponent } from './panel/paginas/usuarios/usuarios.component';
import { CursosComponent } from './panel/paginas/cursos/cursos.component';

const routes: Routes = [
 { path: 'panel',
   component: PanelComponent,
   //hijos
   children:[
    {path:'usuarios',
    component:UsuariosComponent
  },
  {
    path:'cursos',
    component:CursosComponent
  },
  
   ] 
},
//hermanos
{
  path:'autenticacion',
  component:AutenticacionComponent
},
{
  path:'**',
  redirectTo:'/autenticacion'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
