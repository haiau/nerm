import { Action } from "@ngrx/store";

import { Counter } from "../models/counter.model";
import { CountersActions } from '../actions/counter.action';

let id = 0;
let initialCounterState: Counter[] = [];

// for (let i=1; i<=1000; i++) {
// 	initialCounterState.push(new Counter[i]);
// }


export function countersReducer(state: Counter[] = initialCounterState, action: Action) {
  switch (action.type) {
    case CountersActions.ADD_COUNTER:
      return [...state, new Counter(id++)];

    case CountersActions.REMOVE_COUNTER:
      return state.filter(c => c.getId() !== action.payload);

    case CountersActions.INCREMENT_COUNTER:
      state.filter(c => c.getId() === action.payload).forEach(c => c.increment());
      return state;

    case CountersActions.DECREMENT_COUNTER:
      state.filter(c => c.getId() === action.payload).forEach(c => c.decrement());
      return state;

    default:
      return state;
  }
}