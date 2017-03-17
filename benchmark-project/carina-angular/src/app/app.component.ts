import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "./app.store";
import { CountersActions } from "./actions/counter.action";
import { Counter } from "./models/counter.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private counters: Observable<Counter[]>;

  constructor(
    private store: Store<AppState>,
    private countersActions: CountersActions) {
    this.counters = this.store.select('counters');
  }

  addCounter() {
    this.store.dispatch(this.countersActions.addCounter());
  }

  removeCounter(id: number) {
    this.store.dispatch(this.countersActions.removeCounter(id));
  }

  incrementCounter(id: number) {
    this.store.dispatch(this.countersActions.incrementCounter(id));
  }

  decrementCounter(id: number) {
    this.store.dispatch(this.countersActions.decrementCounter(id));
  }
}
