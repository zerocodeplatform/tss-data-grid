import { OnInit } from '@angular/core';
import { DatagridOptions } from '../utils/datagrid-options';
export declare class DataTableComponent implements OnInit {
    options: DatagridOptions;
    cols: any[];
    rows: any[];
    globalFilter: boolean;
    constructor();
    /**
     *
     *
     * @memberof DataTableComponent
     */
    ngOnInit(): void;
}
