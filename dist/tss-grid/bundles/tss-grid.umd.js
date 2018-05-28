(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/table'), require('primeng/datalist'), require('primeng/datatable')) :
    typeof define === 'function' && define.amd ? define('tss-grid', ['exports', '@angular/core', '@angular/common', 'primeng/table', 'primeng/datalist', 'primeng/datatable'], factory) :
    (factory((global['tss-grid'] = {}),global.ng.core,global.ng.common,null,null,null));
}(this, (function (exports,i0,common,table,datalist,datatable) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssGridService = (function () {
        function TssGridService() {
        }
        TssGridService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TssGridService.ctorParameters = function () { return []; };
        /** @nocollapse */ TssGridService.ngInjectableDef = i0.defineInjectable({ factory: function TssGridService_Factory() { return new TssGridService(); }, token: TssGridService, providedIn: "root" });
        return TssGridService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssGridComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var DataTableComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'lib-data-table',
                        template: "<div>\n  <p-table #dt [columns]=\"cols\" [value]=\"rows\">\n    <ng-template pTemplate=\"caption\" *ngIf=\"globalFilter\">\n        <div style=\"text-align: right\">        \n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n        <th *ngFor=\"let col of columns\">\n          {{col.header}}\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr>\n        <td *ngFor=\"let col of columns\">\n          {{rowData[col.field]}}\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DataTableComponent.ctorParameters = function () { return []; };
        DataTableComponent.propDecorators = {
            "options": [{ type: i0.Input },],
        };
        return DataTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataViewComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'lib-data-view',
                        template: "<p-dataList [value]=\"rows\">\n  <ng-template let-row pTemplate=\"item\">\n    <div class=\"ui-g-12 ui-md-9 car-details\">\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2 ui-sm-6\">Number: </div>\n          <div class=\"ui-g-10 ui-sm-6\">{{row.number}}</div>\n          <div class=\"ui-g-2 ui-sm-6\">Name: </div>\n          <div class=\"ui-g-10 ui-sm-6\">{{row.name}}</div>\n      </div>\n  </div>\n  </ng-template>\n</p-dataList>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DataViewComponent.ctorParameters = function () { return []; };
        DataViewComponent.propDecorators = {
            "options": [{ type: i0.Input },],
        };
        return DataViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataGridModule = (function () {
        function DataGridModule() {
        }
        DataGridModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            table.TableModule,
                            datalist.DataListModule,
                            datatable.DataTableModule
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
    var TssGridModule = (function () {
        function TssGridModule() {
        }
        TssGridModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.TssGridService = TssGridService;
    exports.TssGridComponent = TssGridComponent;
    exports.TssGridModule = TssGridModule;
    exports.ɵa = DataGridModule;
    exports.ɵb = DataTableComponent;
    exports.ɵc = DataViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLWdyaWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90c3MtZ3JpZC9saWIvdHNzLWdyaWQuc2VydmljZS50cyIsIm5nOi8vdHNzLWdyaWQvbGliL3Rzcy1ncmlkLmNvbXBvbmVudC50cyIsIm5nOi8vdHNzLWdyaWQvbGliL2RhdGEtZ3JpZC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly90c3MtZ3JpZC9saWIvZGF0YS1ncmlkL2RhdGEtdmlldy9kYXRhLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly90c3MtZ3JpZC9saWIvZGF0YS1ncmlkL2RhdGEtZ3JpZC5tb2R1bGUudHMiLCJuZzovL3Rzcy1ncmlkL2xpYi90c3MtZ3JpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUc3NHcmlkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1Uc3MtR3JpZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0c3MtZ3JpZCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVHNzR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YWdyaWRPcHRpb25zIH0gZnJvbSAnLi4vdXRpbHMvZGF0YWdyaWQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8cC10YWJsZSAjZHQgW2NvbHVtbnNdPVwiY29sc1wiIFt2YWx1ZV09XCJyb3dzXCI+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNhcHRpb25cIiAqbmdJZj1cImdsb2JhbEZpbHRlclwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj4gICAgICAgIFxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiBzdHlsZT1cIm1hcmdpbjo0cHggNHB4IDAgMFwiPjwvaT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBJbnB1dFRleHQgc2l6ZT1cIjUwXCIgcGxhY2Vob2xkZXI9XCJHbG9iYWwgRmlsdGVyXCIgKGlucHV0KT1cImR0LmZpbHRlckdsb2JhbCgkZXZlbnQudGFyZ2V0LnZhbHVlLCAnY29udGFpbnMnKVwiIHN0eWxlPVwid2lkdGg6YXV0b1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIiBsZXQtY29sdW1ucz5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiPlxuICAgICAgICAgIHt7Y29sLmhlYWRlcn19XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImJvZHlcIiBsZXQtcm93RGF0YSBsZXQtY29sdW1ucz1cImNvbHVtbnNcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiPlxuICAgICAgICAgIHt7cm93RGF0YVtjb2wuZmllbGRdfX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLXRhYmxlPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiBcbiAgQElucHV0KCkgb3B0aW9uczogRGF0YWdyaWRPcHRpb25zO1xuXG4gIGNvbHM6IGFueVtdO1xuICByb3dzID0gW107XG4gIGdsb2JhbEZpbHRlciA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgXG4vKipcbiAqIFxuICogXG4gKiBAbWVtYmVyb2YgRGF0YVRhYmxlQ29tcG9uZW50XG4gKi9cbm5nT25Jbml0KCkge1xuICAgIHRoaXMuY29scyA9IHRoaXMub3B0aW9ucy5jb2w7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5vcHRpb25zLnJvd3M7XG4gICAgdGhpcy5nbG9iYWxGaWx0ZXIgPSB0aGlzLm9wdGlvbnMuZ2xvYmFsRmlsdGVyO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZE9wdGlvbnMgfSBmcm9tICcuLi91dGlscy9kYXRhZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtdmlldycsXG4gIHRlbXBsYXRlOiBgPHAtZGF0YUxpc3QgW3ZhbHVlXT1cInJvd3NcIj5cbiAgPG5nLXRlbXBsYXRlIGxldC1yb3cgcFRlbXBsYXRlPVwiaXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTEyIHVpLW1kLTkgY2FyLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWctMiB1aS1zbS02XCI+TnVtYmVyOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0xMCB1aS1zbS02XCI+e3tyb3cubnVtYmVyfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0yIHVpLXNtLTZcIj5OYW1lOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0xMCB1aS1zbS02XCI+e3tyb3cubmFtZX19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L3AtZGF0YUxpc3Q+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBvcHRpb25zOiBEYXRhZ3JpZE9wdGlvbnM7XG4gIHJvd3M6IGFueVtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm93cyA9IHRoaXMub3B0aW9ucy5yb3dzO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXZpZXcvZGF0YS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge1RhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3RhYmxlJztcbmltcG9ydCB7RGF0YUxpc3RNb2R1bGV9IGZyb20gJ3ByaW1lbmcvZGF0YWxpc3QnO1xuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvZGF0YXRhYmxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUYWJsZU1vZHVsZSxcbiAgICBEYXRhTGlzdE1vZHVsZSxcbiAgICBEYXRhVGFibGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGF0YVRhYmxlQ29tcG9uZW50LERhdGFWaWV3Q29tcG9uZW50XSxcbiAgZXhwb3J0czpbXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LERhdGFWaWV3Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHNzR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdHNzLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkTW9kdWxlIH0gZnJvbSAnLi9kYXRhLWdyaWQvZGF0YS1ncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtZ3JpZC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLWdyaWQvZGF0YS12aWV3L2RhdGEtdmlldy5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgIERhdGFHcmlkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rzc0dyaWRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVHNzR3JpZENvbXBvbmVudCwgIFxuICAgIERhdGFUYWJsZUNvbXBvbmVudCxEYXRhVmlld0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRzc0dyaWRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJUYWJsZU1vZHVsZSIsIkRhdGFMaXN0TW9kdWxlIiwiRGF0YVRhYmxlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsbUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxnREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzsrQkFWRDs7Ozs7OztBQ0FBO1FBdUNFO3dCQUZPLEVBQUU7Z0NBQ2dCLEtBQUs7U0FDYjs7Ozs7Ozs7Ozs7O1FBT25CLHFDQUFROzs7Ozs7WUFBUjtnQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2FBQy9DOztvQkEvQ0ZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsczJCQXVCTDt3QkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7O2dDQUlFQyxRQUFLOztpQ0FsQ1I7Ozs7Ozs7QUNBQTtRQXVCRTtTQUFpQjs7OztRQUVqQixvQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMvQjs7b0JBeEJGRCxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSwyYkFXRTt3QkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7O2dDQUdFQyxRQUFLOztnQ0FyQlI7Ozs7Ozs7QUNBQTs7OztvQkFRQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLGlCQUFXOzRCQUNYQyx1QkFBYzs0QkFDZEMseUJBQWU7eUJBQ2hCO3dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFDLGlCQUFpQixDQUFDO3dCQUNwRCxPQUFPLEVBQUM7NEJBQ04sa0JBQWtCLEVBQUMsaUJBQWlCO3lCQUNyQztxQkFDRjs7NkJBbkJEOzs7Ozs7O0FDQUE7Ozs7b0JBT0NKLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1IsY0FBYzt5QkFDZDt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCOzRCQUN4QixrQkFBa0IsRUFBQyxpQkFBaUI7eUJBQ3JDO3FCQUNGOzs0QkFmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==