import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VasanEyeCare';

  constructor() {

  }

  ngOnInit(): void {

  }

}


