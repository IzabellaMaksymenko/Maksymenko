import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { WebProject } from '../../items-list/items-list';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load items from API and map them correctly', () => {
    const mockApiResponse = [
      {
        id: 1,
        title: 'Test Project',
        description: 'Description',
        image: 'img.png',
      },
    ];

    service.getItemsStream().subscribe((items: WebProject[]) => {
      // ⚠ BehaviorSubject спочатку віддає []
      if (items.length) {
        expect(items.length).toBe(1);
        expect(items[0].title).toBe('Test Project');
      }
    });

    const req = httpMock.expectOne('/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });
});
