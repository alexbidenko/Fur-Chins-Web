import { Injectable } from '@angular/core';
import {Information} from '../models/information';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getInformation(): Observable<Information[]> {
    return this.httpClient.get<Information[]>('/information.json');
  }
}
