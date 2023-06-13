import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/_model/country';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  constructor(private http:HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type" :  "application/json",
      "X-CSCAPI-KEY" :  "UDNkaEUyejMxMXBYUk9lRE54S3MycjVZdktxczFNOEc2dXhjS2lWTw=="  //Put API Key Later 
    }) 
  }


  getCountry(): Observable<Country[]>{
    return this.http.get<Country[]>('https://api.countrystatecity.in/v1/countries', { headers: this.httpOptions.headers});
  }

  getStateOfSelectedCountry(countryIso:string): Observable<Country[]>{
    return this.http.get<Country[]>(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`, { headers: this.httpOptions.headers});
  }

  getCityOfSelectedState(countryIso:string,stateIso:string): Observable<Country[]>{
    return this.http.get<Country[]>(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`, { headers: this.httpOptions.headers});
  }


}
