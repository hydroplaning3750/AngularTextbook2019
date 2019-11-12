import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { RouterModule } from '@angular/router';
import { LuxuryService } from './luxury.service';



@NgModule({
  declarations: [LuxuryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LuxuryComponent }
    ])
  ],
  providers: [LuxuryService]
})
export class LuxuryModule { }
