import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentsComponent } from './comments.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
