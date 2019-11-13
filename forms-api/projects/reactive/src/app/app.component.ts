import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive';

  //This FormGroup is bound to a DOM element using the formGroup directive in the template
  myFormModel: FormGroup;

  //Instead of defining a form model with FormGroup, create a standalone instance of FormGroup
  weatherControl: FormControl = new FormControl();

  constructor() {
    //With Reactive Forms, the form is built on the TypeScript side (less error-prone)
    this.myFormModel = new FormGroup({  //Creates an instance of a form model
      username: new FormControl(), //Adds a control to the form model
      ssn: new FormControl(),
      passwordsGroup: new FormGroup({ //This FormGroup instance represents a part of the form, grouping two password controls together
        password: new FormControl(),
        pwConfirm: new FormControl()
      }),
      dateRange: new FormGroup({
        from: new FormControl(),
        to: new FormControl()
      })
    });
    
    this.weatherControl.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(city => this.getWeather(city))
      )
      .subscribe(weather => console.log(`Weather: ${weather}`));
  }
  
  onSubmit() {
    console.log(this.myFormModel.value);
  }  

  private getWeather(city: string) : string {
    let rand = Math.random();
    return (rand < 0.5)
      ? 'Sunny'
      : 'Cloudy';
  }
}
