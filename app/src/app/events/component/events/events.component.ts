import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'exo-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  item: any;

  ngOnInit() {
    this.item = this.route.snapshot.data.meta;
  }
}
