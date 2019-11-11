import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShowOnFormInvalidStateMatcher } from './ShowOnFormInvalidStateMatcher';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  @Output() searchEmitter = new EventEmitter();
  readonly matcher = new ShowOnFormInvalidStateMatcher();
  readonly searchForm: FormGroup;

  constructor(formBuilder: FormBuilder, private _router: Router) {
    this.searchForm = formBuilder.group({
      productTitle:  [, Validators.minLength(2)],
      minPrice: [, Validators.min(0)],
      maxPrice: [, [Validators.min(0), Validators.max(10000)]]
    }, {
      validator: [minLessThanMaxValidator]
    })
  }

  onSearch() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.searchEmitter.emit();
      this._router.navigate(['/search-results'], { 
        queryParams: withoutEmptyValues(this.searchForm.value) 
      });
    }
  }
}

/**
 * Removes properties with empty values (everything that's
 * considered a "falsy" value in JavaScript) from the original object.
 *
 * See: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
function withoutEmptyValues(object: any): any {
  return Object.keys(object).reduce((queryParams: any, key) => {
    if (object[key]) { queryParams[key] = object[key]; }
    return queryParams;
  }, {});
}

function minLessThanMaxValidator(group: FormGroup): ValidationErrors | null {
  const minPrice = group.controls['minPrice'].value;
  const maxPrice = group.controls['maxPrice'].value;

  if (minPrice && maxPrice) {
    return (minPrice <= maxPrice) ? null : { minLessThanMax: true };
  } else {
    return null;
  }
}