import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  template: `
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor="let comment of comments">
    {{comment}}
    </li>
  </ul>
  
  `,
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title = "Comment Title";
  comments;

  constructor(service: CommentsService) {
    this.comments = service.getComments();
  }

  ngOnInit(): void {
  }

  // getTitle() {
  //   return this.title
  // }
}
