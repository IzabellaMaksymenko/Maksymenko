import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebProject } from '../items-list/items-list';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css'],
})
export class ItemCardComponent {
  @Input() item!: WebProject;

  @Output() itemSelected = new EventEmitter<WebProject>();

  onDetailsClick() {
    this.itemSelected.emit(this.item);
  }
}
