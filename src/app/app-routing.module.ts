import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondFormComponent } from './second-form/second-form.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path:"",
    component:FormsComponent
  },
  {
    path:"form",
    component:SecondFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
