import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear, countSelector, decrease, increase, updateAtSelector } from './reducers/counter';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updateAtSelector);

  constructor(private store: Store) {
  }

  increase(): void {
    this.store.dispatch(increase())
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  clear() {
    this.store.dispatch(clear());
  }
}
