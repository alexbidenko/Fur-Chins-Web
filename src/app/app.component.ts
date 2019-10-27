import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ShareService} from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const data = this.router.config.find(route => `/${route.path}` === event.urlAfterRedirects).data;
        this.titleService.setTitle(data.title);
        this.meta.addTags([
          {name: 'keywords', content: data.keywords},
          {name: 'description', content: data.description}
        ]);
      }
    });
  }

  hideBasket(): void {
    this.shareService.setBasketState(false);
  }
}
