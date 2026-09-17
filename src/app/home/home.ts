import { Component }        from '@angular/core';
import { RouterLink }       from '@angular/router';
import { MatCardModule }    from '@angular/material/card';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';

import { ToyService }       from '../../services/toy.service';
import { AuthService }      from '../../services/auth.service';

@Component({
  imports:  [
            RouterLink,
            MatCardModule,
            MatButtonModule,
            MatIconModule
            ],
  selector:     'app-home',
  templateUrl:  './home.html',
  styleUrl:     './home.css',
})

export class Home {
  public toyService = ToyService
  public authService = AuthService

  getTopRated() {
    return ToyService.getToys()
      .filter(t => t.reviews.length > 0)
      .sort((a, b) => ToyService.getAverageRating(b) - ToyService.getAverageRating(a))
      .slice(0, 3)
  }

  getTypeIcon(type: string) {
    if (type == 'Slagalica')          return 'extension'
    if (type == 'Figura')             return 'pets'
    if (type == 'Vozilo')             return 'directions_car'
    if (type == 'Drustvena igra')     return 'casino'
    if (type == 'Edukativna igracka') return 'school'
    if (type == 'Slikovnica')         return 'menu_book'
    if (type == 'Kreativni set')      return 'palette'
    return 'smart_toy'
  }
}