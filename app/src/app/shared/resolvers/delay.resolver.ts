import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DelayResolver implements Resolve<null> {
  constructor(
    @Inject(DOCUMENT)
    private _document: any
  ) {}

  firstPage = true;

  resolve() {
    const root = this._document.querySelector('exo-root');

    if (this.firstPage) {
      this.firstPage = false;
      return of(null);
    }

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

    return of(null).pipe(delay(900));
  }
}
