import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestButtonBinderComponent } from './test-button-binder/test-button-binder.component';
import { DateChoiceComponent } from './date-choice/date-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonBinderComponent,
    DateChoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
