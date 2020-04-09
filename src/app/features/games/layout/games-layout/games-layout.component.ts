import { Component, OnDestroy, OnInit } from '@angular/core';
import { GamesService } from '../../shared/services/games.service';
import { GamesInterface } from '../../shared/interfaces/games.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchChangesService } from '../../../../core/shared/services/search-changes.service';

@Component({
  selector: 'app-games-layout',
  templateUrl: './games-layout.component.html',
  styleUrls: ['./games-layout.component.scss']
})
export class GamesLayoutComponent implements OnInit, OnDestroy {
  public gamesList: GamesInterface[] = [];
  private games: GamesInterface[] = [];
  protected $unsubscriber: Subject<void> = new Subject<void>();

  constructor(
    private gamesService: GamesService,
    private searchChangesService: SearchChangesService
  ) {
  }

  ngOnInit(): void {
    this.getGamesList();
    this.searchChangesService.searchValue.subscribe(value => this.filterGamesList(value));
  }

  getGamesList(): void {
    this.gamesService.getGamesList().pipe(
      takeUntil(this.$unsubscriber)
    ).subscribe((games) => {
      this.games = games;
      this.filterGamesList();
    });
  }

  filterGamesList(title = ''): GamesInterface[] {
    if(!title) { return this.gamesList = this.games; }

    return this.gamesList = this.games.filter(game => game.title.includes(title));
  }

  ngOnDestroy(): void {
    this.$unsubscriber.next();
    this.$unsubscriber.complete();
  }
}
