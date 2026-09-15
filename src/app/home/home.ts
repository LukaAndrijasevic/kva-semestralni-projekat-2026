import { Component, signal }  from '@angular/core';
import { ToyModel }           from '../../models/toy.model';
import { ToyService }         from '../../services/toy.service';

@Component({
  imports:  [

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