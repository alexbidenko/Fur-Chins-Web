import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  @Output() openBasketEmitter: EventEmitter<boolean>;
  @Output() basketAddAnimationEmitter: EventEmitter<any>;

  constructor() {
    this.openBasketEmitter = new EventEmitter();
    this.basketAddAnimationEmitter = new EventEmitter();
  }

  setBasketState(state: boolean): void {
    this.openBasketEmitter.emit(state);
  }

  startAddProductAnimation(): void {
    this.basketAddAnimationEmitter.emit();
  }
}
