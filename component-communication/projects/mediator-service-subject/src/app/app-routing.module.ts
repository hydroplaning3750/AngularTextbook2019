import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbayComponent } from './ebay/ebay.component';
import { AmazonComponent } from './amazon/amazon.component';


const routes: Routes = [
  { path: '', component: EbayComponent },
  { path: 'amazon', component: AmazonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
