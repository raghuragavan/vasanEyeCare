import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() drugSchema: any;
  @Input() schemaType: any;
  form: any = FormGroup;
  formlist: any = []
  initialFormValues: any;
  constructor(private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    console.log("drugSchema", this.drugSchema)
    console.log("value***",this.schemaType)
    if (this.drugSchema)
      this.form = this.createForm(this.drugSchema.fields);
    this.initialFormValues = this.form.value;
    if (this.form.get('height'))
      this.form.get('height').valueChanges.subscribe(() => {
        this.calculateBMI();
      });
    if (this.form.get('weight'))
      this.form.get('weight').valueChanges.subscribe(() => {
        this.calculateBMI();
      });
      // this.form.get('bmi').disable();
  }

  calculateBMI() {
    var height
    if (this.form.get('height')) {
      height = this.form.get('height').value;
    }

    const weight = this.form.get('weight').value;

    if (height && weight) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmi = weight / (heightInMeters * heightInMeters);

      // Update the BMI field in the form (assuming you have a 'bmi' form control)
      this.form.get('bmi').setValue(bmi.toFixed(2));
    }
  }

  formSubmit(valid: any, value: any) {
    if (valid) {
      
      this.formlist.push(value)
      this.form.setValue(this.initialFormValues);
      this.form.markAsPristine(); // Mark the form as pristine
      this.form.markAsUntouched();
      console.log("value", this.formlist)
    }
    else {
      console.log("value else part", value)
    }
  }

  createForm(fields: any[]): FormGroup {
    console.log("fields", fields)
    const formGroup = this.fb.group({});

    fields.forEach(field => {
      const validators = field.isRequired ? [Validators.required] : [];
      const control = this.fb.control('', validators);

      formGroup.addControl(field.key, control);
    });

    return formGroup;
  }
}
