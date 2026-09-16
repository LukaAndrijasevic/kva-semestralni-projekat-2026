import { Component }                        from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MatToolbarModule }                 from '@angular/material/toolbar';
import { MatButtonModule }                  from '@angular/material/button';
import { MatMenuModule }                    from '@angular/material/menu';
import { MatIconModule }                    from '@angular/material/icon';
import { AuthService }                      from '../services/auth.service';

@Component({
  imports:  [
            RouterOutlet,
            RouterLinkWithHref,
            MatToolbarModule,
            MatButtonModule,
            MatMenuModule,
            MatIconModule
            ],

  selector:     'app-root',
  templateUrl:  './app.html',
  styleUrl:     './app.css'
})
export class App {
  year = new Date().getFullYear()
  public authService = AuthService

  doLogout() {
    AuthService.logout()
    location.reload()
  }
}