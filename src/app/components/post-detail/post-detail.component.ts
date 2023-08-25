import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

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

  private routeSub: Subscription
  loading: boolean;
  postId: number
  post: IPost

  ngOnInit(): void {
    this.loading = true

    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.postId = params["id"]
    });

    this.routeSub = this.postService.getById(this.postId).subscribe(post => {
      this.post = post
      this.loading = false
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
