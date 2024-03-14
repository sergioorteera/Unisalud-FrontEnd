import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { AffiliationDataDetail, AffiliationData } from '../../model/AffiliationData.model';

@Injectable({
  providedIn: 'root'
})
export class AffiliationDataService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getExternalEntity(): Observable<AffiliationDataDetail>{
    return this.http.get<AffiliationDataDetail>(`${this.apiUrl}/catalogos`);
  }

  createSolicitudAfiliacion(solicitudAfiliacion: AffiliationData):Observable<AffiliationData> {
    return this.http.post<AffiliationData>(`${this.apiUrl}/afiliaciones`, solicitudAfiliacion)
  }

}

