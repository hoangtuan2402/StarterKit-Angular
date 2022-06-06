import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { ReadingComponent } from './reading.component';
import { ReadingRoutingComponent } from './reading-routing.module';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ReadingRoutingComponent],
  declarations: [ReadingComponent, CommentFormComponent, NavbarComponent],
})
export class ReadingModule {}
