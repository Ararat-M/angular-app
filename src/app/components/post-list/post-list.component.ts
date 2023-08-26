import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(
    public postService: PostService
  ) { }

  postServiceStream$: Subscription;
  loading = true;

  ngOnInit(): void {
    this.postServiceStream$ = this.postService.getAll().subscribe({
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }

  ngOnDestroy() {
    this.postServiceStream$.unsubscribe();
  }
}
