import { Injectable } from '@angular/core';
import { creandoDataCursos, cursos, editandoDataCursos } from './modelos/modelosCursos';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';


const cursos_BD: Observable<cursos[]> = of ([
  {id:1, nombreCurso:'matematica', teoricoPractico:'teorico',profesor:'juan gutierrez', comision:654321 },
  {id:2, nombreCurso:'matematica', teoricoPractico:'teorico',profesor:'juan gutierrez', comision:654321 },
]).pipe(delay(500));


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos$ = new BehaviorSubject <cursos[]>([]);
  constructor() { }


  cargandoCursos():void{
    cursos_BD.subscribe({
      next:(cursosBaseDatos)=> this.cursos$.next(cursosBaseDatos)

    })
}

  crearCursos (cursos: creandoDataCursos) : void{
  this.cursos$.pipe(take(1)).subscribe({
    next:(arrayActual) =>{
      this.cursos$.next([...arrayActual,{ ...cursos, id: arrayActual.length +1}])
    }
  })
  };

  editarCursosId(id: Number , cursosEditado:editandoDataCursos): void{
    this.cursos$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.cursos$.next(
          arrayActual.map((u) => u.id === id ?{...u, ...cursosEditado}: u )
        )
      }
    })
  }

  eliminarCursosId(id: Number):void{
    this.cursos$.pipe(take(1)).subscribe({
      next: (arrayActual) => this.cursos$.next(arrayActual.filter((c) => c.id !== id)),
    })

  }


  getCursos() :Subject<cursos[]>{
  return this.cursos$;
  }

}
