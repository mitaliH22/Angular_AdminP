import { Injectable } from '@angular/core';
import { users } from '../../assets/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  items: any = users;
  role: any;
  constructor(private router: Router) {}

  login(data: any) {
    if (data.email != '' && data.password != '') {
      localStorage.setItem('user', JSON.stringify(data));
       for (var val of this.items) {
         if (val.email == data.email && val.password == data.password) {
           this.router.navigate(['/home']);
           break;
         } else if (data.email == 'user@123' && data.password == 'user123') {
           this.role = data.role;
           this.router.navigate(['/dash']);
           break;
         } else {
           alert('Please try again');
           break;
         }
       }
    } else {
      alert('Please Enter Email and Password');
    }

  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
