import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AdministratorPageService } from '../administrator-page.service';
import { AdministratorPage } from '../administrator-page';

 
@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  id:any;
  data: any;
  constructor(private AdministratorPageService: AdministratorPageService, private route: ActivatedRoute) { }

  form= new FormGroup({
    fullname: new FormControl(''),
    position: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)
    this.getData()
  }

  getData(){
    this.AdministratorPageService.getDatabyId(this.id).subscribe(res => {
      this.data = res;
      this.form = new FormGroup({
        fullname: new FormControl(this.data.fullname),
        position: new FormControl(this.data.position),
        username: new FormControl(this.data.username),
        password: new FormControl(this.data.password)
      })
    })
  }

  updateData(){
    this.AdministratorPageService.updateData(this.id, this.form.value).subscribe(res =>{
      this.data = res;
    })
  }
}
