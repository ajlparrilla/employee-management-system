import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms'
import { AdministratorPage } from '../administrator-page';
import { StaffPageService } from '../staff-page.service';

import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  staff: any;

  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl(null, [Validators.required]),
    position: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  
  constructor(private http:HttpClient, private _router:Router, public _staffService: StaffService, public staffPageService:StaffPageService) { }

  ngOnInit(){
    this.getStaff()
    this.refreshStaff()
  }

  getStaff(){
    this.staffPageService.getStaff()
    .subscribe((res) => {
      console.log(res);
      this.staff = res
    })
  }

  refreshStaff(){
    this.staffPageService.getStaff()
    .subscribe((res) => {
      console.log(res);
      this.staff = res
    })
  }

  postStaff(staff: AdministratorPage){
    this.staffPageService.postStaff(staff)
    .subscribe((res) => {
      console.log(res);
      this.staff = res
      this.refreshStaff()
    })
  }

  putStaff(staff: AdministratorPage){
    this.staffPageService.putStaff(staff)
    .subscribe((res) => {
      this.getStaff()
      this.staffPageService.selectedStaff = new AdministratorPage()
    })
  }

  deleteStaff(_id:string){
    this.staffPageService.deleteStaff(_id)
    .subscribe((res) => {
      this.getStaff()
    })
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.deleteStaff(_id)
      this.refreshStaff();
    }
  }

  register(){
    if(!this.registerForm.valid){
      console.log('Invalid form'); return;
    }

    this._staffService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data => {console.log(JSON.stringify(this.registerForm.value)); this._router.navigate(['/staff/page']); this.refreshStaff()},
      error => console.log(error)
    )
  }
}
