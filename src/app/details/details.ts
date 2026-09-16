import { Component , signal }         from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule }              from '@angular/material/card';
import { MatButtonModule }            from '@angular/material/button';
import { MatIconModule }              from '@angular/material/icon';
import { MatListModule }              from '@angular/material/list';
import { ToyModel }                   from '../../models/toy.model'
import { ToyService }                 from '../../services/toy.service'

@Component({
  imports:  [
            RouterLink,
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            MatListModule
            ],
  selector:     'app-details',
  styleUrl:     './details.css',
  templateUrl: './details.html',
})

export class Details {
  toy = signal<ToyModel | null>(null)
  public toyService = ToyService

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => this.toy.set(ToyService.getToyById(Number(params['id']))))
  }
}
