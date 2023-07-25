import { Injectable } from '@angular/core';
import { usuario } from './usuarios/componentes/modelos/modelos';
import { BehaviorSubject, Observable, Subject, delay, of } from 'rxjs';


const usuario_BD: Observable<usuario[]> = of ([
  {id:1, nombre:'juan', apellido:'gutierrez',email:'juang@ejemplo.com', comision:654321 },
  {id:2, nombre:'giuliana', apellido:'lucero',email:'giulcero@ejemplo.com', comision:195821 },
]).pipe(delay(500));



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario$ = new BehaviorSubject <usuario[]>([]);


  constructor() { }

  cargandoUsuarios():void{
    usuario_BD.subscribe({
      next:(usuariosBaseDatos)=> this.usuario$.next(usuariosBaseDatos)

    })
}

  crearUsuario (usuario: usuario) : void{
  usuario_BD.subscribe({
    next:(arrayActual) =>{
      this.usuario$.next([...arrayActual, usuario])
    }
  })
  }

  getUsuarios() :Subject<usuario[]>{
    return this.usuario$;
  }
}
