import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Product2Component } from './product2/product2.component';
import { BaseProductService } from './shared/base.product.service';
import { RealProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: BaseProductService, useClass: RealProductService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
