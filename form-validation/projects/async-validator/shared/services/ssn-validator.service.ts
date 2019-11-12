import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SsnValidatorService {
  checkWorkAuthorization(field: AbstractControl) : Observable<ValidationErrors | null> {
    //In a real-world app you'd make an HTTP call to the server to check if the value is valid
    return of(field.value.indexOf('123') >= 0 
      ? null : {work: " You're not authorized to work"});
  }
}
