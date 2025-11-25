import { Component, effect } from '@angular/core';
import { StoryService } from '../../services/story';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [],
  templateUrl: './story-list.html',
  styleUrl: './story-list.scss',
})
export class StoryListComponent {
  constructor(public storyService: StoryService) {
    effect(() => {
      console.log('Story list changed:', this.storyService.stories());
    });
  }
  getPriorityLabel(priority: number) {
    return ['High', 'Medium', 'Low'][priority - 1] ?? 'Unknown';
  }

  getPriorityClass(priority: number) {
    return [
      'bg-red-100 text-red-700',
      'bg-yellow-100 text-yellow-700',
      'bg-green-100 text-green-700',
    ][priority - 1] ?? 'bg-gray-100 text-gray-700';
  }
}
