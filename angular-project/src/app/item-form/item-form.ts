import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { WebProject } from '../items-list/items-list';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css'],
})
export class ItemFormComponent {
  itemForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    img: new FormControl<string>('', Validators.required),
  });

  constructor(
    private dataService: DataService,
    private router: Router,
  ) {}

  onSubmit(): void {
    if (this.itemForm.valid) {
      const newItem: WebProject = {
        id: Date.now(),
        title: this.itemForm.value.title!,
        description: this.itemForm.value.description!,
        img: this.itemForm.value.img!,
      };

      this.dataService.addItem(newItem);
      this.router.navigate(['/items']);
    }
  }

  get title() {
    return this.itemForm.get('title');
  }

  get description() {
    return this.itemForm.get('description');
  }

  get img() {
    return this.itemForm.get('img');
  }
}
