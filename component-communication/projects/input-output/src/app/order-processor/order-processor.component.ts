import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.css']
})

export class OrderComponent implements OnInit {
  private _stockSymbol: string;

  @Input() set stockSymbol(value: string) {
    if (value !== undefined) {
      this._stockSymbol = value;
      console.log(`Buying ${this.quantity} shares of ${value}`);
    }
  }

  get stockSymbol(): string {
    return this._stockSymbol;
  }

  @Input() quantity: number;

  constructor() { }

  ngOnInit() {
  }

}
