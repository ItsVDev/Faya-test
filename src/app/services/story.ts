import { Injectable, signal, computed } from '@angular/core';

export interface Story {
  name: string;
  points: number;
  priority: number;
}

@Injectable({ providedIn: 'root' })
export class StoryService {
  stories = signal<Story[]>([]);
  selectedStories = signal<Story[]>([]);

  totalPoints = computed(() =>
    this.selectedStories().reduce((sum, s) => sum + s.points, 0)
  );

  addStory(story: Story): boolean {
    if (
      this.stories().some(
        s => s.name.trim().toLowerCase() === story.name.trim().toLowerCase()
      )
    ) {
      return false;
    }
    this.stories.update(stories => [...stories, story]);
    return true;
  }

  clearStories() {
    this.stories.set([]);
    this.selectedStories.set([]);
  }

  clearSelectedStories() {
    this.selectedStories.set([]);
  }

    generateSprint(capacity: number) {
    const sorted = [...this.stories()].sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return b.points - a.points;
    });

    const selected: Story[] = [];
    let total = 0;

    for (const s of sorted) {
      if (total + s.points <= capacity) {
        selected.push(s);
        total += s.points;
      }
    }

    this.selectedStories.set(selected);
  }
}
