import { Routes } from '@angular/router';
import { ListContactComponent } from './list-contact/list-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
    {
        path: "",
        component: ListContactComponent,
        title: "ContactApp"
    },
    {
        path: 'add-contact',
        component: AddContactComponent,
        title: "Add Contacts"
    },
    {
        path: 'edit-contact',
        component: EditContactComponent,
        title: "Edit Contact"
    }
];
