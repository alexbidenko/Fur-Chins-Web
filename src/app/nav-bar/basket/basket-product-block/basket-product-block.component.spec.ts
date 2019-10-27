import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProductBlockComponent } from './basket-product-block.component';

describe('BasketProductBlockComponent', () => {
  let component: BasketProductBlockComponent;
  let fixture: ComponentFixture<BasketProductBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketProductBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketProductBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
