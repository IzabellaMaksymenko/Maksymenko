import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { ItemsListComponent } from './items-list/items-list';
import { ItemDetailsComponent } from './item-details/item-details';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full',
      },
      {
        path: 'items',
        component: ItemsListComponent,
      },
      {
        path: 'items/:id',
        component: ItemDetailsComponent,
      },
    ],
  },
];
