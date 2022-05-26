import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.scss']
})
export class Parte2Component implements OnInit {

  token: any;
  repartidorSeleccionado!: Repartidor;
  seleccionado:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tomarRepartidor(repartidor: any)
  {
    this.repartidorSeleccionado=repartidor;
    this.seleccionado=true;
    console.log('Repartidor: '+this.repartidorSeleccionado)+', Seleccionado: '+this.seleccionado;
  }
}
