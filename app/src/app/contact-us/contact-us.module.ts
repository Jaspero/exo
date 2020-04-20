import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {MarkdownModule} from '../shared/modules/markdown/markdown.module';
import {ContactUsRoutingModule} from './contact-us-routing.module';
import {ContactUsComponent} from './contact-us.component';
import {IntersectionModule} from '../shared/modules/intersecting/intersection.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    SharedModule,
    ContactUsRoutingModule,
    MarkdownModule,
    IntersectionModule
  ]
})
export class ContactUsModule {}
