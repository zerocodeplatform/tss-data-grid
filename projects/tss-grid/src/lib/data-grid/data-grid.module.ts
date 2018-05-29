import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DataViewComponent } from './data-view/data-view.component';
import {TableModule} from 'primeng/table';
import {DataListModule} from 'primeng/datalist';
import {DataTableModule} from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    DataListModule,
    DataTableModule
  ],
  declarations: [DataTableComponent,DataViewComponent],
  exports:[
    DataTableComponent,DataViewComponent
  ]
})
export class DataGridModule { }
