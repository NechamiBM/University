import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTabIndex = 0;

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('userId');
  }

  isLecturer(): boolean {
    return !!sessionStorage.getItem('isLecturer');
  }

  logout() {
    Swal.fire({
      title: "Are you sure", text: "you want to log out?", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('isLecturer');
        Swal.fire({ text: "User successfully removed.", icon: "success" });
      }
    });
  }

  updateNavigation(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/course/all']);
        break;
      case 1:
        if (this.isLoggedIn())
          this.router.navigate(['/course/add']);
        else
          this.router.navigate(['/user/login']);
        break;
      case 2:
        this.router.navigate(['/user/register']);
        break;
    }
  }
}
