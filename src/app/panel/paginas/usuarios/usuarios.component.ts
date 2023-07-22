import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoFormularioComponent } from './componentes/usuario-dialogo-formulario/usuario-dialogo-formulario.component';
import { usuario } from './componentes/modelos/modelos';



const ELEMENT_DATA: usuario [] = [
  {id:1, nombre:'juan', apellido:'gutierrez',email:'juang@ejemplo.com', comision:654321 }
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {




  public usuario: usuario[] = ELEMENT_DATA;

 constructor(
  private matdialog: MatDialog
 ){};


 

 crearUsuario(): void {
  this.matdialog
  .open(UsuarioDialogoFormularioComponent)
  .afterClosed()
  .subscribe({
    next: (v) => {
      if (v) {
  this.usuario = [...this.usuario,{
 
    id: this.usuario.length + 1,
    nombre: v.nombre,
    apellido: v.apellido,
    email:v.email,
    comision:v.comision 
  

  }]

       

      }
      else{
        console.log('creacion de ususario cancelada'
        )
      }
      
    }
  })
 };
 
 onDeleteUsuario(usuarioDelete: any): void{
  if (confirm('¿esta seguro de eliminar a ${usuarioDelete.nombreCompleto}?' )) {
    this.usuario = this.usuario.filter((usuario) => usuario.id !== usuarioDelete.id )
  }
  
 
}
 ;




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
      this.usuario = this.usuario.map((usuario) => {

        return usuario.id === usuarioEditar.id 
        ? {...usuario, ...data}
        : usuario
      })
     }
      
     



    }
  })
 }
 


 displayedColumns: string[] = ['id','nombreCompleto', 'email', 'comision','editarEliminar'];
 dataSource: usuario[] = [];

 deleteUsuario = new EventEmitter<usuario>();

 editarUsuario = new EventEmitter<usuario>();

}
