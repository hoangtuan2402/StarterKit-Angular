import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [HomeComponent, CarouselComponent, CategoryComponent],
})
export class HomeModule {}
