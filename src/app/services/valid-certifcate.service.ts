import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidCertifcateService {

  constructor(private http: HttpClient) {}

  getAllData(pagenumber: number, searchQuery: any, requestTypeFilter: string, usagetypeFilter: string, addedDateFilter: string,addeddatefiltereada:string): Observable<any> {
    // Adjust your API endpoint and parameters accordingly
    return this.http.get(`${environment.baseApi}/ValidCertificate?pagenumber=${pagenumber}&requestNumber=${searchQuery}&requestType=${requestTypeFilter}&usagetype=${usagetypeFilter}&addedDateFilter=${addedDateFilter}&addeddatefiltereada=${addeddatefiltereada}`);
  }
  
}
