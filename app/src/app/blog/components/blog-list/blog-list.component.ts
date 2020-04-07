import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}

  isOdd: false;

  blogs = {
    blog: [
      {
        blogImg: 'assets/images/blog/blog-lounge.png',
        title: 'Exo Menu Lounge',
        date: 'Date: 16.03. 2020',
        category: 'Fashion',
        shortDescription: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Loun' +
          'ge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail b' +
          'ar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality o' +
          'rganic products and furnishing an enjoyable atmosphere that appeals to the senses.'
      },
      {
        blogImg: 'assets/images/blog/blog-exo-lounge.png',
        title: 'Exo Menu Lounge',
        date: 'Date: 16.03. 2020',
        category: 'Art',
        shortDescription: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Loun' +
          'ge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail b' +
          'ar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality o' +
          'rganic products and furnishing an enjoyable atmosphere that appeals to the senses.'
      },
      {
        blogImg: 'assets/images/blog/blog-menu.png',
        title: 'Exo Menu Lounge',
        date: 'Date: 16.03. 2020',
        category: 'Sports',
        shortDescription: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Loun' +
          'ge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail b' +
          'ar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality o' +
          'rganic products and furnishing an enjoyable atmosphere that appeals to the senses.'
      },
    ]
  };

  blogs$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.blogs$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/blog/')))
    );
  }
}
