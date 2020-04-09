import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GamesInterface } from '../../games.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesListComponent {
  @Input() gamesList: GamesInterface[];

  constructor() { }

}
