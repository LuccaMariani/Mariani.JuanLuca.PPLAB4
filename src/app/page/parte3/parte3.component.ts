import { Component, OnInit,Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.scss']
})
export class Parte3Component implements OnInit {

  pizzaSeleccionadaModificar :Pizza= new Pizza();
  pizzaSeleccionadaBorrar :Pizza= new Pizza();

  constructor(private firebase: PizzaService) { }

  ngOnInit(): void {
  }

  //recibe el evente del crear pizza, y da de alta una
  recibeEventoPizza(pizza: Pizza){
    this.firebase.guardarPizza(JSON.parse(JSON.stringify(pizza))).then(res=>{
      console.log('Guardar pizza salio bien');
    }).catch(err=>{
      console.log('Guardar pizza salio MAL');
    })
    this.limpiar()
  }

  //recibe la pizza seleccionada en el lsitado, para que modificar o borrar lo reciba como input
  
  //Tendria que ser: recibeEventoPizzaSeleccionada(pizza: Pizza), pero da error
  recibeEventoPizzaSeleccionada(pizza: any){
    this.pizzaSeleccionadaModificar = JSON.parse(JSON.stringify(pizza));
    this.pizzaSeleccionadaBorrar = JSON.parse(JSON.stringify(pizza));
  }


  limpiar(){
    this.pizzaSeleccionadaModificar = new Pizza()
    this.pizzaSeleccionadaBorrar = new Pizza()
  }

}
