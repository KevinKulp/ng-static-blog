import { createAction, props } from '@ngrx/store';
import type { Post } from '@ng-blog/domain';

export const loadPosts = createAction(
  '[Posts] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Posts] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction('[Posts] Load Posts Failure');
