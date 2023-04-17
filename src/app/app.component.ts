import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  counter = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase() {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease() {
    this.updatedAt = Date.now();
    this.counter--;
  }

  clear() {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
