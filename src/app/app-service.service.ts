import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  filters = [];
  searchQuery = '';
  public result = [];
  private filterState = new Subject<any>();

  constructor(private _http: HttpClient) {
    // get results first from placeholder API
    this._http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((results: Array<any>) => {
      this.result = results;
      this.filterState.next(this.result);
      //send all results to post component initially
    });
  } 

  getPosts() {
    return this.result;
  }

  getFilterQueries() {
    return this.filterState.asObservable();
  }

  setFilter(filterRange) {
    this.filters = filterRange
    this.emitResult();
  }

  setSearchQuery(query) {
    this.searchQuery = query;
    this.emitResult();
  }

  private emitResult() {
    // send new filter of posts to component
    this.filterState.next(this.result.filter(post => {
      return this.filters.length
        ? this.isFilter(post) && this.isSearch(post)
        : this.isSearch(post);
    }));
  }

  private isFilter(post) {
    return post.id >= this.filters[0] && post.id < this.filters[1];
  }

  private isSearch(post) {
    return post.body.includes(this.searchQuery) || post.title.includes(this.searchQuery);
  }
}
