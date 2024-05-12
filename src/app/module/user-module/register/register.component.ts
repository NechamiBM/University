import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLecturer: boolean = false;
  hide = true;

  nameFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  lecturerFormControl = new FormControl(false);

  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {    
    this._route.queryParams.subscribe((params) => this.nameFormControl.patchValue(params['name']));
  }

  register() {
    const user = { id: 0, name: this.nameFormControl.value, address: this.addressFormControl.value, email: this.emailFormControl.value, password: this.passwordFormControl.value, isLecturer: this.isLecturer };
    this._userService.register(user).subscribe(
      (res) => {
        Swal.fire({
          title: 'Registration Successful!', text: 'You have successfully registered.', icon: 'success', showConfirmButton: false, timer: 1500
        });
        sessionStorage.setItem('userId', res.id.toString());
        if (res.isLecturer)
          sessionStorage.setItem('isLecturer', res.isLecturer.toString());
        this._router.navigate(['/course/all']);
      },
      (error) => {
        if (error.status === 400)
          Swal.fire({
            title: 'Oops...', text: 'This email already exists in the system', icon: 'error', showConfirmButton: false, timer: 2500
          });
        console.error('Error during registration:', error);
      }
    );
  }
}
