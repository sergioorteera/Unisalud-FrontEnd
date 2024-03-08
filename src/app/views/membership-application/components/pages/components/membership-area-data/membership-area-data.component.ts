import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MbsAplAffiliationAreaDataService } from '../../../../services/mbs-apl-affiliation-area-data.service';

@Component({
  selector: 'app-membership-area-data',
  templateUrl: './membership-area-data.component.html',
  styleUrls: ['./membership-area-data.component.css']
})

export class MembershipAreaDataComponent implements OnInit {

  affiliationAreaDataForm: FormGroup; //inicializar bien

  constructor(
    private formBuilder: FormBuilder,
    private mbsAplAffiliationAreaDataService: MbsAplAffiliationAreaDataService,
  ) { }

  ngOnInit(): void {
    this.affiliationAreaDataForm = this.initForm();
  }

  onSaveAffiliationAreaData(): void {
    this.mbsAplAffiliationAreaDataService.onSaveAffiliationAreaData(this.affiliationAreaDataForm);
  }

  initForm(): FormGroup {
    return (this.affiliationAreaDataForm = this.formBuilder.group({
      fechaIngreso: [null],
      tipoAfiliacion: [null],
      observaciones: [null],
    }));
  }
}
