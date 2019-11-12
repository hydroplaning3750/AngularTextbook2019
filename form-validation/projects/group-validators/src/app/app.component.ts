import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';

function ssnValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value || '';
  //Matches the value against a regex representing the SSN nine-digit format (match any digit 0-9 exactly 9 times)
  return value.match(/^\d{9}$/) ? null : {ssn: {description: 'SSN is invalid'}};
}

function equalValidator({value}: FormGroup) : {[key: string]: any} {
  //Using rest params, gets the names of all properties of FormGroup.value
  const [first, ...rest] = Object.keys(value || {});  //Null-coalesce

  //Iterates through the properties' values to check if they're equal
  //  If equal, returns null; otherwise, returns an error object with the error named equal
  return rest.every(v => value[v] == value[first]) ? null : {equal: true};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'group-validators';

  formModel: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formModel = _formBuilder.group({
      username: ['', Validators.required],
      socialSecurity: ['', ssnValidator],
      passwordsGroup: _formBuilder.group({
        password: ['', Validators.minLength(5)],
        pwConfirm: ['']
      }, {validator: equalValidator}) //Attaches the equalValidator to passwordsGroup to ensure that both entered passwords match
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }
}
