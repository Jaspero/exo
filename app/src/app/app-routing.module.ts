import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DelayResolver} from './shared/resolvers/delay.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'exo-events',
    loadChildren: () =>
      import('./exo-events/exo-events.module').then(m => m.ExoEventsModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'lounge',
    loadChildren: () =>
      import('./lounge/lounge.module').then(m => m.LoungeModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'lounge-menu',
    loadChildren: () =>
      import('./lounge-menu/lounge-menu.module').then(m => m.LoungeMenuModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'nail',
    loadChildren: () =>
      import('./nail-bar/nail-bar.module').then(m => m.NailBarModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'nail-bar-menu',
    loadChildren: () =>
      import('./nail-bar-menu/nail-bar-menu.module').then(
        m => m.NailBarMenuModule
      ),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'location',
    loadChildren: () =>
      import('./locations/locations.module').then(m => m.LocationsModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: 'experiences',
    loadChildren: () =>
      import('./experiences/experiences.module').then(m => m.ExperiencesModule),
    resolve: {
      delay: DelayResolver
    }
  },
  {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
  // TODO:
  // Windows machines break when they try to pull a folder named '**'
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./not-found/not-found.module').then(m => m.NotFoundModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
