import { Component, inject } from '@angular/core';
import { BookGQL, OnBookRecievedGQL } from './generated/generated.model';

@Component({
  selector: 'app-root',
  imports: [],
  template: ''
})
export class AppComponent {
  title = 'apolloExample';

  // This one works! (with authentiaction enabled on the server side)
  public booksQuery = inject(BookGQL)
    .watch()
    .valueChanges
    .subscribe({
      next: data => {
        console.log(data);
      }
    });

  // This one is not working.
  // it works if authentication is disabled on the server side.
  public booksSubscription = inject(OnBookRecievedGQL)
    .subscribe()
    .subscribe({
      next: data => {
        console.log(data);
      }
    });
}
