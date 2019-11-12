import { Component } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, FormBuilder } from '@angular/forms';
import { SsnValidatorService } from 'projects/async-validator/shared/services/ssn-validator.service';

function ssnValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value || '';
  //Matches the value against a regex representing the SSN nine-digit format (match any digit 0-9 exactly 9 times)
  return value.match(/^\d{9}$/) ? null : {ssn: {description: 'SSN is invalid'}};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'async-validator';

  formModel: FormGroup;

  constructor(formBuilder: FormBuilder, private _ssnValidatorService: SsnValidatorService ) {
    this.formModel = formBuilder.group({
      ssnControl: new FormControl('', 
      ssnValidator, //Attaches the sync validator to ssnControl
      _ssnValidatorService.checkWorkAuthorization.bind(SsnValidatorService))  //Attaches async validator to ssnControl
    });
  }
}
