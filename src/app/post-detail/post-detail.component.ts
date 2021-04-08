import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Blogpost } from '../models/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})


export class PostDetailComponent implements OnInit {

  postDetail:Blogpost

  constructor(private postsService:PostsService,
              private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.postDetail = data['postDetail'];
    })
  }
}
