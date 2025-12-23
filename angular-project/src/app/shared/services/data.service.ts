import { Injectable } from '@angular/core';
import { WebProject } from '../../items-list/items-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private projects: WebProject[] = [
    {
      id: 1,
      title: 'Landing Page – Travel Agency',
      description: 'Сучасний адаптивний лендінг з акцентом на UX та візуальну ієрархію.',
      img: 'https://picsum.photos/500/300?random=11',
    },
    {
      id: 2,
      title: 'Mobile App UI – Fitness Tracker',
      description: 'Світла мобільна UI-система з компонентами та іконками.',
      img: 'https://picsum.photos/500/300?random=12',
    },
    {
      id: 3,
      title: 'E-Commerce Redesign – Fashion Store',
      description: 'Редизайн магазину одягу з фокусом на мінімалізм та типографію.',
      img: 'https://picsum.photos/500/300?random=13',
    },
  ];

  getItems(): WebProject[] {
    return this.projects;
  }
}
