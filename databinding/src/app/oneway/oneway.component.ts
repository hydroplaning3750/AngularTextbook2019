import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  name: string = "Mary Smith";

  constructor() { }

  ngOnInit() {
  }
  changeName() {
    this.name = "Bill Smart";
  }
}
