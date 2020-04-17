import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'exo-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {

  get bg() {
    return {'background-image': `url(${this.data.background})`};
  }

  @Input()
  data: {
    title?: string;
    subTitle?: string;
    background?: string;
  } = {};

  scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}
