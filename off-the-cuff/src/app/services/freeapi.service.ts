import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
