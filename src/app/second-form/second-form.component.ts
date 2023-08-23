import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent {
  drug1: any
  drug2: any
  form_get:any
  constructor(private service: CustomerServiceService,private route:ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(value =>{
      console.log("value",value)
      this.form_get =value['data']
    })
    this.drugOne()
    this.drugTwo()
  }


  drugOne() {
    this.drug1 =this.service.getDrungOne()
   }
   drugTwo() {
     this.drug2 =this.service.getDrungTwo()
    }
}
