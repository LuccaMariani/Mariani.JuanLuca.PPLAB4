import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-listado',
  templateUrl: './pizza-listado.component.html',
  styleUrls: ['./pizza-listado.component.scss']
})
export class PizzaListadoComponent implements OnInit {

  pizzas?:any
  
  constructor() { }

  ngOnInit(): void {
  }

}
