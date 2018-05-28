import { Injectable, NgModule, Component, Input, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DataListModule } from 'primeng/datalist';
import { DataTableModule } from 'primeng/datatable';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TssGridService {
    constructor() { }
}
TssGridService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TssGridService.ctorParameters = () => [];
/** @nocollapse */ TssGridService.ngInjectableDef = defineInjectable({ factory: function TssGridService_Factory() { return new TssGridService(); }, token: TssGridService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TssGridComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TssGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Tss-Grid',
                template: `
    <p>
      tss-grid works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
TssGridComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DataTableComponent {
    constructor() {
        this.rows = [];
        this.globalFilter = false;
    }
    /**
     *
     *
     * \@memberof DataTableComponent
     * @return {?}
     */
    ngOnInit() {
        this.cols = this.options.col;
        this.rows = this.options.rows;
        this.globalFilter = this.options.globalFilter;
    }
}
DataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-data-table',
                template: `<div>
  <p-table #dt [columns]="cols" [value]="rows">
    <ng-template pTemplate="caption" *ngIf="globalFilter">
        <div style="text-align: right">        
            <i class="fa fa-search" style="margin:4px 4px 0 0"></i>
            <input type="text" pInputText size="50" placeholder="Global Filter" (input)="dt.filterGlobal($event.target.value, 'contains')" style="width:auto">
        </div>
    </ng-template>
    <ng-template pTemplate="header" let-columns>
      <tr>
        <th *ngFor="let col of columns">
          {{col.header}}
        </th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
      <tr>
        <td *ngFor="let col of columns">
          {{rowData[col.field]}}
        </td>
      </tr>
    </ng-template>
  </p-table>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
DataTableComponent.ctorParameters = () => [];
DataTableComponent.propDecorators = {
    "options": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DataViewComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rows = this.options.rows;
    }
}
DataViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-data-view',
                template: `<p-dataList [value]="rows">
  <ng-template let-row pTemplate="item">
    <div class="ui-g-12 ui-md-9 car-details">
      <div class="ui-g">
          <div class="ui-g-2 ui-sm-6">Number: </div>
          <div class="ui-g-10 ui-sm-6">{{row.number}}</div>
          <div class="ui-g-2 ui-sm-6">Name: </div>
          <div class="ui-g-10 ui-sm-6">{{row.name}}</div>
      </div>
  </div>
  </ng-template>
</p-dataList>`,
                styles: [``]
            },] },
];
/** @nocollapse */
DataViewComponent.ctorParameters = () => [];
DataViewComponent.propDecorators = {
    "options": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DataGridModule {
}
DataGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    TableModule,
                    DataListModule,
                    DataTableModule
                ],
                declarations: [DataTableComponent, DataViewComponent],
                exports: [
                    DataTableComponent, DataViewComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TssGridModule {
}
TssGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    DataGridModule
                ],
                declarations: [TssGridComponent],
                exports: [TssGridComponent,
                    DataTableComponent, DataViewComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TssGridService, TssGridComponent, TssGridModule, DataGridModule as ɵa, DataTableComponent as ɵb, DataViewComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Rzcy1ncmlkL2xpYi90c3MtZ3JpZC5zZXJ2aWNlLnRzIiwibmc6Ly90c3MtZ3JpZC9saWIvdHNzLWdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly90c3MtZ3JpZC9saWIvZGF0YS1ncmlkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL3Rzcy1ncmlkL2xpYi9kYXRhLWdyaWQvZGF0YS12aWV3L2RhdGEtdmlldy5jb21wb25lbnQudHMiLCJuZzovL3Rzcy1ncmlkL2xpYi9kYXRhLWdyaWQvZGF0YS1ncmlkLm1vZHVsZS50cyIsIm5nOi8vdHNzLWdyaWQvbGliL3Rzcy1ncmlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRzc0dyaWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLVRzcy1HcmlkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRzcy1ncmlkIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUc3NHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZE9wdGlvbnMgfSBmcm9tICcuLi91dGlscy9kYXRhZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxwLXRhYmxlICNkdCBbY29sdW1uc109XCJjb2xzXCIgW3ZhbHVlXT1cInJvd3NcIj5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY2FwdGlvblwiICpuZ0lmPVwiZ2xvYmFsRmlsdGVyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPiAgICAgICAgXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIHN0eWxlPVwibWFyZ2luOjRweCA0cHggMCAwXCI+PC9pPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcElucHV0VGV4dCBzaXplPVwiNTBcIiBwbGFjZWhvbGRlcj1cIkdsb2JhbCBGaWx0ZXJcIiAoaW5wdXQpPVwiZHQuZmlsdGVyR2xvYmFsKCRldmVudC50YXJnZXQudmFsdWUsICdjb250YWlucycpXCIgc3R5bGU9XCJ3aWR0aDphdXRvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiIGxldC1jb2x1bW5zPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAge3tjb2wuaGVhZGVyfX1cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiYm9keVwiIGxldC1yb3dEYXRhIGxldC1jb2x1bW5zPVwiY29sdW1uc1wiPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAge3tyb3dEYXRhW2NvbC5maWVsZF19fVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L3AtdGFibGU+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuIFxuICBASW5wdXQoKSBvcHRpb25zOiBEYXRhZ3JpZE9wdGlvbnM7XG5cbiAgY29sczogYW55W107XG4gIHJvd3MgPSBbXTtcbiAgZ2xvYmFsRmlsdGVyIDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBcbi8qKlxuICogXG4gKiBcbiAqIEBtZW1iZXJvZiBEYXRhVGFibGVDb21wb25lbnRcbiAqL1xubmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb2xzID0gdGhpcy5vcHRpb25zLmNvbDtcbiAgICB0aGlzLnJvd3MgPSB0aGlzLm9wdGlvbnMucm93cztcbiAgICB0aGlzLmdsb2JhbEZpbHRlciA9IHRoaXMub3B0aW9ucy5nbG9iYWxGaWx0ZXI7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFncmlkT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL2RhdGFncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGF0YS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cC1kYXRhTGlzdCBbdmFsdWVdPVwicm93c1wiPlxuICA8bmctdGVtcGxhdGUgbGV0LXJvdyBwVGVtcGxhdGU9XCJpdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInVpLWctMTIgdWktbWQtOSBjYXItZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInVpLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0yIHVpLXNtLTZcIj5OdW1iZXI6IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTEwIHVpLXNtLTZcIj57e3Jvdy5udW1iZXJ9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTIgdWktc20tNlwiPk5hbWU6IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTEwIHVpLXNtLTZcIj57e3Jvdy5uYW1lfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcC1kYXRhTGlzdD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGFncmlkT3B0aW9ucztcbiAgcm93czogYW55W107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5vcHRpb25zLnJvd3M7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdmlldy9kYXRhLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xuaW1wb3J0IHtEYXRhTGlzdE1vZHVsZX0gZnJvbSAncHJpbWVuZy9kYXRhbGlzdCc7XG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9kYXRhdGFibGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIERhdGFMaXN0TW9kdWxlLFxuICAgIERhdGFUYWJsZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEYXRhVGFibGVDb21wb25lbnQsRGF0YVZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOltcbiAgICBEYXRhVGFibGVDb21wb25lbnQsRGF0YVZpZXdDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUc3NHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90c3MtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRNb2R1bGUgfSBmcm9tICcuL2RhdGEtZ3JpZC9kYXRhLWdyaWQubW9kdWxlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS1ncmlkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtZ3JpZC9kYXRhLXZpZXcvZGF0YS12aWV3LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgRGF0YUdyaWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVHNzR3JpZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUc3NHcmlkQ29tcG9uZW50LCAgXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LERhdGFWaWV3Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHNzR3JpZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7SUF1Q0U7b0JBRk8sRUFBRTs0QkFDZ0IsS0FBSztLQUNiOzs7Ozs7O0lBT25CLFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztLQUMvQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdUJMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7Ozt3QkFJRSxLQUFLOzs7Ozs7O0FDbENSO0lBdUJFLGlCQUFpQjs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztLQUMvQjs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztjQVdFO2dCQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7Ozt3QkFHRSxLQUFLOzs7Ozs7O0FDckJSOzs7WUFRQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO29CQUNkLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFDLGlCQUFpQixDQUFDO2dCQUNwRCxPQUFPLEVBQUM7b0JBQ04sa0JBQWtCLEVBQUMsaUJBQWlCO2lCQUNyQzthQUNGOzs7Ozs7O0FDbkJEOzs7WUFPQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNSLGNBQWM7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQjtvQkFDeEIsa0JBQWtCLEVBQUMsaUJBQWlCO2lCQUNyQzthQUNGOzs7Ozs7Ozs7Ozs7Ozs7In0=