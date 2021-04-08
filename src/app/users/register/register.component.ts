import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password
  username
  mouseoverSignin

  constructor(private authService:AuthService,
              private router: Router) { }

  ngOnInit(): void { }

  registerUser(formValues) {
    this.authService.registerUser(formValues).subscribe(() => {
      this.router.navigate([''])
    });
  }


}
