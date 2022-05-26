import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.scss']
})
export class ListadoRepartidorComponent implements OnInit {


  @Input() listadoRepartidores: Repartidor[] = [];
  @Output() repartidorSeleccionadoEvento: EventEmitter<any> = new EventEmitter<any>();

  listaRepartidores: any;
  cantidadRepartidores!: Number;

  auxPais!: string;

  constructor(private repartidorService: RepartidorService) {

  }

  ngOnInit(): void {

    //obtener los repartidores
    this.repartidorService.getRepartidores().subscribe(dataJson => {
      let listadoRepartidoresObtenidos = dataJson.map(objProdJson => {
        let repartidorObj = new Repartidor(objProdJson.dni, objProdJson.edad, objProdJson.nombre, objProdJson.capacidad, objProdJson.paisOrigen, objProdJson.unidadPropia);
        return repartidorObj;
      })
      this.listaRepartidores = listadoRepartidoresObtenidos;
      this.cantidadRepartidores = this.listaRepartidores.length;
    })

  }

  ver() {
    console.log(this.listaRepartidores)
  }

  mostrarDetalles(repartidor: Repartidor) {
    this.repartidorSeleccionadoEvento.emit(repartidor);
  }

}
