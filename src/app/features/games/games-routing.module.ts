import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesLayoutComponent } from './layout/games-layout/games-layout.component';

const routes: Routes = [{ path: '', component: GamesLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
