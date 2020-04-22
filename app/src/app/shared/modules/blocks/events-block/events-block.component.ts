import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'exo-events-block',
  templateUrl: './events-block.component.html',
  styleUrls: ['./events-block.component.scss']
})
export class EventsBlockComponent implements OnInit {
  data: any;

  ngOnInit() {
    console.log(this.data);
  }
}
