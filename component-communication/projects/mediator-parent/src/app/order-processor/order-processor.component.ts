import { Component, Input } from '@angular/core';
import { IStock } from '../shared/interfaces/istock';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.scss']
})
export class OrderProcessorComponent {
  message = 'Waiting for orders...';

  @Input() set stock(value: IStock ){
    if (value && value.bidPrice !== undefined) {
      this.message = `Placed order to buy 100 shares
                          of ${value.stockSymbol} 
                          at \$${value.bidPrice.toFixed(2)}`;
    }
  }
}
