import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { cursos } from './modelos/modelosCursos';
import { CursoDialogoFormularioComponent } from './curso-dialogo-formulario/curso-dialogo-formulario.component';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public cursos:Observable<cursos[]>;

  constructor(
    private matdialog: MatDialog,
    private cursosService: CursosService   ){ 
  
    this.cursos = this.cursosService.getCursos()
    this.cursosService.cargandoCursos()
   
  };

  crearCursos(): void {
    this.matdialog
    .open(CursoDialogoFormularioComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (v) {
    
        this.cursosService.crearCursos({
        
        nombreCurso: v.nombreCurso,
        teoricoPractico: v.teoricoPractico,
        profesor:v.profesor,
        comision:v.comision 
            });
          }
       }
    })
   };
   
  onDeleteCursos(cursosDelete: any): void{
    if (confirm(`¿esta seguro de eliminar a ${cursosDelete.nombreCurso} de los cursos?` )) {
      this.cursosService.eliminarCursosId(cursosDelete.id)
     }
    };
  onEditCursos(cursosEditar: any): void{
    this.matdialog
    .open(CursoDialogoFormularioComponent, {
      data: cursosEditar
    })
    .afterClosed()
    .subscribe({
      next: (data) => {
        if (data){
          this.cursosService.editarCursosId(cursosEditar.id, data)
      }
    }
    })
   };
  
  
  
  
  
  
  
  
  
   displayedColumns: string[] = ['id','nombreCurso', 'teoricoPractico', 'profesor','comision','editarEliminar'];
   dataSource: cursos[] = [];
  
   deleteCursos = new EventEmitter<cursos>();
  
   editarCursos = new EventEmitter<cursos>();
  


}
