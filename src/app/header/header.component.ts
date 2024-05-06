import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTabIndex = 0;

  constructor(private router: Router) {}

  updateNavigation(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/course/all']);
        break;
      case 1:
        this.router.navigate(['/course/add']);
    }
  }
}
