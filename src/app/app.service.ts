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

  editGlobalContacts(FirstN: string, LastN: string, PhoneN: string): void
  {
    const index = this.globalContacts.findIndex((c: ContactClass) => c.phoneNumber == this.epn);

    this.globalContacts[index].fNAME = FirstN;
    this.globalContacts[index].lNAME = LastN;
    this.globalContacts[index].phoneNumber = PhoneN;
  }
  
  updateGlobalContacts(FirstN:string, LastN:string, PhoneN:string): void 
  {
    if (FirstN.trim() !== '' && LastN.trim() !== '' && PhoneN.trim() !== '') 
    {
      this.globalContacts.push({
      fNAME: FirstN,
      lNAME: LastN,
      phoneNumber: PhoneN,});
    }
  }

  deleteGlobalContacts(PhoneN:string): void
  {
    const index = this.globalContacts.findIndex((c: ContactClass) => c.phoneNumber == PhoneN);
    if (index !== -1) {
    this.globalContacts.splice(index, 1)
  }
  }
}
