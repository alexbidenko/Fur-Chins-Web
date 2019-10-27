import {Component, Input, OnInit} from '@angular/core';
import {Chinchilla} from '../../objects/chinchilla';

@Component({
  selector: 'app-buying-block',
  templateUrl: './buying-block.component.html',
  styleUrls: ['./buying-block.component.css']
})
export class BuyingBlockComponent implements OnInit {

  @Input() chinchilla: Chinchilla;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
