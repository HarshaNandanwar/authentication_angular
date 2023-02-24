import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { JwtRequest } from '../model/jwt-request';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  loginUser(user: any) {
    return this.http.post(`${this.baseUrl}authenticate`, user);
  }

  register(user:JwtRequest):Observable<any>{
    return this.http.post(`${this.baseUrl}save_user`, user);
  }

  userList():Observable<JwtRequest[]>{
    return this.http.get<JwtRequest[]>(`${this.baseUrl}user-list`);
  }

  getToken(){
    return localStorage.getItem('jwtToken')
  }
}
