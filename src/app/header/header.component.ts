import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
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

  logout() {
    Swal.fire({
      title: "Are you sure",
      text: "you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('userId');
        Swal.fire({
          text: "User successfully removed.",
          icon: "success"
        });
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
