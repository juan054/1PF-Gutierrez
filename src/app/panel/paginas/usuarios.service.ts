import { Injectable } from '@angular/core';
import { creandoDataUsuario, editandoDataUsuario, usuario } from './usuarios/componentes/modelos/modelos';
import { BehaviorSubject, Observable, Subject, delay, map, mergeMap, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificacionesService } from 'src/app/core/servicios/notificaciones.service';







@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario$ = new BehaviorSubject <usuario[]>([]);


  constructor(private httpClient : HttpClient, private notificaciones : NotificacionesService) { }

  cargandoUsuarios():void{
    this.httpClient.get<usuario[]>('http://localhost:3000/usuarios').subscribe({
      next:(response) => {
        this.usuario$.next(response);
      }
    })

 
}

  crearUsuario (usuarioPayload: creandoDataUsuario) : void{
   this.httpClient.post<usuario>('http://localhost:3000/usuarios', usuarioPayload)
   .pipe(
     mergeMap((usuarioCreado)=>this.usuario$.pipe(take(1), map((arrayActual) =>[...arrayActual, usuarioCreado])) )
 )
   .subscribe({
     next:(usuarioCreado) =>{
       console.log(usuarioCreado);
       this.usuario$.next(usuarioCreado)
     }}),
     this.notificaciones.showSuccess('Usuario creado')


  }
    
   editarUsuarioId(id: Number , usuarioEditado: editandoDataUsuario): void{


    this.httpClient.put('http://localhost:3000/usuarios/'+ id, usuarioEditado )
      .subscribe({
        next:() => this.cargandoUsuarios(),
      })
}

  eliminarUsuarioId(id: Number):void{
    this.httpClient.delete('http://localhost:3000/usuarios/' + id )
    .subscribe({
      next:(arrayActualizado)=> this.cargandoUsuarios(),
    }),
    this.notificaciones.showInfo('Usuario eliminado');
}


  getUsuarios() :Subject<usuario[]>{
  return this.usuario$;
  }


}









