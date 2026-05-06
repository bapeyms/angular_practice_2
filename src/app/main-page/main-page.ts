import { Component } from '@angular/core';
import { Sonya } from '../sonya/sonya';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [Sonya, RouterOutlet, RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
