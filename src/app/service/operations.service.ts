import { Injectable } from '@angular/core';
import { users } from '../../assets/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  /* Dummy Json Api call */
  api_url = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  deleteOperation(id: number) {
    console.log('selected id', id, users);
    users.splice(id, 1);
  }

  readOperation() {
    return this.http.get(this.api_url + '/users');
  }

  createOperation(
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    designation: String,
    password: String
  ) {
    const body = {
      fName: firstName,
      lName: lastName,
      email: email,
      phone: phone,
      designation: designation,
      password: password,
    };

    return this.http.post(this.api_url + '/users/add', body);
  }
}
