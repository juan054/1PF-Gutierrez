import { Pipe, PipeTransform } from '@angular/core';
import { usuario } from 'src/app/panel/paginas/usuarios/componentes/modelos/modelos';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {
  transform(usuario: usuario, ...args: unknown[]): unknown {
    
    return usuario.nombre + " " + usuario.apellido ;
   
  }

}
