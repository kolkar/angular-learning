import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamesInterface } from '../interfaces/games.interface';
import { api } from '../../../../shared/constants/api-constants';

@Injectable()
export class GamesService {

  constructor(private httpClient: HttpClient) {
  }

  getGamesList(): Observable<GamesInterface[]> {
    return this.httpClient.get<GamesInterface[]>(api.getGamesList);
  }
}
