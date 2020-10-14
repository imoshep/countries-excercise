import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input() country: Country;
  @Output() countryPopped: EventEmitter<string> = new EventEmitter();

  constructor() { }

  popCountry() {
    this.countryPopped.emit(this.country.code);
  }

  ngOnInit(): void {
  }

}
