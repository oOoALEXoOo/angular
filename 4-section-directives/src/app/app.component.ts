import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isVisible = true;
}
