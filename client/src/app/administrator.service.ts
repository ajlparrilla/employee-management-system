import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http:HttpClient) {
    
  }

  register(body:any){
    return this.http.post('http://127.0.0.1:3000/administrator/page', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

  login(body: any){
    return this.http.post('http://127.0.0.1:3000/administrator/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
