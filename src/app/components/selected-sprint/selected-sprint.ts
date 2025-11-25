import { Component, effect } from '@angular/core';
import { StoryService } from '../../services/story';

@Component({
  selector: 'app-selected-sprint',
  standalone: true,
  imports: [],
  templateUrl: './selected-sprint.html',
  styleUrl: './selected-sprint.scss',
})
export class SelectedSprintComponent {
  constructor(public storyService: StoryService) {
    effect(() => {
      console.log('Selected Sprint updated:', this.storyService.selectedStories());
    });
  }
}
