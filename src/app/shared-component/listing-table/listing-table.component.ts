import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.css']
})
export class ListingTableComponent {

  @Input() HeadArray : any[] = [];
  @Input() DataArray : any[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();


  constructor(){

  }

  ngOnInit():void {

  }

  edit(item: any){
    debugger;
    this.onEdit.emit(item);
  }

  delete(item: any){
    debugger;
    this.onDelete.emit(item);
  }


}
