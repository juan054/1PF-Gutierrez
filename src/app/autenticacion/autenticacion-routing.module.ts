import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IniciarSesionComponent } from "./iniciar-sesion/iniciar-sesion.component";
import { RegistrarseComponent } from "./registrarse/registrarse.component";


@NgModule({
  imports: [
    RouterModule.forChild([
    
      {
        
        path: 'iniciar-sesion',
        component:IniciarSesionComponent
      },
      {
        path: 'registrarse',
        component: RegistrarseComponent
      }
    ])
  ]
})
export class AutenticacionRoutingModule {}