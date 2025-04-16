import { Injectable } from '@angular/core';
import { CONTACTS } from './contacts-data';
import { ContactClass } from './contact-class';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  // This is the array that stores the data of all the contacts used in this application.
  globalContacts = CONTACTS;

  constructor() { }

  // This is the string that holds the current field values of the contact you wish to edit
  // It is called in the edit contact components template
  currentFN: string = '';
  currentLN: string = '';
  currentPN: string = '';

  // This is the method called when the edit contact button is clicked for each contact
  // It simply sends the current firstname, lastname, and phonenumber to the currentFN, currentLN,
  // and currentPN properties respectively.
  contactFieldsGetter(fnn: string, lnn: string, pnn: string): void
  {
    this.currentFN = fnn;
    this.currentLN = lnn;
    this.currentPN = pnn;
  } 

  // this method is called when you click the save button in the edit contact template
  // It simply finds the index of the contact you are trying to edit by using the currentPN
  // with anonymous function to find the element that matches that contacts phonenumber
  // The find index method will find the index of the element if the anonymous function
  // returned a boolean value of "true" (if the phonenumbers matched)
  editGlobalContacts(FirstN: string, LastN: string, PhoneN: string): void
  {
    const index = this.globalContacts.findIndex((c: ContactClass) => c.phoneNumber == this.currentPN);
    this.globalContacts[index].fNAME = FirstN;
    this.globalContacts[index].lNAME = LastN;
    this.globalContacts[index].phoneNumber = PhoneN;
  }
  
  // This method saves new contact to the globalContacts array
  // it simply checks to ensure there are no white spaces in all the three
  // fields before appending the new element to the globalContacts array
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

  // this method is used to delete a contact from the globalContacts array
  // it uses the same indexing logic adopted in the editGlobalContacts method
  // to find the index of the contact one wishes to delete then uses the splice mehthod
  // to remove only that element from the globalContacts array
  deleteGlobalContacts(PhoneN:string): void
  {
    const index = this.globalContacts.findIndex((c: ContactClass) => c.phoneNumber == PhoneN);
    if (index !== -1) {
    this.globalContacts.splice(index, 1)
    }
  }
}
