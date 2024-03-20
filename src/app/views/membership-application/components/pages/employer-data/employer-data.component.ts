import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employer-data',
  templateUrl: './employer-data.component.html',
  styleUrls: ['./employer-data.component.css']
})
export class EmployerDataComponent {

  @Output() changeForm = new EventEmitter<number>();


  goToForm(code: number) {
    this.changeForm.emit(code);
  }
}
