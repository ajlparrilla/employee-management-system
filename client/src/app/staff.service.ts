import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private _http:HttpClient) { }

  register(body:any){
    return this._http.post('http://127.0.0.1:3000/staff/page', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

  login(body: any){
    return this._http.post('http://127.0.0.1:3000/staff/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
