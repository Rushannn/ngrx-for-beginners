import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { increase, decrease, clear, changUpdatedAt } from './reducers/counter';
import { map } from 'rxjs';

@Injectable()
export class AppEffects {

  updatetAt = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, clear),
    map(() => changUpdatedAt({upDatedAt:Date.now()}))
  ))

  constructor(private actions$: Actions) { };

}
