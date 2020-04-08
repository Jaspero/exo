import {Component, HostBinding, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('class')
  state: string;

  ngOnInit() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        setTimeout(() => {
          this.state = 'loading';
        }, 300);
      } else if (value instanceof NavigationEnd) {
        setTimeout(() => {
          window.scrollTo(0, 0);
          this.state = 'loaded';
        }, 1200);
      }
    });
  }
}
