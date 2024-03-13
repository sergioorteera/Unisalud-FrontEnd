import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';
import { AreaAfiliaciones } from 'src/app/core/model/SolicitudAfiliacion.model';


@Component({
  selector: 'app-membership-area-data',
  templateUrl: './membership-area-data.component.html',
  styleUrls: ['./membership-area-data.component.css']
})

export class MembershipAreaDataComponent implements OnInit {

  @Output() cambioFormulario = new EventEmitter<number>();
  membershipAreaDataForm: FormGroup;
  formSend:boolean = false;
  membershipAreaData: AreaAfiliaciones;

  constructor(
    private formBuilder: FormBuilder,
    private mbsAplAffiliationDataService: MbsAplAffiliationDataService,
  ) { }

  ngOnInit(): void {
    this.membershipAreaDataForm = this.initForm();
  }

  initForm(): FormGroup {
    return (this.membershipAreaDataForm = this.formBuilder.group({
      fechaIngreso: [null],
      tipoAfiliacion: [null],
      observaciones: [null],
    }));
  }

  onSaveMembershipAreaData(): void {
    this.formSend = true;
    this.membershipAreaData = this.getMembershipAreaDataFromForm(this.membershipAreaDataForm);
    console.log(this.membershipAreaData);
    this.cambioFormulario.emit(2); //
  }

  private getMembershipAreaDataFromForm(affiliationAreaDataForm: FormGroup): AreaAfiliaciones {
    return new AreaAfiliaciones(
      affiliationAreaDataForm.controls['fechaIngreso'].value,
      affiliationAreaDataForm.controls['tipoAfiliacion'].value,
      affiliationAreaDataForm.controls['observaciones'].value,
    )
  }

  irAFormulario(numero: number) {
    this.cambioFormulario.emit(numero);
  }

}
