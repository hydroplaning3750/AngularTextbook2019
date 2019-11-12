import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { StateService } from '../shared/services/state.service';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchInput: FormControl;

  constructor(private _stateService: StateService) {
    this.searchInput = new FormControl('');

    this.searchInput.valueChanges
      .pipe(debounceTime(300))
      .subscribe(searchValue => this._stateService.searchCriteria = searchValue);
   }
}
