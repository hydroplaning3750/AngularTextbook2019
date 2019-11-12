import { Component, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'expose-child-api';

  @ViewChild('child1', { static: true })  //Reference to one child
  firstChild: ChildComponent; //Reference to all instances of ChildComponent

  @ViewChildren(ChildComponent)
  allChildren: QueryList<ChildComponent>;

  ngAfterViewInit(): void {
    this.firstChild.greet();
  }

  public greetAllChildren() {
    this.allChildren.forEach(child => child.greet());
  }
}
