import { Component,OnInit } from '@angular/core';
import { DatagridOptionsClass } from 'projects/tss-grid/src/lib/data-grid/utils/datagrid-options';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit    {
  title = 'app';
  cols: any[];
  rows = [];
  styling: string;

  options:DatagridOptionsClass;
 

  constructor(){
    this.options = {
      col:[{field: 'Model',header:"Sno"},{field: 'Name',header:"Sname"},{field: "Description",header:"Description"}],
      rows:[{Model:"1",Name:"Benz",Description:"Nice Car"},
            {Model:"2",Name:"RangeRover",Description:"Costly Car"}],
      globalFilter:true,
      styling: "data-table"
    }
  }
    
  ngOnInit() {
    this.cols = this.options.col;
    this.rows = this.options.rows;
    this.styling = this.options.styling;
  }

  

}
