import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AffiliationDataDetail, AreaAfiliaciones, DatosCotizante } from 'src/app/core/model/AffiliationData.model';
import { AffiliationDataService } from '../../../core/services/membership-application/affiliation-data.service';

@Injectable({
  providedIn: 'root'
})
export class MbsAplAffiliationDataService {

  membershipAreaData: AreaAfiliaciones;
  contributorData: DatosCotizante;

  constructor(
    private affiliationDataService: AffiliationDataService,
  ) { }

  getAffiliationData(): Observable<AffiliationDataDetail>{
    return this.affiliationDataService.getExternalEntity();
  }

  saveMembershipAreaData(membershipAreaData: AreaAfiliaciones) {
    this.membershipAreaData = membershipAreaData;
    console.log('desde el save', this.membershipAreaData);
  }

  saveContributorData(contributorData: DatosCotizante) {
    this.contributorData = contributorData;
    console.log('desde el save', this.contributorData);
  }

}
