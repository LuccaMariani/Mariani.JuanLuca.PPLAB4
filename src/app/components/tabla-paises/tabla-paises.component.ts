import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() seSeleccionoPais: EventEmitter<any> = new EventEmitter<any>();

  mostrar:boolean=false;

  public listaPaises: Pais[] = []
  public bandera: string='';

  constructor(private apiService: ApisService) { }

  ngOnInit(): void {

    let name: string;
    let bandera: string;
    let capital:string;
    let poblacion:number;
    let nombreNativo:string;
    this.apiService.ObtenerPaises().subscribe((paises: any) => {

    for (let index = 5; index < 15  ; index++){
      console.log(paises[index]);
      name = paises[index].name.common;
      bandera = paises[index].flags.png;
      capital=paises[index].capital;
      poblacion=paises[index].population;
      nombreNativo=paises[index].name.official;
      this.listaPaises.push(new Pais(name, bandera,nombreNativo,capital,poblacion));
    }
    });
  }

  SeleccionarPais(pais: Pais) {
     this.mostrar=true;
    this.bandera = pais.bandera;
    this.seSeleccionoPais.emit(pais);
  }

}
