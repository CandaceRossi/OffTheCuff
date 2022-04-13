import { Injectable } from '@angular/core';
import { Comment } from '../services/Comment';
import { catchError, map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
 
export class freeApiService {
 
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
 
 // Add
AddComments(data: Comment): Observable<any> {
  let API_URL = `${this.REST_API}/add-comment`;
  return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
    )
}

// Get all objects
GetComments() {
  return this.httpClient.get(`${this.REST_API}`);
}

export interface Comment {
    title: string
}

@Injectable()
export class freeApiService {
constructor(private httpclient: HttpClient){}

getcomments(): Observable<any> {
    return this.httpclient.get("http://localhost:8000/api/comments")
}

    insertcomment(comment: Comment): Observable<Comment> {
        return this.httpclient.post<Comment>('http://localhost:8000/api/comments/', comment)
    }

    updatecomment(comment: Comment): Observable<void> {
        return this.httpclient.put<void>(
            'http://localhost:8000/api/comments/' + comment.title,
            comment
        )
    }

    deletecomment(title: string) {
        return this.httpclient.delete('http://localhost:8000/api/comments/' + title)
    }
}
