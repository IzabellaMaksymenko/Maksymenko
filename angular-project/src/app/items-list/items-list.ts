import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';

export interface WebProject {
  id: number;
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsListComponent {
  projects: WebProject[] = [
    {
      id: 1,
      title: 'Landing Page — Travel Agency',
      description: 'Сучасний адаптивний лендинг з акцентом на UX та візуальну ієрархію.',
      img: 'https://picsum.photos/500/300?random=11',
    },
    {
      id: 2,
      title: 'Mobile App UI — Fitness Tracker',
      description: 'Світла мобільна UI-система з компонентами та іконками.',
      img: 'https://picsum.photos/500/300?random=12',
    },
    {
      id: 3,
      title: 'E-Commerce Redesign — Fashion Store',
      description: 'Редизайн магазину одягу з фокусом на мінімалізм та типографію.',
      img: 'https://picsum.photos/500/300?random=13',
    },
  ];
}
