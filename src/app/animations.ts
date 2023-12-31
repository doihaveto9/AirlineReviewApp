import { animation, trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

export const slideIn = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
              style({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
              })
            ]),
            query(':enter', [
              style({ right: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
              query(':leave', [
                animate('500ms ease-out', style({ right: '100%'}))
              ]),
              query(':enter', [
                animate('500ms ease-out', style({ right: '0%' }))
              ])
            ]),
          ])
    ]);