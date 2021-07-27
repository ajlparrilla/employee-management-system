import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AdministratorPage } from './administrator-page';
import { AdministratorPageService } from './administrator-page.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdministratorService } from './administrator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient, private _router:Router, public _administratorService: AdministratorService, public administratorPageService:AdministratorPageService) { }
  
  getStaff(){
    return this.http.get(`http://localhost:3000/administrator/page`)
  }

  postStaff(staff: AdministratorPage){
    return this.http.post(`http://localhost:3000/administrator/page`, staff)
  }

  putStaff(staff: AdministratorPage){
    return this.http.put(`http://localhost:3000/administrator/page/${staff._id}`, staff)
  }

  deleteStaff(_id:string){
    return this.http.get(`http://localhost:3000/administrator/page/${_id}`)
  }

  ngOnInit() {
    this.getStaff()
  } 

}
