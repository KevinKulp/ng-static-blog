import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockPost } from '@ng-blog/domain';
import { Observable, of, delay } from 'rxjs';
import type { Post } from '@ng-blog/domain';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly posts: Post[] = [
    mockPost({ permalink: 'post-one' }),
    mockPost({ permalink: 'post-two' }),
    mockPost({ permalink: 'post-three' }),
    mockPost({ permalink: 'post-four' }),
    mockPost({ permalink: 'post-five' }),
    mockPost({ permalink: 'post-six' }),
    mockPost({ permalink: 'post-seven' }),
    mockPost({ permalink: 'post-eight' }),
    mockPost({ permalink: 'post-nine' }),
    mockPost({ permalink: 'post-ten' }),
  ]

  constructor(private http: HttpClient) { }

  loadPosts(): Observable<{ posts: Post[] }> {
    //return of({ posts: this.posts }).pipe(delay(2000));
    return this.http.get<{ posts: [] }>('/assets/posts.json').pipe(delay(2000));
  }
}
