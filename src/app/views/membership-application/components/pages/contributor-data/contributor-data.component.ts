import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';

@Component({
  selector: 'app-contributor-data',
  templateUrl: './contributor-data.component.html',
  styleUrls: ['./contributor-data.component.css']
})
export class ContributorDataComponent implements OnInit {

  contributorDataForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mbsAplAffiliationDataService: MbsAplAffiliationDataService,
  ) { }


  ngOnInit(): void {
    this.contributorDataForm = this.initForm();
  }

  initForm(): FormGroup {
    return (this.contributorDataForm = this.formBuilder.group({
      fechaIngreso: [null],
      tipoAfiliacion: [null],
      observaciones: [null],
    }));
  }

}

