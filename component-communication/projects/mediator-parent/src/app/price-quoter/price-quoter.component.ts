import {Component, Output, EventEmitter} from '@angular/core';
import { interval } from 'rxjs';
import { IStock } from '../shared/interfaces/istock';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.scss']
})
export class PriceQuoterComponent {
  @Output() buyEmitter: EventEmitter<IStock> = new EventEmitter();

  stockSymbol = 'IBM';
  lastPrice: number;

  constructor() {
    interval(2000)
      .subscribe(data =>
      this.lastPrice = 100 * Math.random());
  }

  buyStocks() {
    const stockToBuy: IStock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    this.buyEmitter.emit(stockToBuy);
  }
}
