import { Injectable } from '@angular/core';
import { creandoDataCursos, cursos, editandoDataCursos } from './modelos/modelosCursos';
import { BehaviorSubject, Observable, Subject, delay, map, mergeMap, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificacionesService } from 'src/app/core/servicios/notificaciones.service';





@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos$ = new BehaviorSubject <cursos[]>([]);
  constructor(private httpClient : HttpClient, private notificaciones: NotificacionesService) { }


  cargandoCursos():void{
    this.httpClient.get<cursos[]>('http://localhost:3000/cursos').subscribe({
      next:(response) => {
        this.cursos$.next(response);
      }
    })

}

  crearCursos (cursos: creandoDataCursos) : void{
    this.httpClient.post<cursos>('http://localhost:3000/cursos', cursos)
    .pipe(
      mergeMap((cursoCreado)=>this.cursos$.pipe(take(1), map((arrayActual) =>[...arrayActual, cursoCreado])) )
  )
    .subscribe({
      next:(cursoCreado) =>{
        this.cursos$.next(cursoCreado)
      }}),
      this.notificaciones.showSuccess('Curso creado')
 
  };

  editarCursosId(id: Number , cursosEditado:editandoDataCursos): void{
    this.httpClient.put('http://localhost:3000/cursos/'+ id, cursosEditado )
    .subscribe({
      next:() => this.cargandoCursos(),
    })
  }

  eliminarCursosId(id: Number):void{
    this.httpClient.delete('http://localhost:3000/cursos/' + id )
    .subscribe({
      next:(arrayActualizado)=> this.cargandoCursos(),
    }),
    this.notificaciones.showInfo('Curso eliminado');
  }


  getCursos() :Subject<cursos[]>{
  return this.cursos$;
  }

}
