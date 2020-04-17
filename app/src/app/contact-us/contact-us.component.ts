import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exo-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  exo = {
    services: [
      {
        name: 'EXO Lounge',
        key: 'lounge'
      },
      {
        name: 'EXO Nail Bar',
        key: 'nailBar'
      }
    ],
    days: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]
  };

  page: any;

  get mapSrc() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?ll=' + this.page.address.lat + ',' + this.page.address.lng + '&z=17&ie=UTF8&iwloc&output=embed'
    )
  }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
  }
}
