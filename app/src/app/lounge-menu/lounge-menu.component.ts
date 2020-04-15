import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-lounge-menu',
  templateUrl: './lounge-menu.component.html',
  styleUrls: ['./lounge-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoungeMenuComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
