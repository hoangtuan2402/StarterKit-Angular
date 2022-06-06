import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { ReadingComponent } from './reading.component';

const routes: Routes = [
  Shell.childRoutesWithoutGuard([{ path: 'reading', component: ReadingComponent, data: { title: marker('Reading') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ReadingRoutingComponent {}
