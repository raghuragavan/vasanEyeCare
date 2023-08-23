import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() drugSchema:any;
  form :any = FormGroup;
 

  constructor(private fb: FormBuilder,) {
  
  }

  ngOnInit(): void {
    console.log("drugSchema",this.drugSchema)
    if(this.drugSchema)
    this.form = this.createForm(this.drugSchema.fields);
  }

  formSubmit(valid:any,value:any){
    if(valid){
      console.log("value",value)
    }
    else{
      console.log("value else part",value)
    }
  }

  createForm(fields: any[]): FormGroup {
    console.log("fields",fields)
    const formGroup = this.fb.group({});

    fields.forEach(field => {
      const validators = field.isRequired ? [Validators.required] : [];
      const control = this.fb.control('', validators);

      formGroup.addControl(field.key, control);
    });

    return formGroup;
  }
}
