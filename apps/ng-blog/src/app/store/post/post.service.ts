import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockPost } from '@ng-blog/domain';
import { find, from, Observable, of, switchMap } from 'rxjs';
import type { Post } from '@ng-blog/domain';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly posts: Post[] = [
    mockPost(),
    mockPost(),
    mockPost(),
    mockPost(),
    mockPost(),
    mockPost(),
    mockPost(),
  ]

  constructor(private http: HttpClient) { }

  loadPosts(): Observable<{ posts: Post[] }> {
    return of({ posts: this.posts });
    //return this.http.get<{ posts: [] }>('/api/post').pipe(delay(2000));
  }

  loadPost(permalink: string): Observable<Post> {
    return of({ posts: this.posts })
      .pipe(switchMap(
        data => from(data.posts)),
        find((post) => post.permalink === permalink)
      );
    //return this.http.get<Post>(`/api/post/${permalink}`).pipe(delay(2000));
  }
}
