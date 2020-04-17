import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-about',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoungeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
