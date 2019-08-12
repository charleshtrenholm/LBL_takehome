import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filters = [];
  searchQuery = '';
  result = [];

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }
}
