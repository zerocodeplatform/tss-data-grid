import { Component, OnInit,Input } from '@angular/core';
import { DatagridOptions } from '../utils/datagrid-options';

@Component({
  selector: 'lib-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  @Input() options: DatagridOptions;
  rows: any[];
  paginator:boolean;

  
  constructor() { }

  ngOnInit() {
    this.rows = this.options.rows;
    this.paginator = this.options.paginator;
  }

}
