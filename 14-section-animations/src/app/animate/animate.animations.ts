import { transition, trigger, useAnimation } from '@angular/animations';
import { bounce, fadeOutUp } from 'ng-animate';

export const rectAnimation = trigger('rect', [
  transition(':enter', useAnimation(bounce)),
  transition(':leave', useAnimation(fadeOutUp), {
    params: { timing: 1, delay: 0.1 }
  })
]);
