import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';


const routes: Routes = [
  {
    path: 'panel',
    canActivate:[AutenticacionGuard],
    component:PanelComponent,
    loadChildren: () => import('./panel/panel.module').then((m) => m.PanelModule)
  },
  
  {
    path: 'autenticacion',
    component: AutenticacionComponent,
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)
  },
  {path:'**', redirectTo:'/autenticacion/iniciar-sesion'},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
