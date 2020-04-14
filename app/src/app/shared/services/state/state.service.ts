import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(
    @Inject(DOCUMENT) private _document: Document,

    private router: Router
  ) {}

  goTo(route: string[]) {
    const root = this._document.getElementsByTagName('exo-root')[0];

    /* TODO */
    /* These happen when the page is loading */
    root.classList.add('loading');
    root.classList.remove('loaded');

    /* TODO */
    /* These happen after the page is loaded */
    /* There is a 1s delay to prevent loading from going instantly into loaded */
    setTimeout(() => {
      root.classList.remove('loading');
      root.classList.add('loaded');
    }, 1000);

    /* TODO */
    /* Delay navigate by .9s after the page is loaded */
    setTimeout(() => {
      this.router.navigate(route);
    }, 900);
  }
}
