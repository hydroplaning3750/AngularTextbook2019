import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order-processor/order-processor.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
