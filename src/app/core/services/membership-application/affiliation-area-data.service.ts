import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AffiliationAreaDataService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


}
