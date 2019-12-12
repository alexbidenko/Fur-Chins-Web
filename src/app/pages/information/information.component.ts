import { Component, OnInit } from '@angular/core';
import {InformationService} from '../../services/information.service';
import {Information} from '../../models/information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  information: Information[];
  article: { title: string, text: string};
  isShowArticle = true;

  constructor(
    private informationService: InformationService
  ) { }

  ngOnInit() {
    this.informationService.getInformation().subscribe(
      information => this.information = information
    );
  }

  openArticleAt(index: number) {
    this.isShowArticle = false;
    const self = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(() => {
      self.article = self.information[index].content;
      self.isShowArticle = true;
    }, 150);
  }
}
