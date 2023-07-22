import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { usuario } from '../modelos/modelos';

@Component({
  selector: 'app-usuario-dialogo-formulario',
  templateUrl: './usuario-dialogo-formulario.component.html',
  styleUrls: ['./usuario-dialogo-formulario.component.css']
})
export class UsuarioDialogoFormularioComponent {
  nombreControl = new FormControl<string | null>(null, [Validators.minLength(2), Validators.required]);
  apellidoControl = new FormControl<string | null>(null, [Validators.minLength(2), Validators.required]);
  emailControl = new FormControl<string | null>(null, [Validators.minLength(2), Validators.required]);
  comisionControl = new FormControl<number | null>(null, [Validators.minLength(2), Validators.required]);

  usuarioForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    comision: this.comisionControl,

  });

  constructor(
    private dialogRef: MatDialogRef<UsuarioDialogoFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: usuario,
    ){
      if(this.data) {
        this.nombreControl.setValue(this.data.nombre);
        this.apellidoControl.setValue(this.data.apellido);
        this.emailControl.setValue(this.data.email);
        this.comisionControl.setValue(this.data.comision);
      }


    }

  onSubmit(): void {
      if (this.usuarioForm.invalid) {
       this.usuarioForm.markAllAsTouched();
      } else {
        this.dialogRef.close(this.usuarioForm.value);
      }
    
  }
}
