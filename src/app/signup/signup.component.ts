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


  signup(data: any) {
    console.log(data);
    this.router.navigate(['/login']);
  }

  createUser() {
    const user = {
      fname: this.fnameFormControl.value,
      lname: this.lnameFormControl.value,
      email: this.emailFormControl.value,
      phone: this.phoneFormControl.value,
      designation: this.designationFormControl.value,
      password: this.passwordFormControl.value,
    };

    this.operations.createOperation(user).subscribe(())
    console.log(user);
  }
  controlHasError(form: FormGroup, validation: string, controlName: string) {
    const control = form.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }
}
