import { Component } from '@angular/core';
import { ObservableService } from './services/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  currentTime: Date;

  constructor(private _observableService: ObservableService) {
    this._observableService.createObservableService()
      .subscribe(data => this.currentTime = data);
  }
}
