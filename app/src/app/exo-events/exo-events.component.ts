import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-exo-events',
  templateUrl: './exo-events.component.html',
  styleUrls: ['./exo-events.component.scss']
})
export class ExoEventsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
