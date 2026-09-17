import { Component, signal }          from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule }                from '@angular/forms';
import { MatCardModule }              from '@angular/material/card';
import { MatButtonModule }            from '@angular/material/button';
import { MatIconModule }              from '@angular/material/icon';
import { MatInputModule }             from '@angular/material/input';
import { MatSelectModule }            from '@angular/material/select';
import { MatChipsModule }             from '@angular/material/chips';

import { ToyModel }                   from '../../models/toy.model';
import { ToyService }                 from '../../services/toy.service';
import { AuthService }                from '../../services/auth.service';

@Component({
  imports:  [
            RouterLink,
            FormsModule,
            MatCardModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule,
            MatChipsModule
            ],
  selector:     'app-store',
  templateUrl:  './store.html',
  styleUrl:     './store.css',
})

export class Store {
  toys = signal<ToyModel[]>([])
  filteredToys = signal<ToyModel[]>([])
  public toyService = ToyService

  search      = ''
  type        = ''
  targetGroup = ''
  year        = ''
  minAge      = ''
  maxPrice    = ''
  minRating   = ''
  sort        = ''

  constructor(route: ActivatedRoute) {
    this.toys.set(ToyService.getToys())
    this.filteredToys.set(ToyService.getToys())

    route.queryParams.subscribe(params => {
      if (params['type']) {
        this.type = params['type']
        this.filter()
      }
    })
  }

  filter() {
    const filtered = this.toys()
      .filter(t => {
        if (this.search == '') return true
        const q = this.search.toLowerCase()
        return t.name.toLowerCase().includes(q)   ||
          t.description.toLowerCase().includes(q) ||
          t.type.toLowerCase().includes(q)
      })
      .filter(t => {
        if (this.type == '') return true
        return t.type == this.type
      })
      .filter(t => {
        if (this.targetGroup == '') return true
        return t.targetGroup == this.targetGroup
      })
      .filter(t => {
        if (this.minAge == '') return true
        return t.minAge <= Number(this.minAge)
      })
      .filter(t => {
        if (this.maxPrice == '') return true
        return t.price <= Number(this.maxPrice)
      })
      .filter(t => {
        if (this.minRating == '') return true
        return ToyService.getAverageRating(t) >= Number(this.minRating)
      })
      .filter(t => {
        if (this.year == '') return true
        return t.manufacturedAt.substring(0,4) == this.year
      })

    this.filteredToys.set(filtered)
  }

  resetFilters() {
    this.search       = ''
    this.type         = ''
    this.targetGroup  = ''
    this.year         = ''
    this.minAge       = ''
    this.maxPrice     = ''
    this.minRating    = ''
    this.sort         = ''
    this.filteredToys.set(this.toys())
  }

  applySort() {
    const sorted = [...this.filteredToys()]

    if (this.sort == 'price-asc')  sorted.sort((a, b) => a.price - b.price)
    if (this.sort == 'price-desc') sorted.sort((a, b) => b.price - a.price)
    if (this.sort == 'rating')     sorted.sort((a, b) => ToyService.getAverageRating(b) - ToyService.getAverageRating(a))
    if (this.sort == 'name')       sorted.sort((a, b) => a.name.localeCompare(b.name))

    this.filteredToys.set(sorted)
  }

  isLoggedIn() {
    return AuthService.getActiveUser() != null
  }

  showFavorite() {
    const user = AuthService.getActiveUser()
    this.type = user!.favoriteType
    this.filter()
  }
}