import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {BuyingComponent} from './pages/buying/buying.component';
import {ProductsComponent} from './pages/products/products.component';
import {InformationComponent} from './pages/information/information.component';
import {ContactsComponent} from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    data: {
      title: 'Aliance of breaders fur chinchillas - Главная',
      meta: [
        {name: 'keywords', content: 'Шиншиллы, купить шиншилл, бонитированные, товары для шиншиллы, содержание животных'},
        // tslint:disable-next-line:max-line-length
        {name: 'description', content: 'Купить шиншилл, меховых шиншилл и товары для шиншилл, узнать больше о содержании, связаться с нами'},
        {property: 'og:title', content: 'Aliance of breaders fur chinchillas - Главная'},
        {property: 'og:description', content: 'Купить шиншилл, меховых шиншилл и товары для шиншилл, узнать больше о содержании, связаться с нами'}
      ]
    }
  },
  { path: 'buying', component: BuyingComponent,
    data: {
      title: 'Aliance of breaders fur chinchillas - Купить шиншиллу',
      meta: [
        {name: 'keywords', content: 'Шиншиллы, купить шиншилл, меховые шиншиллы, золото, серебро, бронза, бонитированные'},
        {name: 'description', content: 'Купить шиншилл, меховых шиншилл прошедших оценку экспертов (бонитироваку), получивших бронзу, серебро или золото на выставках'},
        {property: 'og:title', content: 'Aliance of breaders fur chinchillas - Купить шиншиллу'},
        {property: 'og:description', content: 'Купить шиншилл, меховых шиншилл прошедших оценку экспертов (бонитироваку), получивших бронзу, серебро или золото на выставках'}
      ]
    }
  },
  { path: 'products', component: ProductsComponent,
    data: {
      title: 'Aliance of breaders fur chinchillas - Дополнительные товары',
      meta: [
        {name: 'keywords', content: 'Товары для шиншиллы, корма, сено, поилки, автопоилки'},
        {name: 'description', content: 'Купить товары для шиншилл, корма, сено и поилки (автопоилки) для содержания шиншилл'},
        {property: 'og:title', content: 'Aliance of breaders fur chinchillas - Дополнительные товары'},
        {property: 'og:description', content: 'Купить товары для шиншилл, корма, сено и поилки (автопоилки) для содержания шиншилл'}
      ]
    }
  },
  { path: 'information', component: InformationComponent,
    data: {
      title: 'Aliance of breaders fur chinchillas - Информация о содержании',
      meta: [
        {name: 'keywords', content: 'Шиншиллы, содержание шиншилл, питание, температура, беременность, купание'},
        {name: 'description', content: 'Узнать больше о содержании шиншилл, как их кормить, купать, в какой держать температуре, как ухаживать во время беременности'},
        {property: 'og:title', content: 'Aliance of breaders fur chinchillas - Информация о содержании'},
        {property: 'og:description', content: 'Узнать больше о содержании шиншилл, как их кормить, купать, в какой держать температуре, как ухаживать во время беременности'}
      ]
    }
  },
  { path: 'contacts', component: ContactsComponent,
    data: {
      title: 'Aliance of breaders fur chinchillas - Связаться с нами',
      meta: [
        {name: 'keywords', content: 'Aliance of breaders fur chinchillas, связь, обратная связь, позвонить, email, форма связи, узнать больше, купить шиншилл, купить товары для шиншилл'},
        {name: 'description', content: 'Связаться с нами (Aliance of breaders fur chinchillas) для получения большей информации или для оформления покупки'},
        {property: 'og:title', content: 'Aliance of breaders fur chinchillas - Связаться с нами'},
        {property: 'og:description', content: 'Связаться с нами (Aliance of breaders fur chinchillas) для получения большей информации или для оформления покупки'}
      ]
    }
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
