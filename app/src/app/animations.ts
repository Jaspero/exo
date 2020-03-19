import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild, state
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('Home <=> About', [
    //   query(':enter, :leave ',
    //     style({ position: 'absolute',  width: '100%', backgroundColor: 'black'}),
    //     { optional: true }),
    //   group([
    //     query(':enter', [
    //       style({ transform: 'translateY(100%)', backgroundColor: 'black', opacity: '1' }),
    //       animate('1.5s ease-out',
    //         style({ transform: 'translateY(0%)', backgroundColor: 'black', opacity: '1'})),
    //     ], { optional: true }),
    //     query(':leave', [
    //       style({ transform: 'translateY(0%)', backgroundColor: 'black', opacity: '1'}),
    //       animate('1.5s ease-out',
    //         style({ transform: 'translateY(-100%)', backgroundColor: 'black', opacity: '1'}))
    //     ], { optional: true }),
    //   ])
    // ])
  ]);

export const aboutAnimate =
  trigger('animate', [
  state('inactive',
    style({
      transform: 'translateY(100%)',
      backgroundColor: 'black',
      height: '0%',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
  })),
  state('active', style({
    transform: 'translateY(0%)',
    backgroundColor: 'black',
    height: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
  })),
  transition('inactive => active', animate('1s ease-in')),
  transition('active => inactive', animate('1s ease-out'))
]);




