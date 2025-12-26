import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsListComponent } from './items-list';
import { DataService } from '../shared/services/data.service';
import { of } from 'rxjs';
import { WebProject } from './items-list';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemsListComponent (integration)', () => {
  let fixture: ComponentFixture<ItemsListComponent>;

  const mockDataService: Partial<DataService> = {
    getItemsStream: () =>
      of<WebProject[]>([
        {
          id: 1,
          title: 'Integration Test',
          description: 'Test Desc',
          img: 'img.png',
        },
      ]),
    filterItems: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ItemsListComponent,
        RouterTestingModule,
      ],
      providers: [{ provide: DataService, useValue: mockDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListComponent);
    fixture.detectChanges();
  });

  it('should render item from DataService', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Integration Test');
  });
});
