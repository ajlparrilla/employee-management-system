import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http:HttpClient) { }

  login(body: any){
    return this._http.post('http://127.0.0.1:3000/employee/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
