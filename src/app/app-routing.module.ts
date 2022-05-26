import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { AltaRepartidorComponent} from './page/alta-repartidor/alta-repartidor.component';
import { GuardianGuard } from './guard/guardian.guard';
import { Parte2Component } from './page/parte2/parte2.component';
import { Parte3Component } from './page/parte3/parte3.component';

const routes: Routes = [
  {path: 'bienvenida', component:BienvenidaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'altaRepartidor', component:AltaRepartidorComponent, canActivate: [GuardianGuard] },
  {path: 'parte2', component:Parte2Component, canActivate: [GuardianGuard] },
  {path: 'parte3', component:Parte3Component, canActivate: [GuardianGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
