import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  link = '';
  currentPosition: number = 0;

  dynamicSlides = [
    {
      id: 1,
      src: 'https://source.unsplash.com/Z8dtTatMVMw',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/m7K4KzL5aQ8',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/Z8dtTatMVMw',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: 'https://source.unsplash.com/m7K4KzL5aQ8',
      alt: 'Side 4',
      title: 'Side 4',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    autoWidth: true,
    center: true,

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
        nav: false,
      },
      750: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
  };
  activeSlides?: SlidesOutputData;

  getPassedData(data: SlidesOutputData) {
    setTimeout(() => {
      this.activeSlides = data;
      this.currentPosition = data.startPosition!;
      this.link = this.dynamicSlides[this.currentPosition].src;
    }, 0);
  }

  getData(data: SlidesOutputData) {
    this.currentPosition = data.startPosition!;
    setTimeout(() => {
      this.link = this.dynamicSlides[this.currentPosition].src;
      this.activeSlides = data;
    }, 0);
  }
}
