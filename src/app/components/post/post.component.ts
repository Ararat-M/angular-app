import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(
    public router: Router
  ) { }

  @Input() post: IPost

  goToDetail(): void {
    this.router.navigate(['/posts', this.post.id]);
  }
}
