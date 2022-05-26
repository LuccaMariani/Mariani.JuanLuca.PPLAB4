import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-modificar',
  templateUrl: './pizza-modificar.component.html',
  styleUrls: ['./pizza-modificar.component.scss']
})
export class PizzaModificarComponent implements OnInit {

  laPizza: Pizza = new Pizza();

  nombre = new FormControl('Seleccione una pizza', [Validators.required, Validators.minLength(2)]);
  ingredientes = new FormControl('', [Validators.required, Validators.minLength(2)]);
  precio = new FormControl('', [Validators.required, Validators.min(10)]);
  peso = new FormControl('', [Validators.required, Validators.min(500), Validators.max(1000)]);

  pizzaFormGroup = new FormGroup({
    nombre: this.nombre,
    ingredientes: this.ingredientes,
    precio: this.precio,
    peso: this.peso
  });

  @Input() pizzaRecibidaModificar: Pizza = new Pizza();

  constructor(private firebase: PizzaService) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    //poner los valores en el modificar
    //if (!this.pizzaFormGroup.valid) {
    this.pizzaFormGroup.setValue({
      nombre: this.pizzaRecibidaModificar.nombre,
      ingredientes: this.pizzaRecibidaModificar.ingredientes,
      precio: this.pizzaRecibidaModificar.precio,
      peso: this.pizzaRecibidaModificar.peso
    });
    //  }
  }

  modificarPizza() {
    if (this.pizzaFormGroup.valid) {
      console.log('1');
      try {
        console.log('2',this.pizzaRecibidaModificar);
        this.pizzaRecibidaModificar.nombre = this.pizzaFormGroup.value.nombre;
        this.pizzaRecibidaModificar.ingredientes = this.pizzaFormGroup.value.ingredientes;
        this.pizzaRecibidaModificar.precio = this.pizzaFormGroup.value.precio;
        this.pizzaRecibidaModificar.peso = this.pizzaFormGroup.value.peso;
        console.log('3',this.pizzaRecibidaModificar);
        let pizzaModificada = JSON.parse(JSON.stringify(this.pizzaRecibidaModificar))

        this.firebase.modificarPizza("pizzas", this.pizzaRecibidaModificar.nombre, pizzaModificada)
          .then(res => {
            console.log('respuesta al modificar pizza:', res)
            this.pizzaFormGroup.reset();
            this.pizzaFormGroup.value.nombre = 'Seleccione una pizza';
          })
          .catch(err => {
            console.log('error al modificar pizza:', err)
          })
        this.pizzaFormGroup.reset();
        this.pizzaRecibidaModificar = new Pizza()
      }
      catch (err){
        console.log('Error al ejecutar la funcion modificar pizza', err);
      }
    }
    else {
      console.log('el form no es valido');
    }
  }

}
