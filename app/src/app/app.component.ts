import {Component, HostBinding, OnInit} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('class')
  state: string;

  ngOnInit() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        this.state = 'loading';
      } else if (value instanceof NavigationEnd) {
        window.scrollTo(0, 0);

        /* Delay adding 'loaded' class by 1000ms */
        setTimeout(() => {
          this.state = 'loaded';
        }, 1000);
      }
    });
  }
}
