import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/_model/city';
import { Country } from 'src/app/_model/country';
import { State } from 'src/app/_model/state';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  constructor(private http:HttpClient) { 

  }

  //Set Variable to Validate API Key
  httpOptions = {
    headers: new HttpHeaders({
      "Content-type" :  "application/json",
      "X-CSCAPI-KEY" :  "UDNkaEUyejMxMXBYUk9lRE54S3MycjVZdktxczFNOEc2dXhjS2lWTw=="  //Put API Key Later 
    }) 
  }

  //Get Country List
  getCountry(): Observable<Country[]>{
    return this.http.get<Country[]>('https://api.countrystatecity.in/v1/countries', { headers: this.httpOptions.headers});
  }

  //Get State List
  getStateOfSelectedCountry(countryIso:string): Observable<Country[]>{
    return this.http.get<State[]>(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`, { headers: this.httpOptions.headers});
  }

  //Get City List
  getCityOfSelectedState(countryIso:string,stateIso:string): Observable<Country[]>{
    return this.http.get<City[]>(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`, { headers: this.httpOptions.headers});
  }


}
