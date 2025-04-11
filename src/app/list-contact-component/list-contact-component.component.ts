import { Component , inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { ContactData } from '../contact-class';

@Component({
  selector: 'app-list-contact-component',
  imports: [RouterLink],
  templateUrl: './list-contact-component.component.html',
  styleUrl: './list-contact-component.component.css'
})
export class ListContactComponentComponent implements OnInit {

  appService = inject(AppService);
  contacts: ContactData[] = [];

  ngOnInit(){
    this.contacts = this.appService.contacts;
    console.log(this.contacts)
  }
  


}
