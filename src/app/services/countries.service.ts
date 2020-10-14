import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient ) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}
