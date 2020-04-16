import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {IntersectingDirective} from './intersecting.directive';
import {IntersectionService} from './intersection.service';

@NgModule({
  imports: [CommonModule],
  exports: [IntersectingDirective],
  declarations: [IntersectingDirective]
})
export class IntersectionModule {
  static forRoot(): ModuleWithProviders<IntersectionModule> {
    return {
      ngModule: IntersectionModule,
      providers: [IntersectionService]
    };
  }
}
