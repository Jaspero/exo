import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'exo-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsBlockComponent {
  data: any;

  blocks: any[];

  ngOnInit() {
    console.log(this.data);
    const data = {...this.data};

    delete data.type;

    this.blocks = Object.entries(this.data);
    console.log(this.blocks);
  }
}
