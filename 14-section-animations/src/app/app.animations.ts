import {
  animate, group, keyframes, query, state, style, transition, trigger
} from '@angular/animations';

export const boxAnimation = trigger('box', [
  state('start', style({ background: 'blue' })),
  state('end', style({ background: 'red', transform: 'scale(1.2)' })),
  state('special', style({ background: 'orange', transform: 'scale(0.5)', borderRadius: '50%' })),
  transition('start => end', animate(300)),
  transition('end => start', animate('600ms ease-in-out')),
  transition('special <=> *', [
    group([
      query('h4', animate(500, style({ fontSize: '.5rem', color: 'red' }))),
      style({ background: 'green' }),
      animate(1000, style({ background: 'pink' })),
      animate(750)
    ])
  ]),
  // void => *
  transition(':enter', [
    animate('4s', keyframes([
      style({ background: 'red', offset: 0 }),
      style({ background: 'black', offset: 0.2 }),
      style({ background: 'green', offset: 0.3 }),
      style({ background: 'blue', offset: 1 }),
    ]))
    // style({ opacity: 0 }),
    // animate('800ms ease-out')
  ]),
  // * => void
  transition(':leave', [
    style({ opacity: 1 }),
    group([
      animate(800, style({ opacity: 0, transform: 'scale(1.2)' })),
      animate(300, style({ color: '#000', fontWeight: 'bold' }))
    ])
  ])
]);
