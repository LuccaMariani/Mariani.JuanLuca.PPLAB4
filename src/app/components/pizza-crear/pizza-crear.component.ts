import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-pizza-crear',
  templateUrl: './pizza-crear.component.html',
  styleUrls: ['./pizza-crear.component.scss']
})
export class PizzaCrearComponent implements OnInit {

  laPizza: Pizza = new Pizza();

  @Output() crearPizzaEvento = new EventEmitter<any>();


  nombre = new FormControl('', Validators.required);
  ingredientes = new FormControl('', Validators.required);
  precio = new FormControl('', Validators.required);
  peso = new FormControl('',[Validators.required, Validators.min(500), Validators.max(1000)]);

  pizzaFormGroup = new FormGroup({
    nombre: this.nombre,
    ingredientes: this.ingredientes,
    precio: this.precio,
    peso: this.peso
  });

  constructor() { }

  ngOnInit(): void {
  }

  crearPizza(){
    if(this.pizzaFormGroup.valid){
      
      try{
        this.laPizza = this.pizzaFormGroup.value;
        this.crearPizzaEvento.emit(this.laPizza);
        console.log('Evento alta pizza ejecuado correctamente', this.laPizza);
      }
      catch{
        console.log('Error al ejecutar Evento alta pizza');
      }
      
    }
    else
    {
      console.log('el form no es valido');
    }
  }
  


  
}
