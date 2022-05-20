import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimerParcialLaboratorio4';
  
  userLogged=this.authService.isLoggedIn();

  constructor(private authService: AuthService) { }

  LogOut(){
    this.authService.logout();
  }
}
