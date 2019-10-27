import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendMessage(data: object): Observable<any> {
    return this.httpClient.post(
      'https://fur-chins.ru/send-message.php',
      data
    );
  }
}
