import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message
  mouseoverSubmit

  constructor(private contactService:ContactService,
              private router: Router) { }

  ngOnInit(): void {
  }

  sendMessage(formValues){
    this.contactService.sendMessage(formValues).subscribe(() => {
    });
  }

}
