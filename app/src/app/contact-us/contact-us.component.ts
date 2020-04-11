import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  exo = {
    services: [
      {
        name: 'EXO Lounge'
      },
      {
        name: 'EXO Nail Bar'
      }
    ]
  };

  week = {
    days: [
      {
        day: 'Monday',
        time: '8:30am to 5pm'
      },
      {
        day: 'Tuesday',
        time: '8:30am to 5pm'
      },
      {
        day: 'Wednesday',
        time: '8:30am to 5pm'
      },
      {
        day: 'Thursday',
        time: '8:30am to 5pm'
      },
      {
        day: 'Friday',
        time: '8:30am to 5pm'
      },
      {
        day: 'Saturday',
        time: 'Closed'
      },
      {
        day: 'Sunday',
        time: 'Closed'
      }
    ]
  };

  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
