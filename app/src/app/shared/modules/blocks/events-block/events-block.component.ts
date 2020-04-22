import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'exo-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsBlockComponent implements OnInit {
  data: any;

  blocks: any[];

  ngOnInit() {
    const data = {...this.data};

    delete data.type;

    this.blocks = Object.entries(this.data);
  }
}
