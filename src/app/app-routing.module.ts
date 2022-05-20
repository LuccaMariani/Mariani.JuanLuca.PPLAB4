import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { AltaRepartidorComponent} from './page/alta-repartidor/alta-repartidor.component';
import { GuardianGuard } from './guard/guardian.guard';

const routes: Routes = [
  {path: 'bienvenida', component:BienvenidaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'altaRepartidor', component:AltaRepartidorComponent, canActivate: [GuardianGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
