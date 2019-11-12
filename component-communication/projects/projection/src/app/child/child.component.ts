import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  //For styles, use the ViewEncapsulation.Native mode
  //Since this component and its parent (app component) both define a CSS class template,
  //  the child's definition would override the parent's definition without the line below
  encapsulation: ViewEncapsulation.Native
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
