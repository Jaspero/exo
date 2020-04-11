import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {LoungeRoutingModule} from './lounge-routing.module';
import {LoungeComponent} from './lounge.component';

@NgModule({
  declarations: [LoungeComponent],
  imports: [
    CommonModule,
    LoungeRoutingModule,
    SharedModule,
    BlocksModule
  ]
})
export class LoungeModule {}
