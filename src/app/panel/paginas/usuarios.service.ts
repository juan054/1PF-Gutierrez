import { Injectable } from '@angular/core';
import { creandoDataUsuario, editandoDataUsuario, usuario } from './usuarios/componentes/modelos/modelos';
import { BehaviorSubject, Observable, Subject, delay, mapTo, mergeMap, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'jquery';


const usuario_BD: Observable<usuario[]> = of ([
  {id:1, nombre:'juan', apellido:'gutierrez',email:'juang@ejemplo.com', comision:654321 },
  {id:2, nombre:'giuliana', apellido:'lucero',email:'giulcero@ejemplo.com', comision:195821 },
]).pipe(delay(500));



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario$ = new BehaviorSubject <usuario[]>([]);


  constructor(private httpClient : HttpClient) { }

  cargandoUsuarios():void{
    this.httpClient.get<usuario[]>('http://localhost:3000/usuarios').subscribe({
      next:(response) => {
        this.usuario$.next(response);
      }
    })

 
}

  crearUsuario (usuario: creandoDataUsuario) : void{
    this.httpClient.post<usuario>('http://localhost:3000/usuarios', usuario)
    .pipe(
      mergeMap((usuarioCreado)=>this.usuario$.pipe(take(1), map((arrayActual) =>[...arrayActual, usuarioCreado])) )
    )
    .subscribe({
      next:(usuarioCreado) =>{
        console.log(usuarioCreado);
      }
    })
  
  
  
  
  
  }
    
    



  editarUsuarioId(id: Number , usuarioEditado: editandoDataUsuario): void{
    this.usuario$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.usuario$.next(
          arrayActual.map((u) => u.id === id ?{...u, ...usuarioEditado}: u )
        )
      }
    })
  }

  eliminarUsuarioId(id: Number):void{
    this.usuario$.pipe(take(1)).subscribe({
      next: (arrayActual) => this.usuario$.next(arrayActual.filter((u) => u.id !== id)),
    })

  }


  getUsuarios() :Subject<usuario[]>{
  return this.usuario$;
  }


}









