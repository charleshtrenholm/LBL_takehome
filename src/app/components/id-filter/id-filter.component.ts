import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';

@Component({
  selector: 'app-id-filter',
  templateUrl: './id-filter.component.html',
  styleUrls: ['./id-filter.component.css']
})
export class IdFilterComponent implements OnInit {

  filterArray = [...Array(10)].map((_, i) => {
    return [i*10, (i+1)*10]; // set up array that returns [0, 10], [10, 20] ...etc
  });

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  setFilter(item) {
    this._appService.setFilter(item);
  }

}
