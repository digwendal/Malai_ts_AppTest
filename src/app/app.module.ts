import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestButtonBinderComponent } from './test-button-binder/test-button-binder.component';
import { DateChoiceComponent } from './date-choice/date-choice.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DragLockTestComponent } from './drag-lock-test/drag-lock-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonBinderComponent,
    DateChoiceComponent,
    TextInputComponent,
    DragLockTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
