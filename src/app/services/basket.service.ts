import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BasketChinchilla} from '../models/basket-chinchilla';
import {CurrentChinchilla} from '../models/current-chinchilla';
import {BasketProduct} from '../models/basket-product';
import {Product} from '../models/product';
import {isPlatformBrowser} from '@angular/common';

const KEY_CHINCHILLAS = 'basket_chinchillas';
const KEY_PRODUCTS = 'basket_products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  chinchillas: BasketChinchilla[] = [];
  products: BasketProduct[] = [];

  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.getItem(KEY_CHINCHILLAS) != null) {
      this.chinchillas = JSON.parse(this.getItem(KEY_CHINCHILLAS));
    }
    if (this.getItem(KEY_PRODUCTS) != null) {
      this.products = JSON.parse(this.getItem(KEY_PRODUCTS));
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
    this.setItem(KEY_CHINCHILLAS, JSON.stringify(this.chinchillas));
    return of(this.chinchillas);
  }

  deleteChinchillaFromBasket(title: string, description: string): Observable<BasketChinchilla[]> {
    for (const i in this.chinchillas) {
      if (this.chinchillas[i].chinchilla.overall.title === title &&
        this.chinchillas[i].chinchilla.variant.description === description) {
        this.chinchillas.splice(+i, 1);
      }
    }
    this.setItem(KEY_CHINCHILLAS, JSON.stringify(this.chinchillas));
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
    this.setItem(KEY_PRODUCTS, JSON.stringify(this.products));
    return of(this.products);
  }

  deleteProductFromBasket(keyProduct: string): Observable<BasketProduct[]> {
    for (const i in this.products) {
      if (this.products[i].product.key === keyProduct) {
        this.products.splice(+i, 1);
      }
    }
    this.setItem(KEY_PRODUCTS, JSON.stringify(this.products));
    return of(this.products);
  }

  clearBasket(): { chinchillas: Observable<BasketChinchilla[]>, products: Observable<BasketProduct[]>} {
    this.chinchillas = [];
    this.products = [];
    this.clear();
    return { chinchillas: of(this.chinchillas), products: of(this.products) };
  }

  getItem(key: string) {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  setItem(key: string, value: string) {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  clear() {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
