import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  currentPage:number = 1;
  limitPerPage:number = 5;
  totalRecords:number = 50;

  userList: any [] = [];

  tableheader : any = [
    {'Head' : 'Name', 'FieldName': 'name'},
    {'Head' : 'User Name', 'FieldName': 'username'},
    {'Head' : 'Email', 'FieldName': 'email'},
    {'Head' : 'Actions', 'FieldName': ''}
  ];

  constructor(private http: HttpClient, private api:AuthService){

  }

  ngOnInit():void {
    this.loadUsers();
  }


  apiTest(){
    this.api.post('http://localhost/backend/login');
  }


  loadUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any) => {
      this.userList = result;
    })
  }

  editUser(item: any){
    debugger;
  }

  deleteUser(item: any){
    debugger;
  }



  changePage(pagenumber: number){
    //debugger;
    console.log(pagenumber);
    this.currentPage = pagenumber;
  }



}
