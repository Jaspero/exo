import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlockRendererComponent} from './block-renderer/block-renderer.component';
import {ImageRBlockComponent} from './image-r-block/image-r-block.component';

@NgModule({
  declarations: [
    ImageRBlockComponent,

    BlockRendererComponent
  ],
  exports: [
    BlockRendererComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlocksModule { }
