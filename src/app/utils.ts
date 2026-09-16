import { Injectable }        from '@angular/core';
import { ReservationModel }  from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS', {
      year:   'numeric',
      month:  '2-digit',
      day:    '2-digit',
      hour:   '2-digit',
      minute: '2-digit'
    })
  }

  calculateTotal(reservation: ReservationModel) {
    return reservation.price * reservation.count
  }

  getStateText(state: 'r' | 'p' | 'o') {
    if (state === 'r') return 'Rezervisano'
    if (state === 'p') return 'Pristiglo'
    return 'Otkazano'
  }
}