import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  nombreControl = new FormControl(null, [Validators.minLength(2)]);
  apellidoControl = new FormControl(null, [Validators.required]);
  emailControl = new FormControl(null, [Validators.required]);
  comisionControl = new FormControl(null, [Validators.required]);

  usuarioForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    comision: this.comisionControl,

  })

}
