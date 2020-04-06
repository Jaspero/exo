import {Component, HostBinding, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[`animation`];
  }

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
          this.state = 'loaded';
        }, 1200);
      }
    });
  }
}
