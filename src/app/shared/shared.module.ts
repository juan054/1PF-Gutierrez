import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { ModificacionesModalDirective } from './directivas/modificaciones-modal.directive';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {  MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
  declarations: [
    NombreCompletoPipe,
    ModificacionesModalDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports :[
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    NombreCompletoPipe,
    ModificacionesModalDirective,
    MatListModule,
    MatCardModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule ,
    
    
  ],
  providers:[]
})
export class SharedModule { }
