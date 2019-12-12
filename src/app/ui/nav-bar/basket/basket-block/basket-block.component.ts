import {Component, Input, OnInit} from '@angular/core';
import {BasketChinchilla} from '../../../../models/basket-chinchilla';
import {BasketService} from '../../../../services/basket.service';

@Component({
  selector: 'app-basket-block',
  templateUrl: './basket-block.component.html',
  styleUrls: ['../basket-block.component.css']
})
export class BasketBlockComponent implements OnInit {

  @Input() data: BasketChinchilla;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
  }

  deleteFromBasket(): void {
    this.basketService.deleteChinchillaFromBasket(this.data.chinchilla.overall.title, this.data.chinchilla.variant.description);
  }
}
