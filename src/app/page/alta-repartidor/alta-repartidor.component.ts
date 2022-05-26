import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApisService } from 'src/app/services/apis.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Repartidor } from 'src/app/clases/repartidor';
import { Pais } from 'src/app/clases/pais';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent implements OnInit {


  /*
  codigo: string='';
  descripcion: string='';
  precio: string='';
  stock: number=0;
  
  comestible: boolean=false;
  
  nombre: any;
  public repartidorForm: FormGroup;
  hizoClick:boolean=false;

  basePath = '/images';
  downloadableURL = '';
  */

  public repartidorForm!: FormGroup;
  paisOrigen: string='';
  pais?: Pais;
  nombrePais: any;
  //repartidor = new Repartidor();

  constructor(private fb:FormBuilder,private repartidorService: RepartidorService,private route: Router,private authService: AuthService, private db: AngularFirestore, private api: ApisService) { }

  ngOnInit(): void {
    this.repartidorForm = this.initForm();
  }
  
  onSubmit():void{ 
    console.log('Form:'+this.repartidorForm);
  }

  initForm():FormGroup{
    //declarar las propiedades del form con FormBuilder
    return this.fb.group({
      dni:['', [Validators.required,Validators.min(1000000), Validators.max(100000000)]],
      nombre:['', [Validators.required]],
      edad:['', [Validators.required]],
      capacidad:['', [Validators.required]],
      propia:['', [Validators.required]],
      paisOrigen:['', [Validators.required]],
    })
  }

  seleccionarPais(p : any) {
    console.log(p.nombre);
    this.pais = p;
    this.nombrePais = p.nombre;
    this.repartidorForm.get('paisOrigen')?.setValue(p.nombre);

  }

  crearRepartidor(){
    if(this.repartidorForm.valid){
      //let Repartidor = new Repartidor(this.descripcion, this.precio, this.stock, this.paisOrigen, this.comestible);
      let repartidor = new Repartidor(
        this.repartidorForm.get('dni')?.value, 
        this.repartidorForm.get('edad')?.value,
        this.repartidorForm.get('nombre')?.value,  
        this.repartidorForm.get('capacidad')?.value, 
        this.repartidorForm.get('paisOrigen')?.value,
        this.repartidorForm.get('propia')?.value);
      this.repartidorService.guardarRepartidor(repartidor).then(resp => {
      });
    }
    else{
    }
  }
}
