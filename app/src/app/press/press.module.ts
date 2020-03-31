import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {PressComponent} from './component/press/press.component';
import {PressListComponent} from './component/press-list/press-list.component';
import {PressRoutingModule} from './press-routing.module';

@NgModule({
  declarations: [PressComponent, PressListComponent],
  imports: [CommonModule, PressRoutingModule, ScullyLibModule, SharedModule]
})
export class PressModule {}
