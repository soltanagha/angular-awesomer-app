import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';
import {CaffeineService} from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  sources;

  constructor(private itemsService: ItemsService,
              private caffeineService: CaffeineService) { }

  ngOnInit() {
    this.getItems();
    this.sources = this.caffeineService.source;
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }
}
