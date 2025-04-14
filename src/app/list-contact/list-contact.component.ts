import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  imports: [RouterLink],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css'
})

export class ListContactComponent {
  listCompService = inject(AppService);
}
