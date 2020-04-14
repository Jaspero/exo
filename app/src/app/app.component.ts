import {Component} from '@angular/core';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

/*
this.router.events.subscribe(value => {
  if (value instanceof NavigationStart) {
    this.state = 'loading';
  } else if (value instanceof NavigationEnd) {
    window.scrollTo(0, 0);

    /!* Delay adding 'loaded' class by 1000ms *!/
    setTimeout(() => {
      this.state = 'loaded';
    }, 1000);
  }
});
*/
