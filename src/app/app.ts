import { Component, signal } from '@angular/core';
import { Header } from './Components/header/header';
import { Slider } from './Components/slider/slider';
import { TaskProject } from './Components/task-project/task-project';

@Component({
  selector: 'app-root',
  imports: [Header, Slider, TaskProject],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularSmartPractice');
}
