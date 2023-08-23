import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export default class PostDetailsComponent implements OnInit {
  constructor(
    public postService: PostService
  ) { }

  post: IPost

  ngOnInit(): void {
    this.postService.getById("1").subscribe(post => this.post = post);
  }
}
