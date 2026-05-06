import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sonya } from './sonya/sonya';
import { Olya } from './olya/olya';
import { Cake } from './cake/cake';
import { Katya } from './katya/katya';
import { MainPage } from './main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sonya, Olya, Cake, Katya, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
