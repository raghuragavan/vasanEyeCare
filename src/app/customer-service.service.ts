import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
  private  drug1 = {
    "fields" : [
      {
        "label": "Date of Birth (YYYY-MM-DD)",
        "key": "birthday",
        "isRequired": true,
        "order": 1,
        "isReadonly": false,
        "type": "date"
      },
      {
        "label": "Gestational Age",
        "key": "gestationalAge",
        "isRequired": true,
        "order": 3,
        "unit": "weeks",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Sex",
        "items": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "key": "sex",
        "isRequired": true,
        "order": 4,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Height",
        "key": "height",
        "isRequired": true,
        "order": 5,
        "unit": "cm",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 6,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "BMI",
        "key": "bmi",
        "order": 11,
        "unit": "kg/m²",
        "isReadonly": true,
        "type": "number"
      }
    ]
  }

  private drug2 ={
    "fields": [
      {
        "label": "Date of Birth (YYYY-MM-DD)",
        "key": "birthday",
        "isRequired": true,
        "order": 1,
        "isReadonly": false,
        "type": "date"
      },
      {
        "label": "Sex",
        "items": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "key": "sex",
        "isRequired": true,
        "order": 2,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 3,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      }
    ]
  }

  getDrungOne(): any {
    return this.drug1;
  }

  getDrungTwo(): any {
    return this.drug2;
  }

}
