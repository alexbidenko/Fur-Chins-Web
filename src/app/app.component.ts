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
    let data = this.activatedRoute.snapshot.data;
    this.titleService.setTitle(data.title);
    if (data.meta) {
      data.meta.forEach(meta => this.meta.updateTag(meta));
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        data = this.router.config.find(route => `/${route.path}` === event.urlAfterRedirects).data;
        this.titleService.setTitle(data.title);
        if (data.meta) {
          data.meta.forEach(meta => this.meta.updateTag(meta));
        }
      }
    });
  }

  hideBasket(): void {
    this.shareService.setBasketState(false);
  }
}
