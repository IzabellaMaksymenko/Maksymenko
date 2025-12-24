import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
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
export class ItemsListComponent {
  searchText = '';
  projects$!: Observable<WebProject[]>;

  constructor(private dataService: DataService) {
    this.projects$ = this.dataService.getItemsStream();
    this.dataService.filterItems('');
  }
}
