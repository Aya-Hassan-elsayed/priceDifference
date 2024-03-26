import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:3000'

  constructor(private http:HttpClient) { }
  registerUser(userDetails:User){
    return this.http.post(`${this.baseUrl}/User`, userDetails);
  }
  getUserByEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/User?emailL=${email}`);
  }
}
