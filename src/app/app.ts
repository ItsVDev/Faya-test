import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { StudyCmp } from './components/study-cmp/study-cmp';
// import { TestColors } from './components/test-colors/test-colors';
import { StoryFormComponent } from './components/story-form/story-form';
import { StoryListComponent } from './components/story-list/story-list';
import { SprintFormComponent } from './components/sprint-form/sprint-form';
import { SelectedSprintComponent } from './components/selected-sprint/selected-sprint';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StoryFormComponent,
    StoryListComponent,
    SprintFormComponent,
    SelectedSprintComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FAYA-TEST');
}
