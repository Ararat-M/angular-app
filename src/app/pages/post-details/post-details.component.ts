import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export default class PostDetailsComponent implements OnInit, OnDestroy {
  constructor(
    public postService: PostService,
    private activatedroute: ActivatedRoute
  ) { }

  private routeSub: Subscription
  loading: boolean;
  postId: number
  post: IPost 

  ngOnInit(): void {
    this.loading = true

    this.routeSub = this.activatedroute.params.subscribe(params => {
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
