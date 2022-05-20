import { Injectable } from '@angular/core';
import { Repartidor } from '../clases/repartidor';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  rutaDeLaColeccion = '/repartidores';
  referenciaAlaColeccion: AngularFirestoreCollection<Repartidor>;
  referenciaBD: AngularFirestore;
  repartidores: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.referenciaBD = firestore;
    this.referenciaAlaColeccion = firestore.collection(this.rutaDeLaColeccion);
    this.repartidores = this.referenciaAlaColeccion.valueChanges(this.rutaDeLaColeccion)
  }

  getRepartidores() {
    return this.repartidores;
  }

  getProducto(key: string) {
    return this.firestore.collection("repartidores").doc(key).valueChanges();
  }

  public modificarRepartidor(id: string, data: any): any {
    return this.referenciaAlaColeccion.doc(id).set(data);
  }

  public getContainers() {
    return this.referenciaAlaColeccion;
  }
  guardarRepartidor(repartidor: Repartidor) {
    console.log(repartidor);
    return this.firestore.collection("repartidores").add({
      dni: repartidor.dni,
      precio: repartidor.nombre,
      edad: repartidor.edad,
      capacidad: repartidor.capacidad,
      paisOrigen: repartidor.paisOrigen,
      unidadPropia: repartidor.unidadPropia
    });
  }
}
