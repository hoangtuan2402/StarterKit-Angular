import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-chapter',
  templateUrl: './list-chapter.component.html',
  styleUrls: ['./list-chapter.component.scss'],
})
export class ListChapterComponent implements OnInit {
  listChapter = [
    { id: 1, name: 'chapter1' },
    { id: 2, name: 'chapter2' },
    { id: 5, name: 'chapter3' },
    { id: 3, name: 'chapter4' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
    { id: 4, name: 'chapter5' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.listChapter[1000];
  }
}
