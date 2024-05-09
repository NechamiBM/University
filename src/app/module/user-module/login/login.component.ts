import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user.model';
import Swal from 'sweetalert2';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string;
  userPassword: string;
  hide = true;
  formSubmitted = false;

  userNameFormControl = new FormControl('', [Validators.required]);
  userPasswordFormControl = new FormControl('', [Validators.required]);

  constructor(private _userService: UserService, private _router: Router) { }

  enter() {
    const user: User = {
      id: 0, name: this.userName, address: "", email: "", password: this.userPassword, isLecturer: false
    }
    this._userService.login(user).subscribe(
      (response) => {
        Swal.fire({
          title: 'Welcome ' + this.userName,
        });
        sessionStorage.setItem('userName', this.userName);
        this._router.navigate(['course/all']);
      },
      (error) => {
        if (error.status === 404) {
          console.log('שם משתמש לא קיים');
        } else if (error.status === 401) {
          console.log('סיסמה שגויה');
        } else {
          console.log('תקלה בכניסה'); 
        }
      }
    );
    

    console.log("User Name: " + this.userName);
    console.log("Password: " + this.userPassword);
  }
}
