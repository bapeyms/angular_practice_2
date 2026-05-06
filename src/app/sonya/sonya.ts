import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-sonya',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './sonya.html',
  styleUrl: './sonya.css',
})
export class Sonya {

  currentRoute = '';

  constructor(public router: Router) {
    this.router.events.subscribe(event =>
      if(event instanceof NavigationEnd) {
        this.currentRoute = this.router.url
      }
    )
  }

}
