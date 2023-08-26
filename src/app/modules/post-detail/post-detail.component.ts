import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  constructor(
    public postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  postServiceStream$: Subscription;
  loading: boolean;
  postId: number;
  post: IPost;

  ngOnInit(): void {
    this.loading = true;

    this.activatedRoute.params.subscribe(params => {
      this.postId = params['id'];
    });

    this.postServiceStream$ = this.postService.getById(this.postId).subscribe({
      next: (post) => this.post = post,
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }

  ngOnDestroy(): void {
    this.postServiceStream$.unsubscribe();
  }
}
