import { Component, OnInit } from '@angular/core';
import { LuxuryService } from './luxury.service';

@Component({
  selector: 'app-luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.css']
})
export class LuxuryComponent implements OnInit {
  public luxuryItem: string;

  constructor(private _luxuryService : LuxuryService) {
   }

  ngOnInit() {
    this.luxuryItem = this._luxuryService.getLuxuryItem();
  }
}