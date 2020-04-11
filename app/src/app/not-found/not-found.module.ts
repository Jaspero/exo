import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found.component';

const ROUTES: Routes = [{
  path: '/',
  component: NotFoundComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
