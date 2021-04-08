import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Blogpost } from '../models/Post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  password
  username
  mouseoverSignin
  auth = false
  isInvalid = false
  token
  url = 'test'

  constructor(private authService:AuthService,
              private postsService:PostsService,
              private router:Router) { }

  ngOnInit(): void {
    this.isAuthenticated()
  }

  isAuthenticated():boolean {
    if(this.authService.isAuthenticated()) {
      this.auth = true
      this.router.navigate(['/'])
      return true
    }
  }

  login(formValues) {
    this.authService.login(formValues)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.isAuthenticated()
        })
    if(!this.isAuthenticated()) {
            this.isInvalid = true
          }
  }

  logout() {
    this.authService.logout()
    this.auth = false
    this.router.navigate(['/'])
  }

  searchPosts(searchTerm) {
    this.postsService.setvalue("test")
    this.router.navigate(['/'])

    this.postsService.clickSearch(searchTerm);
  }


}
