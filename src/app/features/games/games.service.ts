import { Injectable } from '@angular/core';
import { GamesModule } from './games.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamesInterface } from './games.interface';
import { api } from '../../shared/constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) {
  }

  getGamesList(): Observable<GamesInterface[]> {
    return this.httpClient.get<GamesInterface[]>(api.getGamesList);
  }
}
