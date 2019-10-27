import { Component, OnInit } from '@angular/core';
import {ShareService} from '../services/share.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isMenuOpen = false;
  isBasketOpen = false;

  isAddProductAnimation = false;

  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.shareService.openBasketEmitter.subscribe(
      value => {
        this.isBasketOpen = value;
        this.isMenuOpen = value;
      }
    );
    this.shareService.basketAddAnimationEmitter.subscribe(
      () => {
        this.isAddProductAnimation = true;
        const self = this;
        setTimeout(() => self.isAddProductAnimation = false, 300);
      }
    );
  }

}
