import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { I18nService } from '@app/i18n';
import { OidcSecurityService } from 'angular-auth-oidc-client';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService,
    private oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });

    // this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
    //   log.info("isAuthenticated: "+isAuthenticated);
    //   log.info("userData: "+userData.name);
    //   log.info("accessToken: "+accessToken);
    //   log.info("idToken: "+idToken);
    // });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
