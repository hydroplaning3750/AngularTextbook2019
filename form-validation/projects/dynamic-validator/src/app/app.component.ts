import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-validator';

  formModel: FormGroup;

  countryCtrl: FormControl;
  phoneCtrl: FormControl;

  constructor(formBuilder: FormBuilder) {
    this.formModel = formBuilder.group({
      country: [''],
      phone: ['']
    })
  }

  ngOnInit(): void {
    this.countryCtrl = this.formModel.get('country') as FormControl;
    this.phoneCtrl = this.formModel.get('phone') as FormControl;
    if (this.countryCtrl) {
      this.countryCtrl.valueChanges.subscribe(country => {  //Subscribes to changes in the country control
        if (country === 'USA') {
          this.phoneCtrl.setValidators([Validators.minLength(10)])  //Phone # validator for USA
        } else {
          this.phoneCtrl.setValidators([Validators.minLength(11)]); //Phone # validator for other countries
        }      
        //Emits the updated validator to the subscribers of valueChanges
        this.phoneCtrl.updateValueAndValidity();
      });
    }
  }
}
