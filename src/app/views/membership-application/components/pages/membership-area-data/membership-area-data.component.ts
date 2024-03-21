import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';
import { AreaAfiliaciones } from 'src/app/core/model/AffiliationData.model';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-membership-area-data',
  templateUrl: './membership-area-data.component.html',
  styleUrls: ['./membership-area-data.component.css']
})

export class MembershipAreaDataComponent implements OnInit {

  @ViewChild(ConfirmDialogComponent) confirmationModal: ConfirmDialogComponent;
  @Output() changeForm = new EventEmitter<number>();

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
    this.mbsAplAffiliationDataService.saveMembershipAreaData(this.membershipAreaData);
    this.changeForm.emit(2);
  }

  private getMembershipAreaDataFromForm(membershipAreaDataForm: FormGroup): AreaAfiliaciones {
    return new AreaAfiliaciones(
      membershipAreaDataForm.controls['fechaIngresoSgsss'].value,
      membershipAreaDataForm.controls['tipoAfiliacion'].value,
      membershipAreaDataForm.controls['observacion'].value,
    )
  }

  goToForm(code: number) {
    this.changeForm.emit(code);
  }

  openConfirmationModal(): void {
    this.confirmationModal.open();
  }

  pruebaModal(){
    console.log('funiona');

  }

}
