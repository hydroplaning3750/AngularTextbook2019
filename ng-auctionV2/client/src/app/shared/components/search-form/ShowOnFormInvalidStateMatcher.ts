import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, NgForm, FormGroupDirective } from '@angular/forms';
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return !!((control && control.invalid) || (form && form.hasError('minLessThanMax')));
  }
}
