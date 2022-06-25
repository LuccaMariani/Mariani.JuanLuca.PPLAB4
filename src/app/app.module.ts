import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';
import { Parte3Component } from './page/parte3/parte3.component';
import { PizzaListadoComponent } from './components/pizza-listado/pizza-listado.component';
import { PizzaCrearComponent } from './components/pizza-crear/pizza-crear.component';
import { PizzaModificarComponent } from './components/pizza-modificar/pizza-modificar.component';
import { PizzaBorrarComponent } from './components/pizza-borrar/pizza-borrar.component';
import { LazyModule } from './components/lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    Parte3Component,
    PizzaListadoComponent,
    PizzaCrearComponent,
    PizzaModificarComponent,
    PizzaBorrarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    LazyModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
