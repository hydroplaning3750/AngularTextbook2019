import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPriceQuote } from '../shared/interfaces/iprice.quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent implements OnInit {
  //This output property is represented by the EventEmitter object, which emits events to the parent
  @Output() lastPriceEmitter = new EventEmitter<IPriceQuote>();
  priceQuote: IPriceQuote;

  constructor() { 
    //Emulates changing prices by invoking a function that generates a random number every 2 seconds
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: "IBM",
          lastPrice: 100 * Math.random()
        };

        //Emits new price via the output property; the event emitter carries the PriceQuote object as a payload
        this.lastPriceEmitter.emit(this.priceQuote);
      });
  }

  ngOnInit() {
  }

}
