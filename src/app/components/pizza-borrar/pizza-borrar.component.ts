import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { EventEmitter } from 'stream';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-borrar',
  templateUrl: './pizza-borrar.component.html',
  styleUrls: ['./pizza-borrar.component.scss']
})
export class PizzaBorrarComponent implements OnInit {

  @Input() pizzaRecibidaBorrar : Pizza = new Pizza();
  @Output() pizzaEliminadoEvent: EventEmitter<any>;

  constructor(private pizzaService : PizzaService) { }
  ngOnInit(): void {
  }

  borrar()
  {
    console.log("borrar id", this.pizzaRecibidaBorrar.id)
    this.pizzaService.borrarPizza("pizzas", this.pizzaRecibidaBorrar.id).then(res=>{
      console.log('Se pudo eliminar');
    })
    this.pizzaRecibidaBorrar = new Pizza()
    this.pizzaEliminadoEvent.emit(this.pizzaRecibidaBorrar.id)
  }
}
