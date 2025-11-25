import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoryService } from '../../services/story';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './story-form.html',
})
export class StoryFormComponent {
  private storyService = inject(StoryService);

  storyName = '';
  storyPoints: number | null = null;
  storyPriority = 2;
  error = '';


  addStory() {
    if (!this.storyName || this.storyPoints == null) return;

    const success = this.storyService.addStory({
      name: this.storyName.trim(),
      points: this.storyPoints,
      priority : +this.storyPriority
    });

    if (!success) {
      this.error = 'Duplicate story name!';
    } else {
      this.error = '';
      this.storyName = '';
      this.storyPoints = null;
      this.storyPriority = 2;
    }
  }

}
