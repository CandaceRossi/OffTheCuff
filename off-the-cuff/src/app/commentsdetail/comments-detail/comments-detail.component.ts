import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { freeApiService } from './../../services/freeapi.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.css']
})
export class CommentsDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private freeApiService: freeApiService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.freeApiService.getComments(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        description: res['description']
      });
    });
 
    this.updateForm = this.formBuilder.group({
      name: [''],
      description: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.freeApiService.updateComment(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}