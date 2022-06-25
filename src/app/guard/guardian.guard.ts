import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { async, ConnectableObservable, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../clases/usuario';
import { map, take } from 'rxjs/operators';
import { RESTORED_VIEW_CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';


@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate, CanDeactivate<unknown> {

  public email: any;
  public usuario = { "mail": '' };
  public data: any;
  public res: any;

  constructor(private authService: AuthService, private router: Router) {


  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    await this.authService.whoIsLoggedIn().subscribe((usuario) => {
      if (usuario != null) {
        console.log('aaa', usuario.email)
        if (usuario.email != "admin@gmail.com") {
          this.router.navigateByUrl('bienvenida');
        }
        
      } else {
        this.router.navigateByUrl('bienvenida');
      }
    });

    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
function tap(arg0: (auth: any) => void): import("rxjs").OperatorFunction<boolean, unknown> {
  throw new Error('Function not implemented.');
}

