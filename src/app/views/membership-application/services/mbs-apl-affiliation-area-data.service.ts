import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { SolicitudAfiliacion, SolicitudAfiliacionDetail } from 'src/app/core/model/SolicitudAfiliacion.model';
import { AffiliationAreaDataService } from '../../../core/services/membership-application/affiliation-area-data.service';

@Injectable({
  providedIn: 'root'
})
export class MbsAplAffiliationAreaDataService {

  constructor(
    private affiliationAreaDataService: AffiliationAreaDataService,
  ) { }

  getLaboralData(): Observable<SolicitudAfiliacionDetail>{
    return this.affiliationAreaDataService.getExternalEntity();
  }

  onSaveAffiliationAreaData(affiliationAreaDataForm: FormGroup): void {

    const affiliationAreaData: SolicitudAfiliacion = this.getAffiliationAreaDataFromForm(affiliationAreaDataForm);
    console.log(affiliationAreaData); //IMPRESION OBEJETO
    this.affiliationAreaDataService.createSolicitudAfiliacion(affiliationAreaData).subscribe(
      () =>{

      }
    );
  }

  private getAffiliationAreaDataFromForm(affiliationAreaDataForm: FormGroup): SolicitudAfiliacion {
    return new SolicitudAfiliacion(
      affiliationAreaDataForm.controls['fechaIngreso'].value,
      affiliationAreaDataForm.controls['tipoAfiliacion'].value,
      affiliationAreaDataForm.controls['observaciones'].value,
    )
  }




}
