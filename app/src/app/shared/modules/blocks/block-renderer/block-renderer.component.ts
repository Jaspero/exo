import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {Block} from '../../../enums/block.enum';
import {ImageLBlockComponent} from '../image-l-block/image-l-block.component';
import {ImageLargeBlockComponent} from '../image-large-block/image-large-block.component';
import {ImageRBlockComponent} from '../image-r-block/image-r-block.component';
import {TextImgBlockComponent} from '../text-img-block/text-img-block.component';
import {ImgShadowRBlockComponent} from '../img-shadow-r-block/img-shadow-r-block.component';
import {ImageFullComponent} from '../image-full/image-full.component';
import {ImageFullButtonBlockComponent} from '../image-full-button-block/image-full-button-block.component';
import {TextBlockComponent} from '../text-block/text-block.component';
import {EventImageBlockComponent} from '../event-image-block/event-image-block.component';
import {ImageRButtonComponent} from '../image-r-button/image-r-button.component';
import {ImageLButtonComponent} from '../image-l-button/image-l-button.component';
import {EventsBlockComponent} from '../events-block/events-block.component';

const BLOCKS_MAP: {[key: string]: any} = {
  [Block.ImageR]: ImageRBlockComponent,
  [Block.ImageL]: ImageLBlockComponent,
  [Block.ImageLarge]: ImageLargeBlockComponent,
  [Block.TextImgBlock]: TextImgBlockComponent,
  [Block.ImgShadowR]: ImgShadowRBlockComponent,
  [Block.ImageFull]: ImageFullComponent,
  [Block.ImageFullButton]: ImageFullButtonBlockComponent,
  [Block.TextBlock]: TextBlockComponent,
  [Block.EventImageBlock]: EventImageBlockComponent,
  [Block.ImageRightButton]: ImageRButtonComponent,
  [Block.ImageLeftButton]: ImageLButtonComponent,
  [Block.EventsBlock]: EventsBlockComponent
};

@Component({
  selector: 'exo-block-renderer',
  templateUrl: './block-renderer.component.html',
  styleUrls: ['./block-renderer.component.scss']
})
export class BlockRendererComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {}

  @Input()
  blocks: any[];

  ngOnInit() {
    for (const block of this.blocks) {
      if (BLOCKS_MAP[block.type]) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
          BLOCKS_MAP[block.type]
        );
        const componentRef = this.vcr.createComponent(componentFactory);
        (componentRef.instance as any).data = block;
      }
    }
  }
}
