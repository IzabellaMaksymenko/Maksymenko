import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { ItemsListComponent } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ItemsListComponent],
})
export class LayoutComponent {}
