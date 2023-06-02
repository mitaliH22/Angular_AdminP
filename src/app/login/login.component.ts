import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  
  constructor(private service: AuthService, private router: Router) {
    this.emailFormControl = new FormControl('', [Validators.required]);
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);

    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  login() {
    const e_mail = this.emailFormControl.value;
    const pwd = this.passwordFormControl.value;

    this.service.loginApi(e_mail,pwd).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/home']);
        localStorage.setItem('user', JSON.stringify(response));
      },
      (error) => {
        console.log(error);
        alert('Please Enter Correct Details!')
      }
    );
  }
  register() {
    this.router.navigate(['/signup']);
  }
}
