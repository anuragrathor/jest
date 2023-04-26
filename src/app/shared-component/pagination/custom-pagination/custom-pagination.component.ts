import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css']
})
export class CustomPaginationComponent {

  @Input() currentPage : number = 1;
  @Input() limit : number = 5;
  @Input() total : number = 20;
  
  @Output() changePage = new EventEmitter<number>();

  pages: number[] =[];
  lastPage: number = 0;


  ngOnInit(): void{
    const pageCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pageCount);
    this.lastPage = pageCount;
    console.log(this.pages);
  }


  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start)
  }

  pageChange(pagenumber:number){
    //debugger;
    this.changePage.emit(pagenumber)
  }

  
  changePageSize(){

  }

}
