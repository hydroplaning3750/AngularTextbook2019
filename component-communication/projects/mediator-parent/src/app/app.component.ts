import { Component } from '@angular/core';
import { IStock } from './shared/interfaces/istock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediator-parent';

  receivedStock: IStock;

  priceQuoteHandler(event: IStock) {
    this.receivedStock = event;
  }
}
