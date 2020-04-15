import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'exo-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
  constructor() { }

  get bg() {
    return {'background-image': `url(${this.data.background})`}
  }

  @Input()
  data: {
    title?: string;
    subTitle?: string;
    background?: string;
  } = {};

  ngOnInit() {
  }

}
