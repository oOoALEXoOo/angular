import { Component } from '@angular/core';
import { rectAnimation } from './animate.animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrl: './animate.component.scss',
  animations: [rectAnimation]
})
export class AnimateComponent {
  visible = true;
}
