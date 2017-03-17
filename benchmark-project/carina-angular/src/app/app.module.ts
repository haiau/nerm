import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { countersReducer } from "./reducers/counter.reducer";
import { CountersActions } from "./actions/counter.action";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({counters: countersReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ CountersActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
