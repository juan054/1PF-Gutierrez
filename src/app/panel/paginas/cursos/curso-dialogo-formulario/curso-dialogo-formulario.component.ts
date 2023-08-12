import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cursos } from '../modelos/modelosCursos';

@Component({
  selector: 'app-curso-dialogo-formulario',
  templateUrl: './curso-dialogo-formulario.component.html',
  styleUrls: ['./curso-dialogo-formulario.component.css']
})
export class CursoDialogoFormularioComponent {
  nombreCursoControl = new FormControl<string | null>(null, [Validators.minLength(2), Validators.required]);
  teoricoPracticoControl = new FormControl<string | null>(null, [Validators.minLength(2), Validators.required]);
  profesorControl = new FormControl<string | null>(null, [ Validators.required]);
  comisionControl = new FormControl<number | null>(null, [Validators.minLength(2), Validators.required]);

  cursosForm = new FormGroup({
    nombreCurso: this.nombreCursoControl,
    teoricoPractico: this.teoricoPracticoControl,
    profesor: this.profesorControl,
    comision: this.comisionControl,

  });


  constructor(
    private dialogRef: MatDialogRef<CursoDialogoFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: cursos,
    ){
      if(this.data) {
        this.nombreCursoControl.setValue(this.data.nombreCurso);
        this.teoricoPracticoControl.setValue(this.data.teoricoPractico);
        this.profesorControl.setValue(this.data.profesor);
        this.comisionControl.setValue(this.data.comision);
      }


    }

  onSubmit(): void {
      if (this.cursosForm.invalid) {
       this.cursosForm.markAllAsTouched();
      } else {
        this.dialogRef.close(this.cursosForm.value);
      }
    
  }
}


