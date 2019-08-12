import { Component, OnInit } from '@angular/core';
import { AppService } from  '../../app-service.service';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {

  inputSearch: string;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.inputSearch = '';
  }

  setSearch() {
    this._appService.setSearchQuery(this.inputSearch);
  }

  clearSearch() {
    this.inputSearch = '';
    this._appService.setSearchQuery('');
  }

}
