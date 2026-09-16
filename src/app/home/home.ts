import { Component, signal }  from '@angular/core';
import { RouterLink }         from '@angular/router';
import { MatCardModule }      from '@angular/material/card';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';
import { ToyModel }           from '../../models/toy.model';
import { ToyService }         from '../../services/toy.service';

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
  toys = signal<ToyModel[]>([])
  public toyService = ToyService

  constructor() {
    this.toys.set(ToyService.getToys())
  }
}