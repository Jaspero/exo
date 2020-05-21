import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'exo-gallery-block-full',
  templateUrl: './gallery-block-full.component.html',
  styleUrls: ['./gallery-block-full.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryBlockFullComponent {
  data: any;
}
