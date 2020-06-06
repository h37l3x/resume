import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('void <=> *', [
      query(':leave', [style({ position: 'absolute', left: 0, right: 0, opacity: 1 })], { optional: true }),
      query(':enter', [style({ position: 'absolute', left: 0, right: 0, opacity: 0 })], { optional: true }),
      query(':leave', [animate('0.3s', style({ opacity: 0 }))], { optional: true }),
      query(':enter', [animate('0.3s', style({ opacity: 1 }))], { optional: true })
    ]),
    transition('* <=> *', [
      query(':leave', [style({ position: 'absolute', left: 0, right: 0, opacity: 1 })], { optional: true }),
      query(':enter', style({ position: 'absolute', left: 0, right: 0, opacity: 0 })),
      query(':leave', [animate('0.3s', style({ opacity: 0 }))], { optional: true }),
      query(':enter', animate('0.3s', style({ opacity: 1 })))
    ])
  ]);
