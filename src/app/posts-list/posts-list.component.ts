import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Blogpost } from '../models/Post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnDestroy  {
  posts:Blogpost[]
  images:Blogpost[]
  subscription: Subscription;
  constructor(private postsService:PostsService,
              private router: Router,
              private route:ActivatedRoute ) {
      this.posts = this.route.snapshot.data['posts']

      this.subscription = postsService.submitSearch$.subscribe(
        mission => {
          this.posts = this.route.snapshot.data['posts']
          this.router.navigateByUrl('blank').then(() => {
            this.router.navigateByUrl('');
          })
          console.log("halo")
        });
               }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
