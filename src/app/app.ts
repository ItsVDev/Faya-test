import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { StudyCmp } from './components/study-cmp/study-cmp';
import { TestColors } from './components/test-colors/test-colors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TestColors],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-study');
}
