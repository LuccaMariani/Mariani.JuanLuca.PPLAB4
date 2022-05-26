import { Injectable } from '@angular/core';

import { Usuario } from '../clases/usuario';

import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLogueado : boolean = false;

  constructor(private authService : AngularFireAuth, private router : Router, private angularfireStore : AngularFirestore) { 
    
    this.isLoggedIn().subscribe(res=>{
      if(res!= null){
        this.estaLogueado = true;
      }else{
       this.estaLogueado = false; 
      }
    })

    console.log("Estas lodeago? "+this.estaLogueado);
  }

  public async login(usuario: Usuario) {
    return this.authService.signInWithEmailAndPassword(usuario.email, usuario.password);
  }

  public async register(usuario: Usuario) {
    return this.authService.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  esAdmin(usuario:any)
  {
    return usuario && usuario.email == 'admin@admin.com';
  } 

  isLoggedIn() {
    return this.authService.authState;
  }

  estaLogued(){

    if(this.isLoggedIn() != null)
    {
      return true;
    }
    return false;
  }

  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}

