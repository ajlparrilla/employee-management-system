import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { AdministratorPage } from './administrator-page';
import { StaffLoginComponent } from './staff-login/staff-login.component';

@Injectable({
  providedIn: 'root'
})
export class AdministratorPageService {
  selectedStaff: AdministratorPage;
  staff: AdministratorPage[]
  constructor(private http:HttpClient) { 
    this.selectedStaff = new AdministratorPage()
  }

  getDatabyId(id: string){
    return this.http.get(`http://35.240.224.193:8080/administrator/page/`+id)
  }

  updateData(id:string, data:any){
    return this.http.put(`http://35.240.224.193:8080/administrator/page/`+id, data)
  }

  getStaff(){
    return this.http.get(`http://35.240.224.193:8080/administrator/page`)
  }

  postStaff(staff: AdministratorPage){
    return this.http.post(`http://35.240.224.193:8080/administrator/page`, staff)
  }

  putStaff(staff: AdministratorPage){
    return this.http.put(`http://35.240.224.193:8080/administrator/page/${staff._id}`, staff)
  }

  deleteStaff(_id:string){
    return this.http.delete(`http://35.240.224.193:8080/administrator/page/${_id}`)
  }
}
