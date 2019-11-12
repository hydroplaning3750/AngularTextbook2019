// This is a long version of a component that illustrates the use
// of subscribe, unsubscribe, and ngOnDestroy
// For a shorter version that uses async pipe see eBayComponent
// With Async pipe you don't need to unsubscribe

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.scss']
})
export class AmazonComponent {
  public searchFor: string;
  public subscription: Subscription;

  constructor(private _stateService: StateService) {
    this.subscription = _stateService.getState()
      .subscribe(state => this.searchFor = state);
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();  // a must
   }
}
