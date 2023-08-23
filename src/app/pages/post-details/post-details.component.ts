import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export default class PostDetailsComponent implements OnInit {
  constructor(
    public postService: PostService,
    private activatedroute: ActivatedRoute
  ) { }

  private routeSub: Subscription
  postId: number
  post: IPost = {userId: 0, id: 0, title: "", body: ""}

  ngOnInit(): void {
    this.routeSub = this.activatedroute.params.subscribe(params => {
      this.postId = params["id"]
    });
    
    this.routeSub = this.postService.getById(this.postId).subscribe(post => this.post = post)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
