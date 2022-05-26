import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { Input } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-detalle-repartidor-pais',
  templateUrl: './detalle-repartidor-pais.component.html',
  styleUrls: ['./detalle-repartidor-pais.component.scss']
})
export class DetalleRepartidorPaisComponent implements OnInit {

  @Input() repartidorSeleccionadoRecibido : Repartidor = new Repartidor();

  nombre!:string;
  capital!:string;
  poblacion!:number;
  bandera!:any; 
  nombreNativo!:string;

  constructor(private apiService: ApisService) { }

  ngOnInit(){
  }

  ngOnChanges(): void {
    //console.log("nombre pais:");
    //console.log(this.repartidorSeleccionadoRecibido?.paisOrigen);
    this.apiService.ObtenerPaisPorNombre(this.repartidorSeleccionadoRecibido?.paisOrigen).subscribe((pais: any) => {
        this.nombre = pais[0].name.common;
        this.bandera = pais[0].flags.png;
        this.capital=pais[0].capital;
        this.poblacion=pais[0].population;
        this.nombreNativo=pais[0].name.official;
    });

  }

  ver() {
    console.log(this.repartidorSeleccionadoRecibido?.paisOrigen);
  }

}
