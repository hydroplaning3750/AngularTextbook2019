import { Component, OnInit } from '@angular/core';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  public shippingItem : string;

  constructor(private _shippingService : ShippingService) { }

  ngOnInit() {
    this.shippingItem = this._shippingService.getShippingItem();
  }
}