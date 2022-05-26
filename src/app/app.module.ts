import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { AltaRepartidorComponent } from './page/alta-repartidor/alta-repartidor.component';

import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';
import { Repartidor } from './clases/repartidor';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { Parte2Component } from './page/parte2/parte2.component';
import { ListadoRepartidorComponent } from './components/listado-repartidor/listado-repartidor.component';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { DetalleRepartidorPaisComponent } from './components/detalle-repartidor-pais/detalle-repartidor-pais.component';
import { Parte3Component } from './page/parte3/parte3.component';
import { PizzaListadoComponent } from './components/pizza-listado/pizza-listado.component';
import { PizzaCrearComponent } from './components/pizza-crear/pizza-crear.component';
import { PizzaModificarComponent } from './components/pizza-modificar/pizza-modificar.component';
import { PizzaBorrarComponent } from './components/pizza-borrar/pizza-borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    Parte2Component,
    ListadoRepartidorComponent,
    DetalleRepartidorComponent,
    DetalleRepartidorPaisComponent,
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
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
