import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-pizza-modificar',
  templateUrl: './pizza-modificar.component.html',
  styleUrls: ['./pizza-modificar.component.scss']
})
export class PizzaModificarComponent implements OnInit {

  @Input() pizzaRecibidaModificar : Pizza = new Pizza();
  
  constructor() { }

  ngOnInit(): void {
  }

}
