import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {BlogComponent} from '../blog/components/blog/blog.component';
import {EventsComponent} from '../events/component/events/events.component';
import {NewsComponent} from '../news/component/news/news.component';

@Component({
  selector: 'exo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute
  ) {}

  links = {
    backgrounds: [
      {
        name: 'Events',
        background: 'assets/images/home/home-3.png',
        path: 'events',
        component: EventsComponent
      },
      {
        name: 'Blog',
        background: 'assets/images/home/home-4.png',
        path: 'blog',
        component: BlogComponent
      },
      {
        name: 'News & Press',
        background: 'assets/images/home/home-5.png',
        path: 'news',
        component: NewsComponent
      }
    ]
  };

  page: any;

  ngOnInit() {

    this.page = this.activatedRoute.snapshot.data.page;

    this.scully.available$.subscribe(value => {
      console.log('all', value)
    });
    this.scully.getCurrent().subscribe(value => {
      console.log('value', value);
    })
  }
}
