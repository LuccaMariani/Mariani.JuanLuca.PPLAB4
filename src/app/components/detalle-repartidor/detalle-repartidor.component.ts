import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { Input } from '@angular/core';
@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.scss']
})
export class DetalleRepartidorComponent implements OnInit {

  @Input() repartidorSeleccionadoRecibido : Repartidor= new Repartidor();

  constructor() { } 

  ngOnInit(): void {
    //console.log('nombre:'+this.repartidorSeleccionadoRecibido.nombre);
  }

  OnChanges(){
    console.log('nombre:'+this.repartidorSeleccionadoRecibido.nombre);
  }

  ver() {
    console.log(this.repartidorSeleccionadoRecibido);
  }
}
