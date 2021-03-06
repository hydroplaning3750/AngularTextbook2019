import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() name: string;

  public greet() { 
    console.log(`Hello from ${this.name}`);
  }
}
