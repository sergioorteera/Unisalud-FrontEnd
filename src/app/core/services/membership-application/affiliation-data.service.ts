import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { SolicitudAfiliacionDetail, SolicitudAfiliacion } from '../../model/SolicitudAfiliacion.model';

@Injectable({
  providedIn: 'root'
})
export class AffiliationDataService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getExternalEntity(): Observable<SolicitudAfiliacionDetail>{
    return this.http.get<SolicitudAfiliacionDetail>(`${this.apiUrl}/catalogos`);
  }

  createSolicitudAfiliacion(solicitudAfiliacion: SolicitudAfiliacion):Observable<SolicitudAfiliacion> {
    return this.http.post<SolicitudAfiliacion>(`${this.apiUrl}/afiliaciones`, solicitudAfiliacion)
  }

}

