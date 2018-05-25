import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

 
  @Input() options: any;
  cols: any[];
  rows = [];
  globalFilter : boolean = false;
  constructor() { }
  
/**
 * 
 * 
 * @memberof DataTableComponent
 */
ngOnInit() {
    this.cols = this.options.col;
    this.rows = this.options.rows;
    this.globalFilter = this.options.globalFilter;
  }

}
