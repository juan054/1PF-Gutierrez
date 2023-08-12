

import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsuariosComponent } from "./paginas/usuarios/usuarios.component";
import { CursosComponent } from "./paginas/cursos/cursos.component";
import { PanelComponent } from "./panel.component";


@NgModule({
    imports:[
        RouterModule.forChild([
            
            
            {path:'usuarios',component:UsuariosComponent},
            {path:'cursos',component:CursosComponent},
            {path:'home',component:HomeComponent},
            
                ]),
        ],
    exports:[RouterModule]    

})

 
export class PanelRoutingModule {

}