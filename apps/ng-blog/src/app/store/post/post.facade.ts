import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { find, from, Observable, switchMap } from 'rxjs';
import { loadPosts } from './post.actions';
import type { Post } from '@ng-blog/domain';
import { State } from './post.reducer';
import {
  selectPosts,
  selectPostsError,
  selectPostsLoading
} from './post.selectors';

@Injectable({
  providedIn: 'root'
})
export class PostFacade {
  posts$: Observable<Post[]> = this.store.select(selectPosts);
  postsLoading$: Observable<boolean> = this.store.select(selectPostsLoading);
  postsError$: Observable<boolean> = this.store.select(selectPostsError);

  constructor(private store: Store<State>) {}

  loadPosts(): void {
    this.store.dispatch(loadPosts());
  }

  post$(permalink: string): Observable<Post> {
    return this.posts$.pipe(switchMap(posts => from(posts)), find((post) => post.permalink === permalink));
  }
}
