import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
// import {slideInAnimation, aboutAnimate} from './animations';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [ slideInAnimation, aboutAnimate]
})

export class AppComponent {

  title = 'exo';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[`animation`];
  }
}

