import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';
import { AreaAfiliaciones } from 'src/app/core/model/AffiliationData.model';


@Component({
  selector: 'app-membership-area-data',
  templateUrl: './membership-area-data.component.html',
  styleUrls: ['./membership-area-data.component.css']
})

export class MembershipAreaDataComponent implements OnInit {

  @Output() cambioFormulario = new EventEmitter<number>();
  membershipAreaDataForm: FormGroup;
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
      fechaIngresoSgsss: [null],
      tipoAfiliacion: [null],
      observacion: [null],
    }));
  }

  onSaveMembershipAreaData(): void {
    this.membershipAreaData = this.getMembershipAreaDataFromForm(this.membershipAreaDataForm);
    console.log(this.membershipAreaData);
    this.cambioFormulario.emit(2); //
  }

  private getMembershipAreaDataFromForm(membershipAreaDataForm: FormGroup): AreaAfiliaciones {
    return new AreaAfiliaciones(
      membershipAreaDataForm.controls['fechaIngresoSgsss'].value,
      membershipAreaDataForm.controls['tipoAfiliacion'].value,
      membershipAreaDataForm.controls['observacion'].value,
    )
  }

  irAFormulario(numero: number) {
    this.cambioFormulario.emit(numero);
  }

}
