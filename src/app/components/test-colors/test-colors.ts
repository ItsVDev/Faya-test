import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ColorService, ColorItem } from '../../services/color';

@Component({
  standalone: true,
  selector: 'app-test-colors',
  imports: [CommonModule],
  templateUrl: './test-colors.html',
  styleUrl: './test-colors.scss',
})
export class TestColors {

  private colorService = inject(ColorService);

  jsonData: ColorItem[] = this.colorService.getColors();

  tabs = signal<string[]>([]);
  activeTab = signal<string>('');

  constructor() {
    const uniqueTypes = [...new Set(this.jsonData.map((item) => item.type))];
    this.tabs.set(uniqueTypes);
    if (uniqueTypes.length > 0) {
      this.activeTab.set(uniqueTypes[0]);
    }
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  filteredData = computed(() => {
    const currentTab = this.activeTab();
    const data = this.jsonData;

    return currentTab
      ? data.filter(item => item.type === currentTab)
      : [];
  });

}