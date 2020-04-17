import {Component, OnInit} from '@angular/core';
import {ActivationEnd, NavigationStart, Router} from '@angular/router';
import {SwUpdate} from '@angular/service-worker';
import {interval} from 'rxjs';
import {filter, take, takeUntil} from 'rxjs/operators';
import {IntersectionService} from './shared/modules/intersecting/intersection.service';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private intersection: IntersectionService,
    private swUpdate: SwUpdate,
    private router: Router,
  ) {}

  ngOnInit() {

    let onePageLoaded = false;
    let updateOnChange = false;

    this.intersection.initialize();

    this.router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      take(1)
    ).subscribe(() => {
      onePageLoaded = true;
    });

    this.router.events.pipe(
      filter(e =>
        e instanceof NavigationStart && updateOnChange && onePageLoaded
      )
    ).subscribe((e: NavigationStart) =>
      location.assign(e.url)
    );

    if (this.swUpdate.isEnabled) {
      /**
       * Checks for updates every 5 minutes
       */
      interval(300000)
        .pipe(takeUntil(this.swUpdate.available))
        .subscribe(() => {
          this.swUpdate.checkForUpdate();
        });

      this.swUpdate.available.pipe(take(1)).subscribe(() => {
        updateOnChange = true;
      });
    }
  }
}
