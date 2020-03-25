import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {ShareService} from '../../services/share.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})
export class ProductBlockComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;

  constructor(
    private basketService: BasketService,
    private shareService: ShareService
) { }

  ngOnInit() {
  }

  addProductToBasket(): void {
    this.shareService.startAddProductAnimation();
    this.basketService.addProductToBasket(this.product);
  }
}
