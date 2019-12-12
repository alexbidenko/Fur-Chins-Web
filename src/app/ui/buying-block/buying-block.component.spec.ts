import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingBlockComponent } from './buying-block.component';

describe('BuyingBlockComponent', () => {
  let component: BuyingBlockComponent;
  let fixture: ComponentFixture<BuyingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
