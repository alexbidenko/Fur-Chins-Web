import { Component, OnInit } from '@angular/core';
import {Chinchilla} from '../../models/chinchilla';
import {ChinchillasService} from '../../services/chinchillas.service';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {

  chinchillas: Chinchilla[];

  constructor(
    private chinchillasService: ChinchillasService
) { }

  ngOnInit() {
    this.chinchillasService.getChinchillas().subscribe(
      chinchillas => this.chinchillas = chinchillas
    );
  }
}
