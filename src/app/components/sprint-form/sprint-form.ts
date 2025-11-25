import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoryService } from '../../services/story';

@Component({
  selector: 'app-sprint-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sprint-form.html',
  styleUrl: './sprint-form.scss',
})
export class SprintFormComponent {
  capacity = 0;

  constructor(private storyService: StoryService) {}

  generateSprint() {
    this.storyService.generateSprint(this.capacity);
  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    this.storyService.clearSelectedStories();
  }
}
