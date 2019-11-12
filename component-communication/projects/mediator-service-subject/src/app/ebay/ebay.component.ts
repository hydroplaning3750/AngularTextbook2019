import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.scss']
})
export class EbayComponent {
  public searchFor$: Observable<string>;

  constructor(private _stateService: StateService) {
    this.searchFor$ = _stateService.getState();
   }
}
