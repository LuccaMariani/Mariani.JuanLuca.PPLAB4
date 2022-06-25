import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';


import { GuardianGuard } from './guard/guardian.guard';
import { Parte3Component } from './page/parte3/parte3.component';

const routes: Routes = [
  {
    path: 'repartidores',
    loadChildren: () => import('./components/lazy/lazy.module').then(n => n.LazyModule)
  },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parte3', component: Parte3Component, canActivate: [GuardianGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
