import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SolicitudAfiliacionDetail } from 'src/app/core/model/SolicitudAfiliacion.model';
import { AffiliationDataService } from '../../../core/services/membership-application/affiliation-data.service';

@Injectable({
  providedIn: 'root'
})
export class MbsAplAffiliationDataService {

  constructor(
    private affiliationDataService: AffiliationDataService,
  ) { }

  getAffiliationData(): Observable<SolicitudAfiliacionDetail>{
    return this.affiliationDataService.getExternalEntity();
  }

}
