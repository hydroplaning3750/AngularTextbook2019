import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';

function ssnValidator(control: FormControl): ValidationErrors | null{
  const value: string = control.value || '';
  //Matches the value against a regex representing the SSN nine-digit format (match any digit 0-9 exactly 9 times)
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: {description: 'SSN is invalid'}};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-validator';

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      socialSecurity: new FormControl('', ssnValidator)
    });
  }
}
