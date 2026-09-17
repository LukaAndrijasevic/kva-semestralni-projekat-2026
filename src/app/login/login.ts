import { Component }          from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule }      from '@angular/material/card';
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';

import { AuthService }        from '../../services/auth.service';
import { Alerts }             from '../alerts';

@Component({
  imports:  [
            FormsModule,
            RouterLink,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule
            ],
  selector:     'app-login',
  templateUrl:  './login.html',
  styleUrl:     './login.css',
})

export class Login {
  email:    string = 'luka@singidunum.com'
  password: string = 'singidunum123'

  constructor(private router: Router) {
    if (AuthService.getActiveUser()) {
      router.navigate(['/'])
    }
  }

  doLogin() {
    if (AuthService.login(this.email, this.password)) {
      this.router.navigate(['/'])
      return
    }

    Alerts.error('Pogresan email ili lozinka!')
  }
}