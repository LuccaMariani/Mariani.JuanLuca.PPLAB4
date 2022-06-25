import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApisService } from 'src/app/services/apis.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  usuario = new Usuario();

  constructor(private fb:FormBuilder,private route: Router,private authService: AuthService, private db: AngularFirestore, private api: ApisService) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }
  
  onSubmit():void{ 
    console.log('Form al darle al submit:',this.loginForm);
    this.Login();
  }

  initForm():FormGroup{
    //declarar las propiedades del form con FormBuilder
    return this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength  (6)]]
    })
  }

  valoresAdmin(){
    this.loginForm.setValue({
      email: "admin@gmail.com",
      password:"123456"
    });
  }

  valoresEmpleado(){
    this.loginForm.setValue({
      email: "empleado@gmail.com",
      password:"123456"
    });
  }

  Login(){
    
    const{email,password}=this.loginForm.value;
    this.usuario.email=email;
    this.usuario.password=password;

    let resultado = this.authService.login(this.usuario)
    resultado.then(data=>{
      if(data.status)
      {
        console.log('salio bien', data);
      }
    })
  }
}
