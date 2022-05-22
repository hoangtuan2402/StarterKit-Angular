import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Logger } from '@shared';
import { Credentials, CredentialsService } from './credentials.service';
import { textChangeRangeIsUnchanged } from 'typescript';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
const log = new Logger('Authen');
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  isAuthenticated: boolean = false;

  constructor(private credentialsService: CredentialsService, private oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(): Observable<Credentials> {
    // Replace by proper authentication call
    this.oidcSecurityService.authorize();

    const data = {
      username: '',
      token: '',
    };
    this.oidcSecurityService.checkAuth().subscribe(({ accessToken, userData }) => {
      data.token = accessToken;
      data.username = userData.name;
    });

    this.credentialsService.setCredentials(data, true);
    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
