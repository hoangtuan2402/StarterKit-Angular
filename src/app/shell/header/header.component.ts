import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    // this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    this.authenticationService.logout();
    window.location.href =
      'https://dev-x83azoyi.us.auth0.com/v2/logout?returnTo=http://localhost:4200/login&client_id=rJlZrS6z2NWHvtRRAZLN1DBQWJzdwbuz';
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
