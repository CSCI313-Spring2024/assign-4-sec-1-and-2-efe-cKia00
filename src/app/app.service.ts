import { Injectable } from '@angular/core';
import { CONTACTS } from './contacts-data';
import { ContactClass } from './contact-class';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  globalContacts = CONTACTS;

  constructor() { }

  efn: string = '';
  eln: string = '';
  epn: string = '';

  editGetter(fnn: string, lnn: string, pnn: string):void{
    this.efn = fnn;
    this.eln = lnn;
    this.epn = pnn;
  } 

  updateGlobalContacts(firstN: string, LastN: string, phoneN: string): void
  {
    const index = this.globalContacts.findIndex((c: ContactClass) => c.phoneNumber == this.epn);

    this.globalContacts[index].fNAME = firstN;
    this.globalContacts[index].lNAME = LastN;
    this.globalContacts[index].phoneNumber = phoneN;
  }
}
