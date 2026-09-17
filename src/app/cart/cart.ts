import { Component, HostListener } from '@angular/core';
import { Router, RouterLink }      from '@angular/router';
import { MatCardModule }           from '@angular/material/card';
import { MatTableModule }          from '@angular/material/table';
import { MatButtonModule }         from '@angular/material/button';
import { MatIconModule }           from '@angular/material/icon';

import { ReservationModel }        from '../../models/reservation.model';
import { AuthService }             from '../../services/auth.service';
import { ToyService }              from '../../services/toy.service';
import { Utils }                   from '../utils';
import { Alerts, matCustomClass }  from '../alerts';
import Swal                        from 'sweetalert2';

@Component({
  imports:  [
            RouterLink,
            MatCardModule,
            MatTableModule,
            MatButtonModule,
            MatIconModule
            ],
  selector:     'app-cart',
  templateUrl:  './cart.html',
  styleUrl:     './cart.css',
})

export class Cart {
  displayedColumns: string[] = []
  clientWidth: number = document.documentElement.clientWidth

  constructor(public router: Router, public utils: Utils) {
    if (!AuthService.getActiveUser()) {
      router.navigate(['/login'])
      return
    }

    this.resizeTable()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.clientWidth = (event.target as Window).document.documentElement.clientWidth
    this.resizeTable()
  }

  resizeTable() {
    if (this.clientWidth >= 1010) {
      this.displayedColumns = ['name', 'price', 'count', 'total', 'createdAt', 'options']
      return
    }

    if (this.clientWidth >= 780) {
      this.displayedColumns = ['name', 'price', 'count', 'total', 'options']
      return
    }

    if (this.clientWidth >= 560) {
      this.displayedColumns = ['name', 'total', 'options']
      return
    }

    this.displayedColumns = ['name', 'options']
  }

  getReserved() {
    return AuthService.getReservationsByState('r')
  }

  getReceived() {
    return AuthService.getReservationsByState('p')
  }

  getCanceled() {
    return AuthService.getReservationsByState('o')
  }

  calculateTotal() {
    let total = 0
    for (let r of this.getReserved()) {
      total += this.utils.calculateTotal(r)
    }

    return total
  }

  reloadComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/cart'])
      })
  }

  async editReservation(reservation: ReservationModel) {
    const result = await Swal.fire({
      title: `Izmena kolicine - ${reservation.name}`,
      input: 'number',
      inputValue: reservation.count,
      showCancelButton: true,
      confirmButtonText: 'Sacuvaj',
      cancelButtonText: 'Odustani',
      customClass: matCustomClass
    })

    if (!result.isConfirmed) {
      return
    }

    const count = Number(result.value)
    if (count < 1) {
      Alerts.error('Kolicina mora biti najmanje 1')
      return
    }

    AuthService.updateReservationCount(reservation.createdAt, count)
    this.reloadComponent()
  }

  async rateReservation(reservation: ReservationModel) {
    const ratingResult = await Swal.fire({
      title: `Ocena - ${reservation.name}`,
      input: 'select',
      inputOptions: {
        '1': '1 - Veoma lose',
        '2': '2 - Lose',
        '3': '3 - Osrednje',
        '4': '4 - Dobro',
        '5': '5 - Odlicno'
      },
      inputPlaceholder: 'Izaberite ocenu',
      showCancelButton: true,
      confirmButtonText: 'Dalje',
      cancelButtonText: 'Odustani',
      customClass: matCustomClass
    })

    if (!ratingResult.isConfirmed || !ratingResult.value) {
      return
    }

    const commentResult = await Swal.fire({
      title: 'Komentar',
      input: 'text',
      inputPlaceholder: 'Napisite par reci o igracki',
      showCancelButton: true,
      confirmButtonText: 'Posalji',
      cancelButtonText: 'Odustani',
      customClass: matCustomClass
    })

    if (!commentResult.isConfirmed) {
      return
    }

    const user = AuthService.getActiveUser()
    const author = `${user!.firstName} ${user!.lastName}`
    const rating = Number(ratingResult.value)
    const comment = commentResult.value == '' ? 'Bez komentara' : commentResult.value

    AuthService.rateReservation(reservation.createdAt, rating)
    ToyService.addReview(reservation.toyId, author, rating, comment)
    Alerts.success('Hvala na oceni!')
    this.reloadComponent()
  }

  cancelReservation(reservation: ReservationModel) {
    Alerts.confirm(`Da li zelite da otkazete rezervaciju za ${reservation.name}?`, () => {
      AuthService.cancelReservation(reservation.createdAt)
      this.reloadComponent()
    })
  }

  deleteReservation(reservation: ReservationModel) {
    Alerts.confirm(`Da li zelite da obrisete ${reservation.name} iz korpe?`, () => {
      AuthService.deleteReservation(reservation.createdAt)
      this.reloadComponent()
    })
  }

  deleteCanceled() {
    Alerts.confirm('Da li zelite da obrisete sve otkazane rezervacije?', () => {
      AuthService.deleteCanceledReservations()
      this.reloadComponent()
    })
  }

  receiveAll() {
    Alerts.confirm(`Da li potvrdjujete prijem svih rezervacija u iznosu od ${this.calculateTotal()} RSD?`, () => {
      AuthService.receiveReservations()
      this.reloadComponent()
    })
  }
}