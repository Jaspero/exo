import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {NailBarComponent} from './nail-bar.component';
import {NailBarRoutingModule} from './nail-bar-routing.module';

@NgModule({
  declarations: [NailBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    NailBarRoutingModule,
    BlocksModule
  ]
})
export class NailBarModule {}
