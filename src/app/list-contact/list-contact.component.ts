import { Component , inject, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { ContactClass } from '../contact-class';

@Component({
  selector: 'app-list-contact',
  imports: [RouterLink],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css'
})

export class ListContactComponent {
  listCompService = inject(AppService);
  //listCompContacts: ContactClass[] = [];
 
}
