import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { DetailComponent } from './detail.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutesWithoutGuard([{ path: 'detail', component: DetailComponent, data: { title: marker('Detail') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DetailRoutingComponent {}
