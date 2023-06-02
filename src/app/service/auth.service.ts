import { Injectable } from '@angular/core';
import { users } from '../../assets/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // api_url = 'https://restful-booker.herokuapp.com/auth';

  /* Dummy Json Api call */
  api_url = 'https://dummyjson.com';

  items: any = users;
  constructor(private router: Router, private http: HttpClient) {}

  // login(data: any) {
  //   if (data.email != '' && data.password != '') {
  //     localStorage.setItem('user', JSON.stringify(data));
  //     for (var val of this.items) {
  //       if (val.email == data.email && val.password == data.password) {
  //         this.router.navigate(['/home']);
  //         break;
  //       } else if (data.email == 'user@123' && data.password == 'user123') {
  //         this.role = data.role;
  //         this.router.navigate(['/dash']);
  //         break;
  //       } else {
  //         alert('Please try again');
  //         break;
  //       }
  //     }
  //   } else {
  //     alert('Please Enter Email and Password');
  //   }
  // }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  loginApi(email: string, password: any) {
    const body = {
      username: email,
      password: password,
    };
    return this.http.post(this.api_url + '/auth/login', body);
  }
}
