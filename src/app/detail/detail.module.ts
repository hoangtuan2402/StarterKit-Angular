import { DetailComponent } from './detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { DetailRoutingComponent } from './detail-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, DetailRoutingComponent],
  declarations: [DetailComponent],
})
export class DetailModule {}
