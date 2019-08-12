import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  posts = [];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getFilterQueries().subscribe(result => {
      this.posts = result;
    });

  }



}
