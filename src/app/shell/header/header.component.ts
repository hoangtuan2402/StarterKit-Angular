import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { environment } from '@env/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  show: boolean = false;

  showMenu() {
    this.show = !this.show;
  }
  isDark: boolean = false;
  changeTheme() {
    console.log('Change Theme processing');
    if (this.isDark) {
      document.documentElement.classList.remove('dark');
      this.isDark = false;
    } else {
      document.documentElement.classList.add('dark');
      this.isDark = true;
    }
  }
}
