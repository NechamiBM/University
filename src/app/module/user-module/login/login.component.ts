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
      (res) => {
        Swal.fire({ title: 'Welcome ' + user.name });
        sessionStorage.setItem('userId', res.id.toString());
        if (res.isLecturer)
          sessionStorage.setItem('isLecturer', res.isLecturer.toString());
        this._router.navigate(['course/all']);
      },
      (error) => {
        if (error.status === 404)
          Swal.fire({
            title: "Username doesn't exist", text: "Do you want to register?", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed)
              this._router.navigate([`user/register`], { queryParams: { name: this.userName } });
            else
              this.userPassword = this.userName = '';
          });
        else if (error.status === 401) {
          Swal.fire({ title: "Wrong password", icon: "error" });
          this.userPassword = '';
        }
        console.error("error in login", error);
      }
    );
  }
}
