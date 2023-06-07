import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from '../service/operations.service';
import { Users } from '../types/types';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router, private auth: AuthService) {}

  registerForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    designation: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  signup() {
    const data = this.registerForm.value;
    this.auth.signupApi(data).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    })
  }

  controlHasError(form: FormGroup, validation: string, controlName: string) {
    const control = form.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }
}
