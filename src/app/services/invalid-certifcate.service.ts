// invalid-certifcate.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvalidCertifcateService {
  
  constructor(private http: HttpClient) {}

  getAllData(pagenumber: number, searchQuery: any, requestTypeFilter: string, usagetypeFilter: string, addedDateFilter: string,addeddatefiltereada:string): Observable<any> {
    return this.http.get(`${environment.baseApi}/inValidCertificate?pagenumber=${pagenumber}&requestNumber=${searchQuery}&requestType=${requestTypeFilter}&usagetype=${usagetypeFilter}&addedDateFilter=${addedDateFilter}&addeddatefiltereada=${addeddatefiltereada}`);
  }

  postExcelFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('excelFile', file);

    return this.http.post(`${environment.baseApi}/invalidcertificatefromexcel?pageNumber=1`, formData, {
      headers: new HttpHeaders({
        // Add any required headers here
      })
    });
  }

}