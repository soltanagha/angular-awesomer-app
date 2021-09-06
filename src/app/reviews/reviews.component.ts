import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title = 'Frontedn Masters is the heat!';
  ratings = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit() {
  }

}
