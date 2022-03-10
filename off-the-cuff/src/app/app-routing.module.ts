import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CommentsComponent } from './comments/comments.component';
import { AddCommentsComponent } from './addcomments/add-comments/add-comments.component';
import { CommentsDetailComponent } from './commentsdetail/comments-detail/comments-detail.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-comment' },
  { path: 'comments', component: CommentsComponent },
  { path: 'add-comments', component: AddCommentsComponent },
  { path: 'edit-comments/:id', component: CommentsDetailComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }