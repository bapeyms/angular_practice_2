import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sonya',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './sonya.html',
  styleUrl: './sonya.css',
})
export class Sonya {
  constructor(public router: Router) {}
}
