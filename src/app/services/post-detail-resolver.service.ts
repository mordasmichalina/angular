import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailResolverService implements Resolve<any> {

  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.postsService.getDetail(route.params['id'])
  }
}
