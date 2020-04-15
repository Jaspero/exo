import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-nail-bar-menu',
  templateUrl: './nail-bar-menu.component.html',
  styleUrls: ['./nail-bar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NailBarMenuComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
