import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) 
  { 

  }

  ngOnInit(): void{

  }

  post(apiurl:any): void{
    const datas:any = {
      email_address: 'anurag@gmail.com',
      password: 'Pass@123'
    }

    this.http.post(apiurl,datas).subscribe((result:any) => {
      console.log(result);
    })
  }


  


}
