import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesService } from './shared/services/games.service';
import { GamesLayoutComponent } from './layout/games-layout/games-layout.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [GamesListComponent, GamesLayoutComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,

    MatCardModule
  ],
  providers: [{ provide: GamesService, useClass: GamesService }]
})
export class GamesModule {
}
