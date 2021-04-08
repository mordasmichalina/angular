import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPost
  mouseoverCreate
  selectedFiles:[]

  constructor(private postsService:PostsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  savePost(formValues) {
    let formData = new FormData();
    formData.set('title', formValues.title);
    formData.set('content', formValues.content);
    formData.set('price', formValues.price);
    formData.set('duration', formValues.duration);
    formData.set('destination', formValues.destination);

    var i;
    for (i = 0; i < this.selectedFiles.length; i++) {
      formData.append('images', this.selectedFiles[i]);
    }

    this.postsService.savePost(formData).subscribe(() => {
      this.router.navigate([''])
    });
  }

  uploadImage(event) {
      this.selectedFiles = event.target.files;
  }



}
