import {
  Component, EventEmitter, Input, Output
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title = 'Default Modal';
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
}
