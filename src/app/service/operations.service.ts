import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  /* Dummy Json Api call */
  api_url = 'https://dummyjson.com';

  REST_API: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  deleteOperation(id: number) {
    return this.http.delete(this.api_url + `/users/${id}`);
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
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      designation: designation,
      password: password,
    };

    return this.http.post(this.api_url + '/users/add', body);
  }

  GetUsers() {
    return this.http.get(`${this.REST_API}/users`);
  }

  createUser(data: any) {
    return this.http.post(`${this.REST_API}/add_user`,{headers: {'Content-Type': 'application/json'}},data);
  }
}
