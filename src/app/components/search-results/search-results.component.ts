import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { DataFromApi } from 'src/app/interfaces/data-from-api';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() filteredCountriesArray: Country[];
  @Output() countryPopped: EventEmitter<string> = new EventEmitter();

  constructor() { }


  popCountry(countryCode: string) {
    this.countryPopped.emit(countryCode);
  }

  ngOnInit(): void {
  }

}

// name
// alpha3Code
// flag
