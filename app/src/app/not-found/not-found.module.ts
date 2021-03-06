import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found.component';
import {NotFoundRoutingModule} from './not-found-routing.module';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [NotFoundRoutingModule, SharedModule, RouterModule],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
