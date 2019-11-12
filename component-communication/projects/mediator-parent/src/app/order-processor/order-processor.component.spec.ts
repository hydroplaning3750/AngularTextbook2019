import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProcessorComponent } from './order-processor.component';

describe('OrderProcessorComponent', () => {
  let component: OrderProcessorComponent;
  let fixture: ComponentFixture<OrderProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
