import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CountryComponent } from './components/country/country.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchboxComponent,
    SearchResultsComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
