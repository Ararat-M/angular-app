import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  constructor(
    public postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }
  loading: boolean;
  postId: number
  post: IPost

  ngOnInit(): void {
    this.loading = true

    this.activatedRoute.params.subscribe(params => {
      this.postId = params["id"]
    });

    this.postService.getById(this.postId).subscribe(post => {
      this.post = post
      this.loading = false
    })
  }
}
