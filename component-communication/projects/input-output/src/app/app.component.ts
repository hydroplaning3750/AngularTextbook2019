import { Component } from '@angular/core';
import { IPriceQuote } from './shared/interfaces/iprice.quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input-output';

  //You cant use the keyword const with class properties; use readonly
  readonly numberOfShares: number = 100;

  stock: string;
  priceQuote: IPriceQuote;

  //Extracts the value of the property target from the event object given as an argument
  onChangeEvent({target}) {
    //Assigns the value entered in the input field to the property stock
    this.stock = target.value;
  }

  priceQuoteHandler(priceQuote: IPriceQuote) {
    this.priceQuote = priceQuote;
  }
}
