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
import {ImgTextLBlockComponent} from '../img-text-l-block/img-text-l-block.component';

const BLOCKS_MAP: {[key: string]: any} = {
  [Block.ImageR]: ImageRBlockComponent,
  [Block.ImageL]: ImageLBlockComponent,
  [Block.ImageLarge]: ImageLargeBlockComponent,
  [Block.TextImageL]: ImgTextLBlockComponent
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
