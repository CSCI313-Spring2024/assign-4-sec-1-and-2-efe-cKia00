import { Routes } from '@angular/router';
import { ListContactComponentComponent } from './list-contact-component/list-contact-component.component';
import { AddContactComponentComponent } from './add-contact-component/add-contact-component.component';
import { EditContactComponentComponent } from './edit-contact-component/edit-contact-component.component';

export const routes: Routes = [
    {
        path: "",
        component: ListContactComponentComponent,
        title: "home"
    },
    {
        path: 'add-contact',
        component: AddContactComponentComponent,
        title: "Add Contacts"
    },
    {
        path: 'edit-contact',
        component: EditContactComponentComponent,
        title: "Edit Contact"
    }
];
