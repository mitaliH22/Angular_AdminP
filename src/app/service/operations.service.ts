import { Injectable } from '@angular/core';
import { users } from '../../assets/user';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  deleteOperation(id: number) {
    console.log("selected id", id,users)
    users.splice(id, 1);  
  }
}
