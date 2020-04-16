import {Component, OnInit} from '@angular/core';
import {IntersectionService} from './shared/modules/intersecting/intersection.service';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private intersection: IntersectionService
  ) {}

  ngOnInit() {
    this.intersection.initialize();
  }
}
