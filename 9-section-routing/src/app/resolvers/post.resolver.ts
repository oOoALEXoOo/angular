import {
  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return of(this.postsService.getById(+route.params['id']))
      .pipe(delay(1000));
  }
}
