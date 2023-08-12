import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

interface NotificacionPersonalizada {
  type: 'success' | 'error' | 'info';
  title:string;
  message:string;

}

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private notificaciones$ = new Subject<NotificacionPersonalizada>()

  constructor() {
    this.notificaciones$.subscribe({
      next: (miNotificacion) => {
        Swal.fire(miNotificacion.title, miNotificacion.message, miNotificacion.type);
      }
    })


   }

   showSuccess(message: string, title = 'Realizado'): void {
    this.notificaciones$.next({
      type: 'success',
      message,
      title
    });
  }
  showError(message: string, title = 'Error'): void {
    this.notificaciones$.next({
      type: 'error',
      message,
      title
    });
  }
  showInfo(message: string, title = '...'): void {
    this.notificaciones$.next({
      type: 'info',
      message,
      title
    });
  }
}




