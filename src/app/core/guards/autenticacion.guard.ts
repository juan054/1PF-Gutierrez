import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators'; // Importa 'map' de 'rxjs/operators'
import { autenticacionService } from 'src/app/autenticacion/autenticacion.service';

export const AutenticacionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const autService = inject(autenticacionService);

  return autService.estaAutenticado().pipe(
    map(isAuth => {
      if (isAuth) {
        return true; 
      } else {
        router.navigate(['/autenticacion/iniciar-sesion']); 
        return false;
      }
    })
  );
};
