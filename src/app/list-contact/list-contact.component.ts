import { Component , inject, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { ContactData } from '../contact-class';

@Component({
  selector: 'app-list-contact',
  imports: [RouterLink],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css'
})

export class ListContactComponent {

  appService = inject(AppService);
  contacts: ContactData[] = [];

   ngOnInit() {
     this.contacts = this.appService.contacts;
     //console.log(this.contacts)
   }
}
