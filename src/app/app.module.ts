import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { BuyingComponent } from './pages/buying/buying.component';
import { BasketComponent } from './ui/nav-bar/basket/basket.component';
import { BuyingBlockComponent } from './ui/buying-block/buying-block.component';
import { BuyingBlockVariantComponent } from './ui/buying-block-variant/buying-block-variant.component';
import { BasketBlockComponent } from './ui/nav-bar/basket/basket-block/basket-block.component';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { ProductBlockComponent } from './ui/product-block/product-block.component';
import { BasketProductBlockComponent } from './ui/nav-bar/basket/basket-product-block/basket-product-block.component';
import { InformationComponent } from './pages/information/information.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
