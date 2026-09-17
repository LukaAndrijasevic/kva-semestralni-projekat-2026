import { Component, signal }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { FormsModule }              from '@angular/forms';
import { MatCardModule }            from '@angular/material/card';
import { MatInputModule }           from '@angular/material/input';
import { MatButtonModule }          from '@angular/material/button';
import { MatIconModule }            from '@angular/material/icon';
import { MatListModule }            from '@angular/material/list';

import { ToyModel }                 from '../../models/toy.model';
import { ReservationModel }         from '../../models/reservation.model';
import { ToyService }               from '../../services/toy.service';
import { AuthService }              from '../../services/auth.service';
import { Alerts }                   from '../alerts';

@Component({
  imports:  [
            FormsModule,
            MatCardModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            MatListModule
            ],
  selector:     'app-reservation',
  templateUrl:  './reservation.html',
  styleUrl:     './reservation.css',
})

export class Reservation {
  toy = signal<ToyModel | null>(null)
  public toyService = ToyService

  reservation: Partial<ReservationModel> = {
    count: 1
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    if (!AuthService.getActiveUser()) {
      this.router.navigate(['/login'])
      return
    }

    this.route.params.subscribe(params => {
      const toy = ToyService.getToyById(Number(params['id']))
      if (!toy) {
        this.router.navigate(['/'])
        return
      }

      this.toy.set(toy)
    })
  }

  calculateTotal() {
    return this.toy()!.price * this.reservation.count!
  }

  placeReservation() {
    if (this.reservation.count! < 1) {
      Alerts.error('Kolicina mora biti najmanje 1')
      return
    }

    Alerts.confirm(`Da li zelite da rezervisete igracku za ${this.calculateTotal()} RSD?`, () => {
      AuthService.createReservation(this.reservation, this.toy()!)
      Alerts.success('Igracka je uspesno rezervisana')
      this.router.navigate(['/cart'])
    })
  }
}