import { Injectable } from "@angular/core";
import { dataSesion } from "./models";
import { BehaviorSubject, Observable, map, observable, take } from "rxjs";
import { usuario, usuarioLogin } from "../panel/paginas/usuarios/componentes/modelos/modelos";
import { NotificacionesService } from "../core/servicios/notificaciones.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class autenticacionService{
    static estaAutenticado(): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      throw new Error('Method not implemented.');
    }
    public usuarioAutenticado$ = new BehaviorSubject< usuarioLogin |null >(null);
    public autenticacionUsuario = this.usuarioAutenticado$.asObservable();
    constructor(private notificacion : NotificacionesService, private router : Router ){

    }



    estaAutenticado():Observable<boolean>{
        return this.autenticacionUsuario.pipe(take(1),map(
            (usuarioLogin) => !!usuarioLogin 
        ))
    }


    logeo (sesion: dataSesion): void {
        const fake_user: usuarioLogin ={
            id:1,
            nombre: 'juan',
            apellido: 'gutierrez',
            email:'gutierrez@email.com',
            comision:123,
            pasword:'gutierrez',
        }
        if (sesion.email === fake_user.email && sesion.pasword === fake_user.pasword) {
            
        this.usuarioAutenticado$.next(fake_user);
        this.router.navigate(['/panel/home'])

        }  else{
            
            this.notificacion.showError('Email o contraseñia erroneos');
            this.usuarioAutenticado$.next(null)
        }


    }




  }