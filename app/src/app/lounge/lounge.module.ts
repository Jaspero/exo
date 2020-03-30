import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {LoungeRoutingModule} from './lounge-routing.module';
import {LoungeComponent} from './lounge.component';

@NgModule({
  declarations: [LoungeComponent],
  imports: [CommonModule, LoungeRoutingModule, SharedModule]
})
export class LoungeModule {}
