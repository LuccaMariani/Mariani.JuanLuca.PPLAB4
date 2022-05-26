import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { async, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private uthService: AuthService,private router: Router){ 

    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('GUARD esta logeado:'+this.uthService.estaLogueado);
      console.log('GUARD esta admin:'+this.uthService.estaAdmin);
      //console.log('GUARD esta loged:'+this.uthService.estaLogued());
      console.log('GUARD quien esta loged:',this.uthService.whoIsLoggedIn());
      //"userLogged|async as usuario"
      if(this.uthService.estaLogueado)
      {
        return true;
      }else{
        //this.router.navigate(['login']);
        return true;
      }
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
