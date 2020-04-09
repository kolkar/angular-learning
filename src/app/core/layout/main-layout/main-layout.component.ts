import { Component, OnInit } from '@angular/core';
import { SearchChangesService } from '../../search-changes.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(private searchChangesService: SearchChangesService) { }

  searchValueHandler(event) {
    this.searchChangesService.setSearchValue(event);
  }
}
