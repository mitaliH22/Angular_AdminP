import { Injectable } from '@angular/core';
import { users } from '../../assets/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // api_url = 'https://restful-booker.herokuapp.com/auth';

  /* Dummy Json Api call */
  api_url = 'https://dummyjson.com';

  REST_API: string = 'http://localhost:3000/api';

  items: any = users;
  constructor(private router: Router, private http: HttpClient) {}


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  loginApi(email: string, password: any) {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post(`${this.REST_API}/login`, body);
  }

  // Signup
  signupApi(data: any) {
    const body = {
      first_name: data.fname,
      last_name:data.lname,
      email:data.email,
      phone:data.phone,
      designation:data.designation,
      password:data.password,
    };
    return this.http.post(`${this.REST_API}/register`, body)
  }

}
