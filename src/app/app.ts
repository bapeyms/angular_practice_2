import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sonya } from './sonya/sonya';
import { Olya } from './olya/olya';
import { Cake } from './cake/cake';
import { Katya } from './katya/katya';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sonya, Olya, Cake, Katya],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
