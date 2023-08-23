import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/post';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  posts: IPost[] = []

  
  url = "https://jsonplaceholder.typicode.com/posts"
  

  getAll() {
    return this.http.get<IPost[]>(this.url).pipe(tap(posts => this.posts = posts))
  }

  getById(id: string) {
    return this.http.get<IPost>(this.url + `/${id}`)
  }
}
