import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const COUNTER_KEY = 'counter';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');
export const changUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{ upDatedAt: number }>()
);

export interface CounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.upDatedAt
  }))
);

export const featureSelector
  = createFeatureSelector<CounterState>(COUNTER_KEY);
export const countSelector
  = createSelector(
    featureSelector,
    state => state.count
  );
  export const updateAtSelector = createSelector(
    featureSelector,
    state => state.updatedAt
  )
