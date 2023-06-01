import { Injectable } from '@angular/core';
import { users } from '../../assets/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  items: any = users;

  constructor(private router: Router) {}

  login(data: any) {
    if (data.email != '' && data.password != '') {
      localStorage.setItem('user', JSON.stringify(data));
       for (var val of this.items) {
         if (val.email == data.email && val.password == data.password) {
           this.router.navigate(['/home']);
           break;
         } else if (data.email == 'user@123' && data.password == 'user123') {
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
    if (
      this.router.url === '/home' ||
      this.router.url === '/create' ||
      this.router.url === '/read' ||
      this.router.url === '/delete' ||
      this.router.url === '/update' ||
      this.router.url === '/dash'
    ) {
      this.router.navigate(['/login']);
    } else {
      console.log('logged out');
    }
  }

}
