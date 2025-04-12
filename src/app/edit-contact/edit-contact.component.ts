import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})

export class EditContactComponent {
   fn = input.required<string>();
   ln = input.required<string>();
   pn = input.required<number>();
  
  text:string = "haha";
  


}
