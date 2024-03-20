import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-family-group-management',
  templateUrl: './family-group-management.component.html',
  styleUrls: ['./family-group-management.component.css']
})
export class FamilyGroupManagementComponent {

  @Output() changeForm = new EventEmitter<number>();

  goToForm(code: number) {
    this.changeForm.emit(code);
  }
}
