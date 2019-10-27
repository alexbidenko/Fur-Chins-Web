import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BasketChinchilla} from '../objects/basket-chinchilla';
import {CurrentChinchilla} from '../objects/current-chinchilla';
import {BasketProduct} from '../objects/basket-product';

const KEY_CHINCHILLAS = 'basket_chinchillas';
const KEY_PRODUCTS = 'basket_products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  chinchillas: BasketChinchilla[] = [];
  products: BasketProduct[] = [];

  constructor() {
    if (localStorage.getItem(KEY_CHINCHILLAS) != null) {
      this.chinchillas = JSON.parse(localStorage.getItem(KEY_CHINCHILLAS));
    }
    if (localStorage.getItem(KEY_PRODUCTS) != null) {
      this.products = JSON.parse(localStorage.getItem(KEY_PRODUCTS));
    }
  }

  getChinchillas(): Observable<BasketChinchilla[]> {
    return of(this.chinchillas);
  }

  addChinchillaToBasket(chinchilla: CurrentChinchilla): Observable<BasketChinchilla[]> {
    let isFound = false;
    this.chinchillas.forEach(el => {
      if (el.chinchilla.overall.title === chinchilla.overall.title &&
        el.chinchilla.variant.description === chinchilla.variant.description) {
        isFound = true;
        el.count++;
      }
    });
    if (!isFound) {
      this.chinchillas.push({
        chinchilla,
        count: 1
      });
    }
    localStorage.setItem(KEY_CHINCHILLAS, JSON.stringify(this.chinchillas));
    return of(this.chinchillas);
  }

  deleteChinchillaFromBasket(title: string, description: string): Observable<BasketChinchilla[]> {
    for (const i in this.chinchillas) {
      if (this.chinchillas[i].chinchilla.overall.title === title &&
        this.chinchillas[i].chinchilla.variant.description === description) {
        this.chinchillas.splice(+i, 1);
      }
    }
    localStorage.setItem(KEY_CHINCHILLAS, JSON.stringify(this.chinchillas));
    return of(this.chinchillas);
  }

  getProducts(): Observable<BasketProduct[]> {
    return of(this.products);
  }

  addProductToBasket(product: Product): Observable<BasketProduct[]> {
    let ifFound = false;
    this.products.forEach(elem => {
      if (elem.product.key === product.key) {
        elem.count++;
        ifFound = true;
      }
    });
    if (!ifFound) {
      this.products.push({
        count: 1,
        product
      });
    }
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(this.products));
    return of(this.products);
  }

  deleteProductFromBasket(keyProduct: string): Observable<BasketProduct[]> {
    for (const i in this.products) {
      if (this.products[i].product.key === keyProduct) {
        this.products.splice(+i, 1);
      }
    }
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(this.products));
    return of(this.products);
  }

  clear(): { chinchillas: Observable<BasketChinchilla[]>, products: Observable<BasketProduct[]>} {
    this.chinchillas = [];
    this.products = [];
    localStorage.clear();
    return { chinchillas: of(this.chinchillas), products: of(this.products) };
  }
}
