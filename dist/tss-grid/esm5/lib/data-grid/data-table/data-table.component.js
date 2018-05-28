/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { DataTableComponent };
function DataTableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DataTableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DataTableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DataTableComponent.propDecorators;
    /** @type {?} */
    DataTableComponent.prototype.options;
    /** @type {?} */
    DataTableComponent.prototype.cols;
    /** @type {?} */
    DataTableComponent.prototype.rows;
    /** @type {?} */
    DataTableComponent.prototype.globalFilter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90c3MtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLWdyaWQvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBdUN0RDtvQkFGTyxFQUFFOzRCQUNnQixLQUFLO0tBQ2I7SUFFbkI7Ozs7T0FJRzs7Ozs7OztJQUNILHFDQUFROzs7Ozs7SUFBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0tBQy9DOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxzMkJBdUJMO29CQUNMLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7Ozs7NEJBSUUsS0FBSzs7NkJBbENSOztTQStCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YWdyaWRPcHRpb25zIH0gZnJvbSAnLi4vdXRpbHMvZGF0YWdyaWQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICA8cC10YWJsZSAjZHQgW2NvbHVtbnNdPVwiY29sc1wiIFt2YWx1ZV09XCJyb3dzXCI+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImNhcHRpb25cIiAqbmdJZj1cImdsb2JhbEZpbHRlclwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj4gICAgICAgIFxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiBzdHlsZT1cIm1hcmdpbjo0cHggNHB4IDAgMFwiPjwvaT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBJbnB1dFRleHQgc2l6ZT1cIjUwXCIgcGxhY2Vob2xkZXI9XCJHbG9iYWwgRmlsdGVyXCIgKGlucHV0KT1cImR0LmZpbHRlckdsb2JhbCgkZXZlbnQudGFyZ2V0LnZhbHVlLCAnY29udGFpbnMnKVwiIHN0eWxlPVwid2lkdGg6YXV0b1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIiBsZXQtY29sdW1ucz5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiPlxuICAgICAgICAgIHt7Y29sLmhlYWRlcn19XG4gICAgICAgIDwvdGg+XG4gICAgICA8L3RyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImJvZHlcIiBsZXQtcm93RGF0YSBsZXQtY29sdW1ucz1cImNvbHVtbnNcIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiPlxuICAgICAgICAgIHt7cm93RGF0YVtjb2wuZmllbGRdfX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLXRhYmxlPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiBcbiAgQElucHV0KCkgb3B0aW9uczogRGF0YWdyaWRPcHRpb25zO1xuXG4gIGNvbHM6IGFueVtdO1xuICByb3dzID0gW107XG4gIGdsb2JhbEZpbHRlciA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgXG4vKipcbiAqIFxuICogXG4gKiBAbWVtYmVyb2YgRGF0YVRhYmxlQ29tcG9uZW50XG4gKi9cbm5nT25Jbml0KCkge1xuICAgIHRoaXMuY29scyA9IHRoaXMub3B0aW9ucy5jb2w7XG4gICAgdGhpcy5yb3dzID0gdGhpcy5vcHRpb25zLnJvd3M7XG4gICAgdGhpcy5nbG9iYWxGaWx0ZXIgPSB0aGlzLm9wdGlvbnMuZ2xvYmFsRmlsdGVyO1xuICB9XG5cbn1cbiJdfQ==