import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employer-data',
  templateUrl: './employer-data.component.html',
  styleUrls: ['./employer-data.component.css']
})
export class EmployerDataComponent {

  @Output() cambioFormulario = new EventEmitter<number>();


  irAFormulario(code: number) {
    this.cambioFormulario.emit(code);
  }

}
