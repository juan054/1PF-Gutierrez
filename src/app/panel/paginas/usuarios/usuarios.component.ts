import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoFormularioComponent } from './componentes/usuario-dialogo-formulario/usuario-dialogo-formulario.component';
import { usuario } from './componentes/modelos/modelos';
import { UsuariosService } from '../usuarios.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

public usuarios:Observable<usuario[]>;

constructor(
  private matdialog: MatDialog,
  private usuariosService: UsuariosService
 ){ 

  this.usuarios = this.usuariosService.getUsuarios()
  this.usuariosService.cargandoUsuarios()
  //this.usuariosService.getUsuarios();
};

  crearUsuario(): void {
  this.matdialog
  .open(UsuarioDialogoFormularioComponent)
  .afterClosed()
  .subscribe({
    next: (v) => {
      if (v) {
  
      this.usuariosService.crearUsuario({
      id: new Date().getTime(),
      nombre: v.nombre,
      apellido: v.apellido,
      email:v.email,
      comision:v.comision 
          });
        }
     
      
    }
  })
 };
 
 onDeleteUsuario(usuarioDelete: any): void{
  if (confirm(`¿esta seguro de eliminar a ${usuarioDelete.nombre}?` )) {
   // this.usuarios = this.usuarios.filter((usuarios) => usuarios.id !== usuarioDelete.id )
  }
  };
 onEditUsuario(usuarioEditar: any): void{
  this.matdialog
  .open(UsuarioDialogoFormularioComponent, {
    data: usuarioEditar
  })
  .afterClosed()
  .subscribe({
    next: (data) => {
     console.log(data);
     if (data){
      //this.usuarios = this.usuarios.map((usuarios) => {
//
      //  return usuarios.id === usuarioEditar.id 
      //  ? {...usuarios, ...data}
      //  : usuarios
      //})
     }
  }
  })
 }
 displayedColumns: string[] = ['id','nombreCompleto', 'email', 'comision','editarEliminar'];
 dataSource: usuario[] = [];

 deleteUsuario = new EventEmitter<usuario>();

 editarUsuario = new EventEmitter<usuario>();

}
