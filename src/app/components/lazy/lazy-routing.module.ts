import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from 'src/app/guard/guardian.guard';
import { AltaRepartidorComponent } from 'src/app/page/alta-repartidor/alta-repartidor.component';
import { Parte2Component } from 'src/app/page/parte2/parte2.component';




const routes: Routes = [
  
  { path: 'altaRepartidor', component: AltaRepartidorComponent, canActivate: [GuardianGuard] },
  { path: 'parte2', component: Parte2Component, canActivate: [GuardianGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
