import { Component }                from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports:  [
            RouterOutlet, 
            RouterLink
            ],
  
  selector:     'app-root',
  templateUrl:  './app.html',
  styleUrl:     './app.css'
})
export class App {
  year = new Date().getFullYear()
}