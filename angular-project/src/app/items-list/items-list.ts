import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ItemCardComponent } from '../item-card/item-card';
import { DataService } from '../shared/services/data.service';

export interface WebProject {
  id: number;
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsListComponent implements OnInit, OnDestroy {
  searchText = '';

  projects: WebProject[] = [];

  private itemsSub?: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.itemsSub = this.dataService.getItemsStream().subscribe((items) => {
      this.projects = items;
    });

    this.dataService.filterItems('');
  }

  ngOnDestroy(): void {
    if (this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }

  get filteredItems(): WebProject[] {
    if (!this.searchText) {
      return this.projects;
    }

    return this.projects.filter((project) =>
      project.title.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  onItemSelected(item: WebProject) {
    console.log('Обрано елемент:', item);
  }
}
