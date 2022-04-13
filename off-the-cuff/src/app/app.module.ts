import { CommentsService } from './comments/comments.service';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

import { HttpClient} from '@angular/common/http';
import {freeApiService} from './services/freeapi.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CommentsComponent,
    UserFormComponent,
    HttpClient
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    CommentsService,
    freeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
