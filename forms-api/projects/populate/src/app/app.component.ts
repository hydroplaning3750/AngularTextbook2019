import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'populate';

  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      id: new FormControl(),
      description: new FormControl(),
      seller: new FormControl()
    });
  }

  updateEntireForm() {
    this.formModel.setValue({
      id: 123,
      description: "A great product",
      seller: "XYZ Corp"
    });
  }

  updatePartOfForm() {
    this.formModel.patchValue({
      description: "The best product"
    });
  }
}
