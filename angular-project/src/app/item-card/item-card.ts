import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebProject } from '../items-list/items-list';
import { HoverHighlightDirective } from '../shared/directives/hover-highlight.directive';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, HoverHighlightDirective, TruncatePipe],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css'],
})
export class ItemCardComponent {
  @Input() item!: WebProject;
}
