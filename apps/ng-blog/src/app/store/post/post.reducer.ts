import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import type { Post } from '@ng-blog/domain';

export const postFeatureKey = 'post';

export interface State {
  posts: Post[];
  postsLoading: boolean;
  postsError: boolean;
  postLoading: boolean;
  postError: boolean;
}

export const initialState: State = {
  posts: [],
  postsLoading: false,
  postsError: false,
  postLoading: false,
  postError: false,
};

export const reducer = createReducer(
  initialState,

  on(PostActions.loadPosts, (state) => ({
    ...state,
    postsLoading: true,
    postsError: false,
  })),
  on(PostActions.loadPostsSuccess, (state, action) => ({
    ...state,
    posts: action.posts,
    postsLoading: false,
  })),
  on(PostActions.loadPostsFailure, (state) => ({
    ...state,
    postsLoading: false,
    postsError: true,
  })),
);
