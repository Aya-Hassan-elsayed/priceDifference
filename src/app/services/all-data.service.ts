// all-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  constructor(private http: HttpClient) {}

  getAllData(pagenumber: number, searchQuery: any, requestTypeFilter: string, usagetypeFilter: string, addedDateFilter: string,addeddatefiltereada:string): Observable<any> {
    // Adjust your API endpoint and parameters accordingly
    return this.http.get(`${environment.baseApi}/LiveAllData?pagenumber=${pagenumber}&requestNumber=${searchQuery}&requestType=${requestTypeFilter}&usagetype=${usagetypeFilter}&addedDateFilter=${addedDateFilter}&addeddatefiltereada=${addeddatefiltereada}`);
  }
  }
  

