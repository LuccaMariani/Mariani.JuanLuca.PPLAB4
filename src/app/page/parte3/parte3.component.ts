import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.scss']
})
export class Parte3Component implements OnInit {

  pizzaSeleccionadaModificar :Pizza= new Pizza();
  pizzaSeleccionadaBorrar :Pizza= new Pizza();

  constructor() { }

  ngOnInit(): void {
  }

  recibeEventoPizza(pizza: Pizza){

  }
}
