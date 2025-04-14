import { Component, inject } from '@angular/core';
import { AppService } from '../app.service'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})

export class EditContactComponent {
  editCompService = inject(AppService);
}
