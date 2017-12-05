import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentService } from './commentService/comment.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentsFormComponent } from './comment-form/comment-form.component'

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }