import { Component, signal }                from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  imports:  [
            RouterOutlet, 
            RouterLinkWithHref
            ],
  selector:     'app-root',
  templateUrl:  './app.html',
  styleUrl:     './app.css'
})
export class App {
  protected readonly title = signal('klijentske-veb-aplikacije-2026');
  ime     = 'Luka'
  prezime = 'Andrijasevic'
  indeks  = '2021203137'
}
