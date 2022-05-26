import { Injectable } from '@angular/core';
import { Repartidor } from '../clases/repartidor';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  ruta = 'repartidores';
  //referenciaAlaColeccion: AngularFirestoreCollection<Repartidor>;
  //referenciaBD: AngularFirestore;
  //repartidoresCollection: AngularFirestoreCollection<Repartidor>;
  //repartidores: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    //this.referenciaBD = firestore;
    //this.referenciaAlaColeccion = firestore.collection(this.ruta);
    
    //this.repartidores = firestore.collection(this.ruta).valueChanges();
  }

  getRepartidores() {
    //console.log('Get repartidores >');
    //console.log(this.firestore.collection("repartidores").get().forEach.toString);
    //console.log(this.repartidores);
    //console.log(this.firestore.collection(this.ruta).snapshotChanges());
    let collection = this.firestore.collection<any>(this.ruta)
    return collection.valueChanges();
    
    
    //return this.repartidores;

  }

  obtenerTodos(nombreColeccion : string){
    let collection = this.firestore.collection<any>(nombreColeccion)
    return collection.valueChanges({idField: 'id'});
  }


  getRepartidor(key: string) {
    return this.firestore.collection(this.ruta).doc(key).valueChanges();
  }
/*
  public modificarRepartidor(id: string, data: any): any {
    return this.referenciaAlaColeccion.doc(id).set(data);
  }

  public getContainers() {
    return this.referenciaAlaColeccion;
  }*/

  guardarRepartidor(repartidor: Repartidor) {
    console.log(repartidor);
    return this.firestore.collection(this.ruta).add({
      dni: repartidor.dni,
      nombre: repartidor.nombre,
      edad: repartidor.edad,
      capacidad: repartidor.capacidad,
      paisOrigen: repartidor.paisOrigen,
      unidadPropia: repartidor.unidadPropia
    });
  }
}
