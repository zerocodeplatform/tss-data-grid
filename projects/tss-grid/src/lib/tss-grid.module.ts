import { NgModule } from '@angular/core';
import { TssGridComponent } from './tss-grid.component';
import { DataGridModule } from './data-grid/data-grid.module';
import { DataTableComponent } from './data-grid/data-table/data-table.component';
import { DataViewComponent } from './data-grid/data-view/data-view.component';


@NgModule({
  imports: [
   DataGridModule
  ],
  declarations: [TssGridComponent],
  exports: [TssGridComponent,  
    DataTableComponent,DataViewComponent
  ]
})
export class TssGridModule { }
