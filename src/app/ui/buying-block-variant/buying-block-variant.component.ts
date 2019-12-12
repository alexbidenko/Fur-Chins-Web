import {Component, Input, OnInit} from '@angular/core';
import {ChinchillasService} from '../../services/chinchillas.service';
import {BasketService} from '../../services/basket.service';
import {ShareService} from '../../services/share.service';

@Component({
  selector: 'app-buying-block-variant',
  templateUrl: './buying-block-variant.component.html',
  styleUrls: ['./buying-block-variant.component.css']
})
export class BuyingBlockVariantComponent implements OnInit {

  @Input() keyChinchilla: string;
  @Input() sex: string;
  @Input() costs: { usual: number, bronze: number, silver: number, gold: number };
  isOpenedVariants = false;

  constructor(
    private chinchillaService: ChinchillasService,
    private basketService: BasketService,
    private shareService: ShareService
  ) { }

  ngOnInit() { }

  getDescription(sex: string, type: string): string {
    if (sex === 'male' && type === 'usual') {
      return 'Не прошедший оценку\nсамец';
    } else if (sex === 'female' && type === 'usual') {
      return 'Не прошедшая оценку\nсамка';
    } else if (sex === 'male') {
      return 'Прошедший оценку\nсамец';
    } else if (sex === 'female') {
      return 'Прошедшая оценку\nсамка';
    }
  }

  addChinToBasket(type: string): void {
    this.shareService.startAddProductAnimation();
    this.basketService.addChinchillaToBasket(
      this.chinchillaService.getChinchillaData(this.keyChinchilla, this.sex, type)
    );
  }

}
