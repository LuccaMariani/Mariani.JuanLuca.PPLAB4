import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLogueado?: boolean;
  estaAdmin?: boolean ;
  private emailLogeado: any;

  constructor(private authService: AngularFireAuth, private router: Router, private angularfireStore: AngularFirestore) {

    this.whoIsLoggedIn().subscribe(res => {
      console.log('ACAA', res);
      if (res != null) {
        this.estaAdmin = this.esAdmin(res.email)
        this.estaLogueado = true
      } else {
        this.estaLogueado = false
        this.estaAdmin = false;
      }
    })
  }


  public async login(usuario: Usuario) {/*
    let respuesta = this.authService.signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(() => {
        this.emailLogeado = usuario.email;
      })

    if (this.emailLogeado == 'admin@admin.com') {
      this.estaAdmin == true;
    }
    else { this.estaAdmin == false }
    //return respuesta;*/

    let respuesta = { status: false, error: '' };
    try {
      await this.authService.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(data => {
          if (data.user) {
            respuesta.status = true;
          }
        })
    } catch (error) {
      respuesta.error = `${error}`;
    }
    return respuesta;
  }

  public async register(usuario: Usuario) {
    return this.authService.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  
  esAdmin(email:any)
  {
    return email == 'admin@gmail.com';
  } 

  whoIsLoggedIn() {
    return this.authService.authState;
  }

  /*
    estaLogued() {
      if (this.whoIsLoggedIn() != null) {
        return true;
      }
      return false;
    }*/

  logout() {
    this.authService.signOut().then(() => {
      //this.estaAdmin == false;
      this.router.navigate(['/login']);
    })
  }
}

