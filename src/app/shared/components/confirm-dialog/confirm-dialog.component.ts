import { Component, EventEmitter, Input, Output } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'shared-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  @Input() modalId: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();
  hovered: boolean = false;

  constructor() { }

  open(): void {
    const myModal = document.getElementById(this.modalId);
    if (myModal) {
      var bootstrapModal = new bootstrap.Modal(myModal);
      bootstrapModal.show();
    }
  }

  onConfirm(): void {
    this.confirm.emit();
  }

}
