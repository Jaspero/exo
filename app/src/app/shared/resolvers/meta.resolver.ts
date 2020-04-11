import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {tap} from 'rxjs/operators';

export const BASE_TITLE = new InjectionToken('BASE_TITLE');

@Injectable({
  providedIn: 'root'
})
export class MetaResolver implements Resolve<any> {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(BASE_TITLE)
    private baseTitle: string,
    private scully: ScullyRoutesService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.scully.getCurrent()
      .pipe(
        tap(a => {
          console.log(a)
        })
      );
    // const valuesToSet = {...(route.data.meta || {})};
    //
    // const {id} = route.data;
    //
    // this.title.setTitle(
    //   valuesToSet.title
    //     ? `${valuesToSet.title} | ${this.baseTitle}`
    //     : this.baseTitle
    // );
    //
    // /**
    //  * To prevent iterating over the title and adding it as meta
    //  */
    // delete valuesToSet.title;
    //
    // /**
    //  * Written like this instead of Object.entries to support older browsers
    //  */
    // for (const name in valuesToSet) {
    //   if (valuesToSet.hasOwnProperty(name)) {
    //     this.meta.updateTag({name, content: valuesToSet[name]});
    //   }
    // }
  }
}
