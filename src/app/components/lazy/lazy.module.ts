import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { Parte2Component } from 'src/app/page/parte2/parte2.component';
import { AltaRepartidorComponent } from 'src/app/page/alta-repartidor/alta-repartidor.component';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';
import { DetalleRepartidorPaisComponent } from '../detalle-repartidor-pais/detalle-repartidor-pais.component';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { ListadoRepartidorComponent } from '../listado-repartidor/listado-repartidor.component';

import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    Parte2Component,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    ListadoRepartidorComponent,
    DetalleRepartidorComponent,
    DetalleRepartidorPaisComponent,
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class LazyModule { }
