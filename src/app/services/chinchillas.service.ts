import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Chinchilla} from '../objects/chinchilla';
import {CurrentChinchilla} from '../objects/current-chinchilla';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChinchillasService {

  chinchillas: Array<Chinchilla> = [
    {
      key: 'SE',
      text: 'Стандарт: X dark / XX dark / XXX dark',
      costs: {
        male: {
          usual: 12000,
          bronze: 14500,
          silver: 15000,
          gold: 15500
        },
        female: {
          usual: 13000,
          bronze: 16500,
          silver: 17000,
          gold: 17500
        }
      },
      images: [
        'https://fur-chins.ru/MyImages/buying/extra1.jpeg',
        'https://fur-chins.ru/MyImages/buying/extra2.jpeg'
      ]
    },
    {
      key: 'SD',
      text: 'Стандарт dark',
      costs: {
        male: {
          usual: 10000,
          bronze: 13500,
          silver: 14000,
          gold: 14500
        },
        female: {
          usual: 12000,
          bronze: 15500,
          silver: 16000,
          gold: 16500
        }
      },
      images: [
        'https://fur-chins.ru/MyImages/buying/dark1.jpeg',
        'https://fur-chins.ru/MyImages/buying/dark2.jpeg'
      ]
    },
    {
      key: 'SL',
      text: 'Стандарт light / medium',
      costs: {
        male: {
          usual: 6000,
          bronze: 7500,
          silver: 8000,
          gold: 8500
        },
        female: {
          usual: 8000,
          bronze: 9500,
          silver: 10000,
          gold: 10500
        }
      },
      images: [
        'https://fur-chins.ru/MyImages/buying/lite1.jpeg',
        'https://fur-chins.ru/MyImages/buying/lite2.jpeg'
      ]
    },
    {
      key: 'BV',
      text: 'Чёрный бархат',
      costs: {
        male: {
          usual: 10000,
          bronze: 13500,
          silver: 14000,
          gold: 14500
        },
        female: {
          usual: 12000,
          bronze: 16500,
          silver: 17000,
          gold: 17500
        }
      },
      images: [
        'https://fur-chins.ru/MyImages/buying/velvet1.jpeg',
        'https://fur-chins.ru/MyImages/buying/velvet2.jpeg'
      ]
    },
    {
      key: 'BP',
      text: 'Чёрный жемчуг',
      costs: {
        male: {
          usual: 20000,
          bronze: 24500,
          silver: 25000,
          gold: 25500
        },
        female: {
          usual: 25000,
          bronze: 29500,
          silver: 30000,
          gold: 30500
        }
      },
      images: [
        'https://fur-chins.ru/MyImages/buying/Ch2_Img1.jpeg',
        'https://fur-chins.ru/MyImages/buying/Ch2_Img2.jpeg'
      ]
    },
    {
      key: 'HB',
      text: 'Гетеробежевый',
      costs: {
        male: {
          usual: 5000,
          bronze: 7500,
          silver: 8000,
          gold: 8500
        },
        female: {
          usual: 7000,
          bronze: 9500,
          silver: 10000,
          gold: 10500
        }
      },
      images: [
        'https://fur-chins.ru/MyImages/buying/hetero1.jpeg',
        'https://fur-chins.ru/MyImages/buying/hetero2.jpeg'
      ]
    }
  ];

  constructor(
    private httpClient: HttpClient
  ) { }

  getChinchillas(): Observable<Array<Chinchilla>> {
    const observable = this.httpClient.get<Array<Chinchilla>>('https://fur-chins.ru/chinchillas.json');
    observable.subscribe(
      chinchillas => this.chinchillas = chinchillas
    );
    return observable;
    // return of(this.chinchillas);
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
