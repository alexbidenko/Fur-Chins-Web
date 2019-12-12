import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Chinchilla} from '../models/chinchilla';
import {CurrentChinchilla} from '../models/current-chinchilla';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChinchillasService {

  chinchillas: Array<Chinchilla>;

  constructor(
    private httpClient: HttpClient
  ) { }

  getChinchillas(): Observable<Array<Chinchilla>> {
    const observable = this.httpClient.get<Array<Chinchilla>>('/chinchillas.json');
    observable.subscribe(
      chinchillas => this.chinchillas = chinchillas
    );
    return observable;
  }

  getChinchillaData(keyChinchilla: string, sex: string, type: string): CurrentChinchilla {
    for (const chinchilla of this.chinchillas) {
      if (chinchilla.key === keyChinchilla) {
        const overall = { title: chinchilla.text, image: chinchilla.images[0] };
        let description: string;
        if (sex === 'male' && type === 'usual') {
          description = 'NM без оценки';
        } else if (sex === 'female' && type === 'usual') {
          description = 'NF без оценки';
        } else if (sex === 'male') {
          description = 'BM ' + type;
        } else if (sex === 'female') {
          description = 'BF ' + type;
        }
        const cost = chinchilla.costs[sex][type];
        return  {
          overall,
          variant: {
            description,
            cost
          }
        };
      }
    }
  }
}
