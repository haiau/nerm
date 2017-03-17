import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CountersActions {
    static ADD_COUNTER = "ADD_COUNTER";
    addCounter(): Action {
      return {
        type: CountersActions.ADD_COUNTER
      }
    }

    static REMOVE_COUNTER = "REMOVE_COUNTER";
    removeCounter(id: number): Action {
      return {
        type: CountersActions.REMOVE_COUNTER,
        payload: id
      }
    }

    static INCREMENT_COUNTER = "INCREMENT_COUNTER";
    incrementCounter(id: number): Action {
      return {
        type: CountersActions.INCREMENT_COUNTER,
        payload: id
      }
    }

  static DECREMENT_COUNTER = "DECREMENT_COUNTER";
  decrementCounter(id: number): Action {
    return {
      type: CountersActions.DECREMENT_COUNTER,
      payload: id
    }
  }
}