import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { Routes, RouterModule } from '@angular/router';
import { ShippingService } from './shipping.service';

@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShippingComponent }
    ])
  ],
  providers: [ShippingService]
})
export class ShippingModule { }
