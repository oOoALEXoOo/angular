import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { boxAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [boxAnimation]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }

  onAnimationStart(event: AnimationEvent) {
    console.log('onAnimationStart', event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log('onAnimationDone', event);
  }
}
