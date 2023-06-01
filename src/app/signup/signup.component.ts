import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router) {}
  registerForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  signup(data: any) {
    console.log(data);
    this.router.navigate(['/login']);
  }

  controlHasError(form: FormGroup, validation: string, controlName: string) {
    const control = form.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }
}
