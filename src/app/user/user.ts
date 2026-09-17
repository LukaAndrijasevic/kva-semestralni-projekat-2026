import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { FormsModule }      from '@angular/forms';
import { MatCardModule }    from '@angular/material/card';
import { MatInputModule }   from '@angular/material/input';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';
import { MatSelectModule }  from '@angular/material/select';

import { AuthService }      from '../../services/auth.service';
import { ToyService }       from '../../services/toy.service';
import { Alerts }           from '../alerts';

@Component({
  imports:  [
            FormsModule,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatSelectModule
            ],
  selector:     'app-user',
  templateUrl:  './user.html',
  styleUrl:     './user.css',
})

export class User {
  public activeUser = AuthService.getActiveUser()
  public toyService = ToyService

  oldPassword = ''
  newPassword = ''
  passRepeat  = ''

  constructor(private router: Router) {
    if (!AuthService.getActiveUser()) {
      router.navigate(['/login'])
    }
  }

  getAvatarUrl() {
    return `https://ui-avatars.com/api/?name=${this.activeUser?.firstName}+${this.activeUser?.lastName}`
  }

  updateUser() {
    Alerts.confirm('Da li zelite da sacuvate izmene podataka?',
      () => {
        AuthService.updateActiveUser(this.activeUser!)
        Alerts.success('Podaci su uspesno sacuvani')
      })
  }

  updatePassword() {
    Alerts.confirm('Da li zelite da promenite lozinku?',
      () => {
        if (this.oldPassword != this.activeUser?.password) {
          Alerts.error('Stara lozinka nije tacna')
          return
        }

        if (this.newPassword.length < 6) {
          Alerts.error('Lozinka mora imati najmanje 6 karaktera')
          return
        }

        if (this.newPassword != this.passRepeat) {
          Alerts.error('Lozinke se ne poklapaju')
          return
        }

        if (this.newPassword == this.activeUser?.password) {
          Alerts.error('Nova lozinka ne sme biti ista kao stara')
          return
        }

        AuthService.updateActiveUserPassword(this.newPassword)
        Alerts.success('Lozinka je uspesno promenjena')
        AuthService.logout()
        this.router.navigate(['/login'])
      })
  }
}