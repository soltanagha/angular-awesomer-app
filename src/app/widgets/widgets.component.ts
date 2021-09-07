import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WidgetsService} from '../shared/widgets.service';
import {Widget} from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];
  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  deleteWidget(widget) {
    console.log(this)
  }

  saveWidget(widget) {
    console.log('Saving Widget:', widget);
    this.reset();
  }
  cancel($event) {
    this.reset();
  }

}
