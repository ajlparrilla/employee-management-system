import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  loginForm: FormGroup=new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _staff: StaffService) { }

  ngOnInit(): void {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._staff.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data), this._router.navigate(['/staff/page'])},
      error=>console.error(error)
    )
  }

}
