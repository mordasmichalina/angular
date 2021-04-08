import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {

  constructor(private postsService: PostsService) { }

  resolve() {
    return this.postsService.getPosts()
  }
}
