import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AffiliationDataDetail } from 'src/app/core/model/AffiliationData.model';
import { AffiliationDataService } from '../../../core/services/membership-application/affiliation-data.service';

@Injectable({
  providedIn: 'root'
})
export class MbsAplAffiliationDataService {

  constructor(
    private affiliationDataService: AffiliationDataService,
  ) { }

  getAffiliationData(): Observable<AffiliationDataDetail>{
    return this.affiliationDataService.getExternalEntity();
  }

}
