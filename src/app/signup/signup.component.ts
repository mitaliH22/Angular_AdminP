import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from '../service/operations.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm: FormGroup;
  fnameFormControl: FormControl;
  lnameFormControl: FormControl;
  emailFormControl: FormControl;
  phoneFormControl: FormControl;
  designationFormControl: FormControl;
  passwordFormControl: FormControl;

  constructor(private router: Router, private operations: OperationsService) {
    this.fnameFormControl = new FormControl('', [Validators.required]);
    this.lnameFormControl = new FormControl('');
    this.emailFormControl = new FormControl('', [Validators.required]);
    this.phoneFormControl = new FormControl('');
    this.designationFormControl = new FormControl('', [Validators.required]);
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);

    this.registerForm = new FormGroup({
      fname: this.fnameFormControl,
      lname: this.lnameFormControl,
      email: this.emailFormControl,
      phone: this.phoneFormControl,
      designation: this.designationFormControl,
      password: this.passwordFormControl
    })
  }


  signup() {
    const fname = this.fnameFormControl.value;
    const lname = this.lnameFormControl.value;
    const email = this.emailFormControl.value;
    const phone = this.phoneFormControl.value;
    const designation = this.designationFormControl.value;
    const password = this.passwordFormControl.value;

    this.operations.createOperation(fname, lname, email, phone, designation, password).subscribe((result) => {
      // alert('User registered successfully!');
      console.log(result);
      // this.router.navigate(['/login']);
    }, (error) => {
      console.log(error);
    })
  }


  controlHasError(form: FormGroup, validation: string, controlName: string) {
    const control = form.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }
}
