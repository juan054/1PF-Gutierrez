import { Injectable } from '@angular/core';
import { creandoDataUsuario, editandoDataUsuario, usuario } from './usuarios/componentes/modelos/modelos';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';


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

  crearUsuario (usuario: creandoDataUsuario) : void{
  this.usuario$.pipe(take(1)).subscribe({
    next:(arrayActual) =>{
      this.usuario$.next([...arrayActual,{ ...usuario, id: arrayActual.length +1}])
    }
  })
  };

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









