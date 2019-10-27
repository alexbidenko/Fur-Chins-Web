import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {BasketChinchilla} from '../../objects/basket-chinchilla';
import {BasketProduct} from '../../objects/basket-product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input() isOpen: boolean;
  chinchillas: BasketChinchilla[];
  products: BasketProduct[];

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
    this.basketService.getChinchillas().subscribe(
      chinchillas => this.chinchillas = chinchillas
    );
    this.basketService.getProducts().subscribe(
      products => this.products = products
    );
  }

  clearBasket(): void {
    const answer = this.basketService.clear();
    answer.chinchillas.subscribe(
      chinchillas => this.chinchillas = chinchillas
    );
    answer.products.subscribe(
      products => this.products = products
    );
  }

  totalCost(): number {
    let totalCost = 0;
    this.chinchillas.forEach(chinchilla =>
      totalCost += chinchilla.count * chinchilla.chinchilla.variant.cost
    );
    this.products.forEach(product =>
      totalCost += product.count * product.product.cost
    );
    return totalCost;
  }
}
