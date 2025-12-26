import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardComponent } from './item-card';
import { WebProject } from '../items-list/items-list';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ItemCardComponent,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;

    component.item = {
      id: 1,
      title: 'Test Title',
      description: 'Test Description',
      img: 'test.png',
    } as WebProject;

    fixture.detectChanges();
  });

  it('should display item title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Title');
  });
});
