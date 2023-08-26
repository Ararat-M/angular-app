import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post';
import { catchError, retry, tap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  posts: IPost[] = [];
  isError = false;
  url = 'https://jsonplaceholder.typicode.com/posts';

  private handleError(error: HttpErrorResponse) {
    this.isError = true;

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    this.snackbar.open(`Ошибка: ${error.message}`, 'закрыть', {
      panelClass: ['snackbar-error']
    });

    return throwError(() => new Error('Something bad happened'));
  }

  getAll() {
    return this.http.get<IPost[]>(this.url).pipe(
      retry(3),
      catchError(this.handleError.bind(this)),
      tap(posts => this.posts = posts)
    );
  }

  getById(id: number) {
    return this.http.get<IPost>(this.url + `/${id}`).pipe(
      retry(3),
      catchError(this.handleError.bind(this))
    );
  }
}
