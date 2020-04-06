import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {animation: '+'}
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    data: {animation: '*'}
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
    data: {animation: '*'}
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
    data: {animation: '*'}
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
    data: {animation: '*'}
  },
  {
    path: 'lounge',
    loadChildren: () => import('./lounge/lounge.module').then(m => m.LoungeModule),
    data: {animation: '*'}
  },
  {
    path: 'nail',
    loadChildren: () => import('./nail-bar/nail-bar.module').then(m => m.NailBarModule),
    data: {animation: '*'}
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
