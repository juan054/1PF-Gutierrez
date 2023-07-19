import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-dialogo-formulario',
  templateUrl: './usuario-dialogo-formulario.component.html',
  styleUrls: ['./usuario-dialogo-formulario.component.css']
})
export class UsuarioDialogoFormularioComponent {
  nombreControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  apellidoControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  emailControl = new FormControl(null, [Validators.minLength(2), Validators.required]);
  comisionControl = new FormControl(null, [Validators.minLength(2), Validators.required]);

  usuarioForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    comision: this.comisionControl,

  });

  constructor(private dialogRef: MatDialogRef<UsuarioDialogoFormularioComponent>){}

  onSubmit(): void {
      if (this.usuarioForm.invalid) {
       this.usuarioForm.markAllAsTouched();
      } else {
        this.dialogRef.close(this.usuarioForm.value);
      }
    
  }
}
