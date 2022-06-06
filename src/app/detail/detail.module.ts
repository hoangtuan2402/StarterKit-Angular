import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { DetailRoutingComponent } from './detail-routing.module';
import { ListChapterComponent } from './list-chapter/list-chapter.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, DetailRoutingComponent],
  declarations: [DetailComponent, ListChapterComponent, ReviewsComponent],
})
export class DetailModule {}
