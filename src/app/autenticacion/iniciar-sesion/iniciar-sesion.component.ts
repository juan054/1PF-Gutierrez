import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { autenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

public emailControl = new FormControl('gutierrez@email.com', [Validators.required, Validators.email])
public paswordControl = new FormControl('gutierrez', [Validators.required])


 public loginForm = new FormGroup({
  email:this.emailControl,
  pasword:this.paswordControl,
 })
constructor(private autenticacionService : autenticacionService){

}
 iniciarSesion():void{

  if ( this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    }
  else{
    this.autenticacionService.logeo(this.loginForm.getRawValue())
  }
 
 }

  

  
 
}
