import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../app.service'; 
import { ContactClass } from '../contact-class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})

export class EditContactComponent {
  editCompService = inject(AppService);

  // fn = input.required<string>();
  // ln = input.required<string>();
  // pn = input.required<number>();

}
