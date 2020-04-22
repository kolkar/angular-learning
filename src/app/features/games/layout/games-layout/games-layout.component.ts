import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { GamesInterface } from '../../shared/interfaces/games.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchChangesService } from '../../../../core/shared/services/search-changes.service';

@Component({
  selector: 'app-games-layout',
  templateUrl: './games-layout.component.html',
  styleUrls: ['./games-layout.component.scss']
})
export class GamesLayoutComponent implements OnInit {
  public gamesList$: Observable<GamesInterface[]>;

  constructor(
    private gamesService: GamesService,
    private searchChangesService: SearchChangesService
  ) {
  }

  ngOnInit(): void {
    this.searchChangesService.searchValue.subscribe(value => this.getGamesList(value));
  }

  getGamesList(title): void {
    this.gamesList$ = this.gamesService.getGamesList().pipe(
      map((games: GamesInterface[]) => this.filterGamesList(title, games))
    );
  }

  filterGamesList(title, games): GamesInterface[] {
    if(!title) { return games; }

    return games.filter(game => game.title.includes(title));
  }
}
