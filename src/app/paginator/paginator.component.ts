import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormData } from '../data/form-data.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() dataForPagination: FormData[];
  @Output() pageClick : EventEmitter<any> = new EventEmitter();
  constructor() { }

  paginationLength: number = 4;
  pageData: FormData[][];
  noOfPages: number[];
  ngOnInit(): void {
  this.pageData=[];
    let noOfData = this.dataForPagination.length;
    var pages = Math.ceil(noOfData / this.paginationLength);
    this.noOfPages = new Array(pages);
    console.log(pages, 'pages');
    let startIndex = 0;
    let endIndex = this.paginationLength;
    for (let i = 0; i < pages; i++) {
      this.pageData[i] = [];
      this.dataForPagination.slice(startIndex, endIndex).forEach(form => {
        this.pageData[i].push(form);
      })
      if(endIndex === noOfData){
        break;
      }
      startIndex = endIndex;
      endIndex = noOfData;
    }
    console.log(this.pageData, 'paga data');
}

  pageClicked(index) {
    this.pageClick.emit({data: this.pageData, index: index});
  }

}
