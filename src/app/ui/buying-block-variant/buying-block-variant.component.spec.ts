import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingBlockVariantComponent } from './buying-block-variant.component';

describe('BuyingBlockVariantComponent', () => {
  let component: BuyingBlockVariantComponent;
  let fixture: ComponentFixture<BuyingBlockVariantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingBlockVariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingBlockVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
