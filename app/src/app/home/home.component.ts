import {Component, OnInit} from '@angular/core';
import {BlogComponent} from '../blog/components/blog/blog.component';
import {NewsComponent} from '../news/component/news/news.component';
import {EventsComponent} from "../events/component/events/events.component";

@Component({
  selector: 'exo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  links = {
    backgrounds: [
      {
        name: 'Events',
        background: 'assets/images/home/home-3.png',
        path: 'events',
        component: EventsComponent,
      },
      {
        name: 'Blog',
        background: 'assets/images/home/home-4.png',
        path: 'blog',
        component: BlogComponent,
      },
      {
        name: 'News & Press',
        background: 'assets/images/home/home-5.png',
        path: 'news',
        component: NewsComponent,
      }
    ]
  };

  ngOnInit(): void {}
}
