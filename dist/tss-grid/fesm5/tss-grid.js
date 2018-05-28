import { Injectable, NgModule, Component, Input, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DataListModule } from 'primeng/datalist';
import { DataTableModule } from 'primeng/datatable';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TssGridService = /** @class */ (function () {
    function TssGridService() {
    }
    TssGridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TssGridService.ctorParameters = function () { return []; };
    /** @nocollapse */ TssGridService.ngInjectableDef = defineInjectable({ factory: function TssGridService_Factory() { return new TssGridService(); }, token: TssGridService, providedIn: "root" });
    return TssGridService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TssGridComponent = /** @class */ (function () {
    function TssGridComponent() {
    }
    /**
     * @return {?}
     */
    TssGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TssGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-Tss-Grid',
                    template: "\n    <p>\n      tss-grid works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    TssGridComponent.ctorParameters = function () { return []; };
    return TssGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.rows = [];
        this.globalFilter = false;
    }
    /**
     *
     *
     * @memberof DataTableComponent
     */
    /**
     *
     *
     * \@memberof DataTableComponent
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     *
     *
     * \@memberof DataTableComponent
     * @return {?}
     */
    function () {
        this.cols = this.options.col;
        this.rows = this.options.rows;
        this.globalFilter = this.options.globalFilter;
    };
    DataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-data-table',
                    template: "<div>\n  <p-table #dt [columns]=\"cols\" [value]=\"rows\">\n    <ng-template pTemplate=\"caption\" *ngIf=\"globalFilter\">\n        <div style=\"text-align: right\">        \n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n        <th *ngFor=\"let col of columns\">\n          {{col.header}}\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr>\n        <td *ngFor=\"let col of columns\">\n          {{rowData[col.field]}}\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
    DataTableComponent.propDecorators = {
        "options": [{ type: Input },],
    };
    return DataTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataViewComponent = /** @class */ (function () {
    function DataViewComponent() {
    }
    /**
     * @return {?}
     */
    DataViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rows = this.options.rows;
    };
    DataViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-data-view',
                    template: "<p-dataList [value]=\"rows\">\n  <ng-template let-row pTemplate=\"item\">\n    <div class=\"ui-g-12 ui-md-9 car-details\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2 ui-sm-6\">Number: </div>\n          <div class=\"ui-g-10 ui-sm-6\">{{row.number}}</div>\n          <div class=\"ui-g-2 ui-sm-6\">Name: </div>\n          <div class=\"ui-g-10 ui-sm-6\">{{row.name}}</div>\n      </div>\n  </div>\n  </ng-template>\n</p-dataList>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DataViewComponent.ctorParameters = function () { return []; };
    DataViewComponent.propDecorators = {
        "options": [{ type: Input },],
    };
    return DataViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataGridModule = /** @class */ (function () {
    function DataGridModule() {
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
    return DataGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TssGridModule = /** @class */ (function () {
    function TssGridModule() {
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
    return TssGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TssGridService, TssGridComponent, TssGridModule, DataGridModule as ɵa, DataTableComponent as ɵb, DataViewComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Rzcy1ncmlkL2xpYi90c3MtZ3JpZC5zZXJ2aWNlLnRzIiwibmc6Ly90c3MtZ3JpZC9saWIvdHNzLWdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly90c3MtZ3JpZC9saWIvZGF0YS1ncmlkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL3Rzcy1ncmlkL2xpYi9kYXRhLWdyaWQvZGF0YS12aWV3L2RhdGEtdmlldy5jb21wb25lbnQudHMiLCJuZzovL3Rzcy1ncmlkL2xpYi9kYXRhLWdyaWQvZGF0YS1ncmlkLm1vZHVsZS50cyIsIm5nOi8vdHNzLWdyaWQvbGliL3Rzcy1ncmlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRzc0dyaWRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLVRzcy1HcmlkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRzcy1ncmlkIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUc3NHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZE9wdGlvbnMgfSBmcm9tICcuLi91dGlscy9kYXRhZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gIDxwLXRhYmxlICNkdCBbY29sdW1uc109XCJjb2xzXCIgW3ZhbHVlXT1cInJvd3NcIj5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY2FwdGlvblwiICpuZ0lmPVwiZ2xvYmFsRmlsdGVyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPiAgICAgICAgXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIHN0eWxlPVwibWFyZ2luOjRweCA0cHggMCAwXCI+PC9pPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcElucHV0VGV4dCBzaXplPVwiNTBcIiBwbGFjZWhvbGRlcj1cIkdsb2JhbCBGaWx0ZXJcIiAoaW5wdXQpPVwiZHQuZmlsdGVyR2xvYmFsKCRldmVudC50YXJnZXQudmFsdWUsICdjb250YWlucycpXCIgc3R5bGU9XCJ3aWR0aDphdXRvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiIGxldC1jb2x1bW5zPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAge3tjb2wuaGVhZGVyfX1cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiYm9keVwiIGxldC1yb3dEYXRhIGxldC1jb2x1bW5zPVwiY29sdW1uc1wiPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAge3tyb3dEYXRhW2NvbC5maWVsZF19fVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L3AtdGFibGU+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuIFxuICBASW5wdXQoKSBvcHRpb25zOiBEYXRhZ3JpZE9wdGlvbnM7XG5cbiAgY29sczogYW55W107XG4gIHJvd3MgPSBbXTtcbiAgZ2xvYmFsRmlsdGVyIDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBcbi8qKlxuICogXG4gKiBcbiAqIEBtZW1iZXJvZiBEYXRhVGFibGVDb21wb25lbnRcbiAqL1xubmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb2xzID0gdGhpcy5vcHRpb25zLmNvbDtcbiAgICB0aGlzLnJvd3MgPSB0aGlzLm9wdGlvbnMucm93cztcbiAgICB0aGlzLmdsb2JhbEZpbHRlciA9IHRoaXMub3B0aW9ucy5nbG9iYWxGaWx0ZXI7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFncmlkT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL2RhdGFncmlkLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGF0YS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cC1kYXRhTGlzdCBbdmFsdWVdPVwicm93c1wiPlxuICA8bmctdGVtcGxhdGUgbGV0LXJvdyBwVGVtcGxhdGU9XCJpdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInVpLWctMTIgdWktbWQtOSBjYXItZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInVpLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0yIHVpLXNtLTZcIj5OdW1iZXI6IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTEwIHVpLXNtLTZcIj57e3Jvdy5udW1iZXJ9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTIgdWktc20tNlwiPk5hbWU6IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTEwIHVpLXNtLTZcIj57e3Jvdy5uYW1lfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcC1kYXRhTGlzdD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGFncmlkT3B0aW9ucztcbiAgcm93czogYW55W107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5vcHRpb25zLnJvd3M7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdmlldy9kYXRhLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xuaW1wb3J0IHtEYXRhTGlzdE1vZHVsZX0gZnJvbSAncHJpbWVuZy9kYXRhbGlzdCc7XG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9kYXRhdGFibGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhYmxlTW9kdWxlLFxuICAgIERhdGFMaXN0TW9kdWxlLFxuICAgIERhdGFUYWJsZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEYXRhVGFibGVDb21wb25lbnQsRGF0YVZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOltcbiAgICBEYXRhVGFibGVDb21wb25lbnQsRGF0YVZpZXdDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUc3NHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90c3MtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWRNb2R1bGUgfSBmcm9tICcuL2RhdGEtZ3JpZC9kYXRhLWdyaWQubW9kdWxlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS1ncmlkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtZ3JpZC9kYXRhLXZpZXcvZGF0YS12aWV3LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgRGF0YUdyaWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVHNzR3JpZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUc3NHcmlkQ29tcG9uZW50LCAgXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LERhdGFWaWV3Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHNzR3JpZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixtQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsZ0RBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7MkJBVkQ7Ozs7Ozs7QUNBQTtJQXVDRTtvQkFGTyxFQUFFOzRCQUNnQixLQUFLO0tBQ2I7Ozs7Ozs7Ozs7OztJQU9uQixxQ0FBUTs7Ozs7O0lBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztLQUMvQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsczJCQXVCTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7OzRCQUlFLEtBQUs7OzZCQWxDUjs7Ozs7OztBQ0FBO0lBdUJFO0tBQWlCOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDL0I7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyYkFXRTtvQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7OzRCQUdFLEtBQUs7OzRCQXJCUjs7Ozs7OztBQ0FBOzs7O2dCQVFDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUMsaUJBQWlCLENBQUM7b0JBQ3BELE9BQU8sRUFBQzt3QkFDTixrQkFBa0IsRUFBQyxpQkFBaUI7cUJBQ3JDO2lCQUNGOzt5QkFuQkQ7Ozs7Ozs7QUNBQTs7OztnQkFPQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNSLGNBQWM7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQjt3QkFDeEIsa0JBQWtCLEVBQUMsaUJBQWlCO3FCQUNyQztpQkFDRjs7d0JBZkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==