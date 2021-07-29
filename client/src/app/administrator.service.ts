import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http:HttpClient) {
    
  }

  register(body:any){
    return this.http.post('http://35.240.224.193:8080/administrator/page', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

  login(body: any){
    return this.http.post('http://35.240.224.193:8080/administrator/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
