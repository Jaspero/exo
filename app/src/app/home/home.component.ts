import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  links = {
    backgrounds: [
      {
        name: 'Events',
        background: 'assets/images/home/home-3.png',
        path: '/exo-events',
      },
      {
        name: 'Blog',
        background: 'assets/images/home/home-4.png',
        path: '/blog',
      },
      {
        name: 'News & Press',
        background: 'assets/images/home/home-5.png',
        path: '/news',
      }
    ]
  };

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
