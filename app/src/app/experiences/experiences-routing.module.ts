import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {ExperiencesComponent} from './component/experiences/experiences.component';
import {MetaResolver} from '../shared/resolvers/meta.resolver';
import {DelayResolver} from '../shared/resolvers/delay.resolver';
import {ExperiencesListComponent} from './component/experiences-list/experiences-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesListComponent,
    data: {
      id: 'experiences'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: ExperiencesComponent,
    data: {
      collection: 'experiences'
    },
    resolve: {
      meta: MetaResolver,
      delay: DelayResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule {}
