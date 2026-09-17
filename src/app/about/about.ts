import { Component }      from '@angular/core';
import { MatCardModule }  from '@angular/material/card';
import { MatListModule }  from '@angular/material/list';
import { MatIconModule }  from '@angular/material/icon';

@Component({
  imports:  [
            MatCardModule,
            MatListModule,
            MatIconModule
            ],
  selector:     'app-about',
  templateUrl:  './about.html',
  styleUrl:     './about.css',
})

export class About {

}