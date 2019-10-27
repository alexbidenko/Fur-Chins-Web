import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { BuyingComponent } from './buying/buying.component';
import { BasketComponent } from './nav-bar/basket/basket.component';
import { BuyingBlockComponent } from './buying/buying-block/buying-block.component';
import { BuyingBlockVariantComponent } from './buying/buying-block/buying-block-variant/buying-block-variant.component';
import { BasketBlockComponent } from './nav-bar/basket/basket-block/basket-block.component';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductBlockComponent } from './products/product-block/product-block.component';
import { BasketProductBlockComponent } from './nav-bar/basket/basket-product-block/basket-product-block.component';
import { InformationComponent } from './information/information.component';
import { ContactsComponent } from './contacts/contacts.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    MainComponent,
    BuyingComponent,
    BasketComponent,
    BuyingBlockComponent,
    BuyingBlockVariantComponent,
    BasketBlockComponent,
    ProductsComponent,
    ProductBlockComponent,
    BasketProductBlockComponent,
    InformationComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
