import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { WebProject } from '../../items-list/items-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemsSubject = new BehaviorSubject<WebProject[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  private loadItems(): void {
    this.http
      .get<any[]>('/products')
      .pipe(
        map((items) =>
          items.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            img: item.image,
          })),
        ),
        catchError((error) => {
          console.error('Помилка отримання даних', error);
          // Додаємо повідомлення для користувача
          alert('❌ Не вдалося завантажити дані. Спробуйте пізніше.');
          return throwError(() => new Error('Не вдалося завантажити дані'));
        }),
      )
      .subscribe((data) => this.itemsSubject.next(data));
  }

  getItemsStream(): Observable<WebProject[]> {
    return this.items$;
  }

  getItemById(id: number): Observable<WebProject | undefined> {
    return this.items$.pipe(map((items) => items.find((item) => item.id === id)));
  }

  addItem(item: WebProject): Observable<WebProject> {
    return this.http.post<WebProject>('/products', item).pipe(
      catchError((error) => {
        console.error('Помилка додавання елемента', error);
        // Додаємо повідомлення для користувача
        alert('❌ Не вдалося додати елемент. Спробуйте пізніше.');
        return throwError(() => new Error('Не вдалося додати елемент'));
      }),
    );
  }

  filterItems(query: string): void {
    const q = query.toLowerCase();
    const filtered = this.itemsSubject.value.filter(
      (item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
    );
    this.itemsSubject.next(filtered);
  }
}
