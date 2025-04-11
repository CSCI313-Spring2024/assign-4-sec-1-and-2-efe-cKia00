import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListContactComponentComponent } from './list-contact-component/list-contact-component.component';
import { AddContactComponentComponent } from './add-contact-component/add-contact-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListContactComponentComponent, AddContactComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
}
