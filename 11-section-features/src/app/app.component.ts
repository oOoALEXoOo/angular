import { Component, ComponentRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './directives/ref.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(RefDirective) refDir: RefDirective;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('App Component Page!');
    this.meta.addTags([
      { name: 'keywords', content: 'angular, google, typescript' },
      { name: 'description', content: 'this is app component page' }
    ]);
  }

  showModal(): void {
    const modalComponent: ComponentRef<ModalComponent> = this.refDir.viewContainerRef.createComponent(ModalComponent);

    modalComponent.instance.title = 'Dynamic Title';
    modalComponent.instance.closeModal.subscribe(() => {
      this.refDir.viewContainerRef.clear();
    });
  }
}
