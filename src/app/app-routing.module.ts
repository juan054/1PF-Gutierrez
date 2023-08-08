import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { UsuariosComponent } from './panel/paginas/usuarios/usuarios.component';
import { CursosComponent } from './panel/paginas/cursos/cursos.component';
import { IniciarSesionComponent } from './autenticacion/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './autenticacion/registrarse/registrarse.component';
import { HomeComponent } from './panel/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path:'',
  component:PanelComponent,
children:[
  {path:'usuarios',component:UsuariosComponent},
  {path:'cursos',component:CursosComponent},
  {path:'home',component:HomeComponent},

]},
{path:'**', redirectTo:'panel'},
{path:'autenticacion',component:AutenticacionComponent,
children:[
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'registrarse',component:RegistrarseComponent},
  
]
},
//{path:'**',redirectTo:'autenticacion'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
