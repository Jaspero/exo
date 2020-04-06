import {Component, HostBinding, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  @HostBinding('class')
  state: string;

  ngOnInit() {
    this.router.events.subscribe(value => {

      if (value instanceof NavigationStart) {
        this.state = 'loading';
      } else if (value instanceof NavigationEnd) {
        this.state = 'loaded';
      }
    });
  }
}
