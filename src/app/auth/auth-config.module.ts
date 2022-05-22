import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://dev-x83azoyi.us.auth0.com',
        redirectUrl: window.location.origin,
        clientId: 'rJlZrS6z2NWHvtRRAZLN1DBQWJzdwbuz',
        scope: 'openid profile offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
