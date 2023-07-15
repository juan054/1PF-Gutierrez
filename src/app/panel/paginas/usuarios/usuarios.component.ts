import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  nombreControl = new FormControl();
  apellidoControl = new FormControl();
  emailControl = new FormControl();
  comisionControl = new FormControl();

  usuarioForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    comision: this.comisionControl,

  })

}
