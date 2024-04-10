import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppPageTitleStrategy extends TitleStrategy {
  override updateTitle(routerState: RouterStateSnapshot): void {
    let pageTitle = this.buildTitle(routerState);
    if (!pageTitle) {
      pageTitle = 'Maarc Jhipster 8 H 2 Jwt Angular';
    }
    document.title = pageTitle;
  }
}
