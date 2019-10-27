import { Component, OnInit } from '@angular/core';
import {BasketService} from '../services/basket.service';
import {SendMessageService} from '../services/send-message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  userName: string;
  userPhone: string;
  userEmail: string;
  userTitle: string;
  userMessage: string;
  userAddBasket = true;

  constructor(
    private basketService: BasketService,
    private sendMessageService: SendMessageService
  ) { }

  ngOnInit() {
  }

  sendMessage(): void {
    let message = `Сообщение с сайта fur-chins.ru:\n
От ${this.userName}\n
Контакты: телефон - ${this.userPhone}, email - ${this.userEmail}\n
Содержание: ${this.userMessage}\n
Содержимое корзины:\n`;
    this.basketService.getChinchillas().subscribe(
      chinchillas => {
        chinchillas.forEach(chinchilla => {
          message += chinchilla.chinchilla.overall.title + ' ' + chinchilla.chinchilla.variant.description + ' x ' +
            chinchilla.count + ' по ' + chinchilla.chinchilla.variant.cost + 'р\n';
        });
      }
    );
    this.basketService.getProducts().subscribe(
      products => {
        products.forEach(product => {
          message += product.product.title + ' x ' + product.count + ' по ' + product.product.cost + 'р\n';
        });
      }
    );
    this.sendMessageService.sendMessage({title: this.userTitle, message}).subscribe(
      () => {
        this.userName = '';
        this.userPhone = '';
        this.userEmail = '';
        this.userTitle = '';
        this.userMessage = '';
        alert('Сообщение успешно отправлено!');
      }
    );
  }
}
