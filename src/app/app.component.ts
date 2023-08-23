import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VasanEyeCare';
  drug1: any
  drug2: any
  constructor(private service: CustomerServiceService) {

  }

  ngOnInit(): void {
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


