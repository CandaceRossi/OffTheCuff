import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { freeApiService } from '../../services/freeapi.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {

  commentsForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private freeApiService: freeApiService
  ) { 
    this.commentsForm = this.formBuilder.group({
      name: [''],
      description: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.freeApiService.AddComments(this.commentsForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/comments-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}