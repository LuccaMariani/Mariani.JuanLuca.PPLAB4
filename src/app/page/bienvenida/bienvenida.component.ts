import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  public nombre='' ;
  public foto='';
  public url='';
  public seguidores='';

  
  constructor(private apiService: ApisService) { 

  }

  ngOnInit(): void {

    this.apiService.ObtenerGitHub().subscribe((datosUsuario: any) => {
      this.nombre=datosUsuario.login;
      this.foto= datosUsuario.avatar_url;
      this.url=datosUsuario.url;
      this.seguidores=datosUsuario.followers;

      console.log('Nombre: '+this.nombre+', Foto: '+this.foto+', Url: '+this.url+', Seguidores: '+this.seguidores);
    }, error=>{console.log(error);})

  }

}
