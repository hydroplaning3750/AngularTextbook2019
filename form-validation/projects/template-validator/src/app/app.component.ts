import { Component, Directive } from '@angular/core';
import {NG_VALIDATORS, FormControl} from "@angular/forms";

export function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}

/**
 * This directive wraps existing ssnValidator function into a directive,
 * so it can be used in a template to validate a form field.
 */
@Directive({
  selector: '[ssn]',
  providers: [{ provide: NG_VALIDATORS, useValue: ssnValidator, multi: true }]
})
export class SsnValidatorDirective { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-validator';
}
