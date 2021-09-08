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
    this.getWidgets();
    this.reset();
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: ''};
  }

  execute(widget, action) {
    this.widgetsService[action](widget)
      .subscribe (result => {
        this.getWidgets();
        this.reset();
    })
  }
  createWidget(widget) {
    this.widgetsService.create(widget)
      .subscribe(response => {
        this.getWidgets();
        this.reset();
      })
  }

 updateWidget(widget) {
    this.widgetsService.update(widget)
      .subscribe(response => {
        this.getWidgets();
        this.reset();
      })
 }

  deleteWidget(widget) {
    this.widgetsService.delete(widget)
      .subscribe(response => {
        this.getWidgets();
        this.reset();
      })
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.execute(widget, 'create');
    } else {
      this.execute(widget, 'update');
    }
    this.reset();
  }
  cancel($event) {
    this.reset();
  }

}
