import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'exo-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsBlockComponent {
  data: any;
}
