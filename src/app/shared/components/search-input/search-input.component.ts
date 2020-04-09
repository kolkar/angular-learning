import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  searchInput: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: string) => this.searchValue.emit(value));
  }

}
