import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pizza } from '../clases/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  ruta = 'pizzas';

  constructor(private firestore: AngularFirestore) {

  }

  getPizzas() {
    let collection = this.firestore.collection<any>(this.ruta)
    return collection.valueChanges();
  }

  getPizza(key: string) {
    return this.firestore.collection(this.ruta).doc(key).valueChanges();
  }

  guardarPizza(pizza: Pizza) {
    console.log("pizza a guardar:", pizza);
    return this.firestore.collection(this.ruta).add({
      nombre: pizza.nombre,
      ingredientes: pizza.ingredientes,
      precio: pizza.precio,
      peso: pizza.peso
    });

  }

  async borrarPizza(nombreColeccion: string, id: any) {
    try {
      return await this.firestore.collection(nombreColeccion).doc(id).delete();
    } catch (error) {
      console.log("error en delete pizza ", error)
    }
  }

  async modificarPizza(collection: string, id: any, dato: any) {
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch (error) {
      console.log("error en update pizza ", error)
    }
  }

}
