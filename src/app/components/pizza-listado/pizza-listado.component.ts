import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { EventEmitter } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
@Component({
  selector: 'app-pizza-listado',
  templateUrl: './pizza-listado.component.html',
  styleUrls: ['./pizza-listado.component.scss']
})
export class PizzaListadoComponent implements OnInit {

  pizzas?:any
  public listaPizzas: Pizza[] = [];
  public cantidadPizzas: number = 0;

   @Output() EventoPizzaSeleccionada = new EventEmitter<Pizza>();

  constructor(private firebase :PizzaService) { }

  ngOnInit(): void {
    //obtener los repartidores
    this.firebase.getPizzas().subscribe(dataJson => {
      let listadoPizzasObtenidos = dataJson.map(objProdJson => {
        let repartidorObj = new Pizza(objProdJson.id, objProdJson.nombre, objProdJson.ingredientes, objProdJson.precio, objProdJson.peso);
        return repartidorObj;
      })
      this.listaPizzas = listadoPizzasObtenidos;
      this.cantidadPizzas = this.listaPizzas.length;
    })

  }

  lanzarEventoPizzaSeleccionada(pizza:Pizza){
    // console.log(container);
    this.EventoPizzaSeleccionada.emit(pizza);
    console.log('se lanza evento pizza selecccionada: ', pizza);
  }
}
