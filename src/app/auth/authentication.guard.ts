import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Logger } from '@app/@shared';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private credentialsService: CredentialsService,
    private oidcSecurityService: OidcSecurityService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree > {
  //   return this.oidcSecurityService.isAuthenticated$.pipe(
  //     map(({ isAuthenticated }) => {
  //       // allow navigation if authenticated
  //       if (isAuthenticated) {
  //         return true;
  //       }
  //         log.info('isAuthen: '+isAuthenticated)
  //       // redirect if not authenticated
  //       this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
  //       return false;
  //     })
  //   );
  // }
}
