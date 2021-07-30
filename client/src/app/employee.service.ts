import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http:HttpClient) { }

  login(body: any){
    return this._http.post('http://35.240.224.193:8080/employee/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
