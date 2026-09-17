import { Component }              from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { Router, RouterLink }     from '@angular/router';
import { MatCardModule }          from '@angular/material/card';
import { MatInputModule }         from '@angular/material/input';
import { MatButtonModule }        from '@angular/material/button';
import { MatIconModule }          from '@angular/material/icon';
import { MatSelectModule }        from '@angular/material/select';

import { UserModel }              from '../../models/user.model';
import { AuthService }            from '../../services/auth.service';
import { ToyService }             from '../../services/toy.service';
import { Alerts }                 from '../alerts';

@Component({
  imports:  [
            FormsModule,
            RouterLink,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatSelectModule
            ],
  selector:     'app-signup',
  templateUrl:  './signup.html',
  styleUrl:     './signup.css',
})

export class Signup {
  public toyService = ToyService

  user: Partial<UserModel> = {
    firstName:    '',
    lastName:     '',
    email:        '',
    password:     '',
    phone:        '',
    address:      '',
    city:         '',
    favoriteType: ''
  }

  repeat: string = ''

  constructor(public router: Router) { }

  doSignup() {
    if ( this.user.firstName == '' || this.user.lastName == '' || this.user.phone        == ''
      || this.user.address   == '' || this.user.city     == '' || this.user.favoriteType == '') {
      Alerts.error('Sva polja moraju biti popunjena')
      return
    }

    if (this.user.email == '' || !this.user.email!.includes('@')) {
      Alerts.error('Email adresa nije ispravna')
      return
    }

    if (AuthService.existsByEmail(this.user.email!)) {
      Alerts.error('Email adresa je vec registrovana')
      return
    }

    if (this.user.password!.length < 6) {
      Alerts.error('Lozinka mora imati najmanje 6 karaktera')
      return
    }

    if (this.user.password !== this.repeat) {
      Alerts.error('Lozinke se ne poklapaju')
      return
    }

    AuthService.createUser(this.user)
    Alerts.success('Nalog je uspesno kreiran, mozete se prijaviti')
    this.router.navigate(['/login'])
  }
}