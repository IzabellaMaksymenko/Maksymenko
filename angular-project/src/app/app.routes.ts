import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { ItemsListComponent } from './items-list/items-list';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ItemsListComponent,
      },
    ],
  },
];
