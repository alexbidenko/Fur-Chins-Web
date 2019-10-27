import {Component, Input, OnInit} from '@angular/core';
import {BasketProduct} from '../../../objects/basket-product';
import {BasketService} from '../../../services/basket.service';

@Component({
  selector: 'app-basket-product-block',
  templateUrl: './basket-product-block.component.html',
  styleUrls: ['../basket-block.component.css']
})
export class BasketProductBlockComponent implements OnInit {

  @Input() data: BasketProduct;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
  }

  deleteFromBasket(): void {
    this.basketService.deleteProductFromBasket(this.data.product.key);
  }
}
