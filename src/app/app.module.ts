import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchQueryComponent } from './components/search-query/search-query.component';
import { IdFilterComponent } from './components/id-filter/id-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchQueryComponent,
    IdFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
