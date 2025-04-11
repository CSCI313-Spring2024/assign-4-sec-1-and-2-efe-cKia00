import { Injectable } from '@angular/core';
import { CONTACTS } from './contacts-data';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  contacts = CONTACTS;

  constructor() { }
}
