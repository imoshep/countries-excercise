import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { DataFromApi } from 'src/app/interfaces/data-from-api';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  baseCountriesArray: Country[];
  filteredCountriesArray: Country[];


  getCountries() {
    this.countriesService.getCountries().subscribe((data: Array<DataFromApi>) => {
      this.baseCountriesArray = data.map((country) => {
        return {
          name: country.name.toLowerCase(),
          code: country.alpha3Code,
          flag: country.flag
        }
      })
      console.log(this.baseCountriesArray);
      this.filteredCountriesArray = this.baseCountriesArray;
    })
  }

  popCountry(countryCode: string) {
    this.filteredCountriesArray = this.filteredCountriesArray.filter((country: Country) =>  country.code !== countryCode)
  }

  filterByInput(userInput: string) {
    userInput = userInput.toLowerCase();
    this.filteredCountriesArray = this.baseCountriesArray.filter((country: Country) => {
      return country.name.startsWith(userInput)});
  }

  resetCountriesArray() {
    this.filteredCountriesArray = this.baseCountriesArray;
  }

  ngOnInit(): void {
    this.getCountries();
  }

}
