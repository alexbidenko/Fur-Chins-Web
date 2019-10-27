import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBlockComponent } from './basket-block.component';

describe('BasketBlockComponent', () => {
  let component: BasketBlockComponent;
  let fixture: ComponentFixture<BasketBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
