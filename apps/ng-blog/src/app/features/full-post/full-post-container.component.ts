import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostFacade } from '../../store/post/post.facade';
import { Post } from '@ng-blog/domain';

@Component({
  selector: 'app-full-post-container',
  templateUrl: './full-post-container.component.html',
  styleUrls: ['./full-post-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullPostContainerComponent implements OnInit {
  post$: Observable<Post>;

  constructor(private postFacade: PostFacade, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.postFacade.loadPosts();
    this.post$ = this.postFacade.post$(this.router.url.slice(1).split('#')[0]);
    this.cdr.markForCheck();
  }
}
