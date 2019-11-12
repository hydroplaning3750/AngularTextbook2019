import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceQuoterComponent,
    OrderProcessorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
