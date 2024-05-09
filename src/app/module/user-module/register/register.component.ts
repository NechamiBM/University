import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string;
  address: string;
  email: string;
  password: string;
  isLecturer: string = "false";
  formSubmitted = false;

  nameFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  lecturerFormControl = new FormControl('');

  constructor(private _userService: UserService, private _router: Router) { }

  register() {
    let b: boolean;
    if (this.isLecturer == "true") b = true;
    console.log("b",b);
    
    const user = {
      id: 0,
      name: this.name,
      address: this.address,
      email: this.email,
      password: this.password,
      isLecturer: b
    };

    console.log(user);

    this._userService.register(user).subscribe(
      () => {
        Swal.fire({
          title: 'Registration Successful!',
          text: 'You have successfully registered.',
          icon: 'success',
        });
        this._router.navigate(['/course/all']);
      },
      (error) => {
        console.error('Error during registration:', error);
        Swal.fire({
          title: 'Registration Failed!',
          text: 'An error occurred during registration. Please try again later.',
          icon: 'error',
        });
      }
    );
  }
}
