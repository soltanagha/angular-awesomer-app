import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService, CaffeineService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { BurritosComponent } from './burritos/burritos.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {WidgetsService} from './shared/widgets.service';
import { ReviewsComponent } from './reviews/reviews.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    BurritosComponent,
    WidgetsComponent,
    ReviewsComponent,
    WidgetsListComponent,
    WidgetDetailComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, CaffeineService, WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
