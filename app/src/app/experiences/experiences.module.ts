import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {ExperiencesComponent} from './experiences.component';

const routes: Routes = [{
  path: '',
  component: ExperiencesComponent,
  data: {
    id: 'experiences'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    BlocksModule
  ]
})
export class ExperiencesModule { }
