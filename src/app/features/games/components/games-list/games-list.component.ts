import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GamesInterface } from '../../shared/interfaces/games.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesListComponent {
  @Input() gamesList: GamesInterface[];

  constructor() { }

  public trackByFunction(index, item) {
    if(!item) { return null; }

    return item.id;
  }

}
