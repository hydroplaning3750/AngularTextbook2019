import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-controls';

  //Creates a FormGroup that will represent the form
  formModel: FormGroup = new FormGroup({
    //Creates a FormArray for the emails form controls
    emails: new FormArray([
      //Add a single form control by default
      new FormControl()
    ])
  });
  
  get emailsFormArray() {
    return this.formModel.get('emails') as FormArray;
  }

  get value() {
    return JSON.stringify(this.formModel.value, null, 4); // indent with 4 spaces for readability
  }

  addEmail() {
    const emails = this.emailsFormArray;
    //Push a new FormControl onto the stack, causing the new UI element to be rendered
    emails.push(new FormControl());
  }

  onSubmit() {
    console.log(this.formModel.value);
  }
}
