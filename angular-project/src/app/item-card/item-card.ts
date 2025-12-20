import { Component, Input } from '@angular/core';
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
  @Input()
  item!: WebProject;
}
