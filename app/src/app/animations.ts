import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home <=> About', [
      query(':enter, :leave ',
        style({ position: 'absolute', height: '100%', width: '100%', opacity: '0'}),
        { optional: true }),
      group([
        query(':enter', [
          style({ opacity: '0' }),
          animate('.9s ease-in',
            style({opacity: '0'})),
        ], { optional: true }),
        query(':leave', [
          style({  opacity: '1'}),
          animate('.9s ease-out',
            style({ opacity: '1'}))
        ], { optional: true }),
      ])
    ])
  ]);


