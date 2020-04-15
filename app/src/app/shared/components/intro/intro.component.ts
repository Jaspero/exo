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
    return {'background-image': `url(${this.data.showcaseBackground})`}
  }

  @Input()
  data: {
    showcaseTitle: string;
    showcaseSubTitle?: string;
    showcaseBackground: string;
  };

  ngOnInit() {
  }

}
