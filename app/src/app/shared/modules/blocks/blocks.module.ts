import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlockRendererComponent} from './block-renderer/block-renderer.component';
import {ImageLBlockComponent} from './image-l-block/image-l-block.component';
import {ImageLargeBlockComponent} from './image-large-block/image-large-block.component';
import {ImageRBlockComponent} from './image-r-block/image-r-block.component';
import {TextImgBlockComponent} from './text-img-block/text-img-block.component';
import {ImgShadowRBlockComponent} from './img-shadow-r-block/img-shadow-r-block.component';
import {ImageFullComponent} from './image-full/image-full.component';
import {ImageFullButtonBlockComponent} from './image-full-button-block/image-full-button-block.component';
import {TextBlockComponent} from './text-block/text-block.component';
import {EventImageBlockComponent} from './event-image-block/event-image-block.component';
import {ImageRButtonComponent} from './image-r-button/image-r-button.component';
import {ImageLButtonComponent} from './image-l-button/image-l-button.component';

@NgModule({
  declarations: [
    ImageRBlockComponent,
    ImageLBlockComponent,
    ImageLargeBlockComponent,
    TextImgBlockComponent,
    ImgShadowRBlockComponent,
    ImageFullComponent,
    ImageFullButtonBlockComponent,
    TextBlockComponent,
    EventImageBlockComponent,
    ImageRButtonComponent,

    BlockRendererComponent,

    ImageLButtonComponent
  ],
  exports: [BlockRendererComponent],
  imports: [CommonModule]
})
export class BlocksModule {}
