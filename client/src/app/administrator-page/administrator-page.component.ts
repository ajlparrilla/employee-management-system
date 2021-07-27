import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms'
import { AdministratorPage } from '../administrator-page';
import { AdministratorPageService } from '../administrator-page.service';

import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-administrator-page',
  templateUrl: './administrator-page.component.html',
  styleUrls: ['./administrator-page.component.css'],
  providers: [AdministratorPageService, AdministratorService]
})
export class AdministratorPageComponent implements OnInit {

  staff: any;

  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl(null, [Validators.required]),
    position: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  
  constructor(private http:HttpClient, private _router:Router, public _administratorService: AdministratorService, public administratorPageService:AdministratorPageService) { }

  
  ngOnInit(){
    this.getStaff()
    this.refreshStaff()
  }

  getStaff(){
    this.administratorPageService.getStaff()
    .subscribe((res) => {
      console.log(res);
      this.staff = res
    })
  }

  refreshStaff(){
    this.administratorPageService.getStaff()
    .subscribe((res) => {
      console.log(res);
      this.staff = res
    })
  }

  postStaff(staff: AdministratorPage){
    this.administratorPageService.postStaff(staff)
    .subscribe((res) => {
      console.log(res);
      this.staff = res
    })
  }

  putStaff(staff: AdministratorPage){
    this.administratorPageService.putStaff(staff)
    .subscribe((res) => {
      this.getStaff()
      this.administratorPageService.selectedStaff = new AdministratorPage()
    })
  }

  deleteStaff(_id:string){
    this.administratorPageService.deleteStaff(_id)
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

    this._administratorService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data => {console.log(JSON.stringify(this.registerForm.value)); this._router.navigate(['/administrator/page']); this.refreshStaff()},
      error => console.log(error)
    )
  }

}
