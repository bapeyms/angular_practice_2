import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sonya',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './sonya.html',
  styleUrl: './sonya.css',
})
export class Sonya {

  currentRoute = '';

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      this.updateBackground(url);
    });
  }
  updateBackground(url: string) {
    if (url.includes('marinaHawaiiTravel')) {
      this.currentRoute = 'bg-marina';
    } else if (url.includes('howToGetToTheHawaii')) {
      this.currentRoute = 'bg-cake';
    } else if (url.includes('contacts')) {
      this.currentRoute = 'bg-katya';
    } else {
      this.currentRoute = 'bg-olya';
    }
  }
}
