import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchChangesService {
  private $searchValue: BehaviorSubject<string>;

  constructor() {
    this.$searchValue = new BehaviorSubject(undefined);
  }

  get searchValue(): Observable<string> {
    return this.$searchValue.asObservable();
  }

  setSearchValue(value): void {
    this.$searchValue.next(value);
  }
}
