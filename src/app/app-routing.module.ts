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
      title: 'ABFC - Главная',
      keywords: 'Шиншиллы, купить шиншилл, бонитированные, товары для шиншиллы, содержание животных',
      description: 'Купить шиншилл, меховых шиншилл и товары для шиншилл, узнать больше о содержании, связаться с нами'
    }
  },
  { path: 'buying', component: BuyingComponent,
    data: {
      title: 'ABFC - Купить шиншиллу',
      keywords: 'Шиншиллы, купить шиншилл, меховые шиншиллы, золото, серебро, бронза, бонитированные',
      // tslint:disable-next-line:max-line-length
      description: 'Купить шиншилл, меховых шиншилл прошедших оценку экспертов (бонитироваку), получивших бронзу, серебро или золото на выставках'
    }
  },
  { path: 'products', component: ProductsComponent,
    data: {
      title: 'ABFC - Дополнительные товары',
      keywords: 'Товары для шиншиллы, корма, сено, поилки, автопоилки',
      description: 'Купить товары для шиншилл, корма, сено и поилки (автопоилки) для содержания шиншилл'
    }
  },
  { path: 'information', component: InformationComponent,
    data: {
      title: 'ABFC - Информация о содержании',
      keywords: 'Шиншиллы, содержание шиншилл, питание, температура, беременность, купание',
      // tslint:disable-next-line:max-line-length
      description: 'Узнать больше о содержании шиншилл, как их кормить, купать, в какой держать температуре, как ухаживать во время беременности'
    }
  },
  { path: 'contacts', component: ContactsComponent,
    data: {
      title: 'ABFC - Связаться с нами',
      keywords: 'ABFC, связь, обратная связь, позвонить, email, форма связи, узнать больше, купить шиншилл, купить товары для шиншилл',
      description: 'Связаться с нами (ABFC) для получения большей информации или для оформления покупки'
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
