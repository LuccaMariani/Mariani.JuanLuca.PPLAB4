import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { EventEmitter } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-borrar',
  templateUrl: './pizza-borrar.component.html',
  styleUrls: ['./pizza-borrar.component.scss']
})
export class PizzaBorrarComponent implements OnInit {

  @Input() pizzaRecibidaBorrar : Pizza = new Pizza();

  constructor(private pizzaService : PizzaService) { }
  ngOnInit(): void {
  }

  borrarPizza()
  {
    console.log("borrar pizza: ", this.pizzaRecibidaBorrar);
    this.pizzaService.borrarPizza("pizzas", this.pizzaRecibidaBorrar.nombre)
    .then(res=>{console.log('Se pudo eliminar, respuesta:',res);
    })
    this.pizzaRecibidaBorrar = new Pizza()

  }
}
