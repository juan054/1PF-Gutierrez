import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogoFormularioComponent } from './componentes/usuario-dialogo-formulario/usuario-dialogo-formulario.component';
import { usuario } from './componentes/modelos/modelos';



const ELEMENT_DATA: usuario [] = [
  {id:1, nombre:'ejemplo', apellido:'ejemplo apellido',email:'ejmplo@ejemplo.com', comision:654321 }
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

 onDeleteUsuario(usuario: usuario ): void{
  console.log(usuario)
  if (confirm('esta seguro de eliminar a ${usuario.nombre}?')) {
    this.usuario = this.usuario.filter((u) => u.id !== usuario.id)
  }
 };


 displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'comision','editarEliminar'];
 dataSource: usuario[] = [];

 deleteUsuario = new EventEmitter<usuario>();

}
