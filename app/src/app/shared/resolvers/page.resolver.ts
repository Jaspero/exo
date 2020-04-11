import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Page} from '../interfaces/page.interface';
import {BASE_TITLE} from './meta.resolver';

@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<Page> {
  constructor(
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
    @Inject(BASE_TITLE)
    private baseTitle: string,
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const {id} = route.data;

    return this.http.get(`/collections/pages/${id}.json`)
      .pipe(
        tap((data: any) => {
          if (data.meta) {

            const meta = {...data.meta};

            this.title.setTitle(
              meta.title
                ? `${meta.title} | ${this.baseTitle}`
                : this.baseTitle
            );

            /**
             * To prevent iterating over the title and adding it as meta
             */
            delete meta.title;

            /**
             * Written like this instead of Object.entries to support older browsers
             */
            for (const name in meta) {
              if (meta.hasOwnProperty(name)) {
                this.meta.updateTag({name, content: meta[name]});
              }
            }
          }
        })
      );
  }
}
