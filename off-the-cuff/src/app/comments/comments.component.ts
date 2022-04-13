import { Component, OnInit } from '@angular/core';
import { freeApiService} from '../services/freeapi.service';

@Component({
  selector: 'app-comments',
  template:  './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  
  Comments:any = []
 

  constructor(private freeApiService: freeApiService) { }

  ngOnInit(): void {
    this.freeApiService.GetComments().subscribe(res => {
      console.log(res)
      this.Comments = res;
    });
  }


  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.freeApiService.deleteComment(id).subscribe((res) => {
        this.Comments.splice(i, 1);
      })
    }
  }
}
 