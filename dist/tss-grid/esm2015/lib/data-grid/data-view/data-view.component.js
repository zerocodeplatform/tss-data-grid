/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class DataViewComponent {
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
function DataViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DataViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DataViewComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DataViewComponent.propDecorators;
    /** @type {?} */
    DataViewComponent.prototype.options;
    /** @type {?} */
    DataViewComponent.prototype.rows;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Rzcy1ncmlkLyIsInNvdXJjZXMiOlsibGliL2RhdGEtZ3JpZC9kYXRhLXZpZXcvZGF0YS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQnhELE1BQU07SUFJSixpQkFBaUI7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDL0I7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Y0FXRTtnQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7d0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZE9wdGlvbnMgfSBmcm9tICcuLi91dGlscy9kYXRhZ3JpZC1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtdmlldycsXG4gIHRlbXBsYXRlOiBgPHAtZGF0YUxpc3QgW3ZhbHVlXT1cInJvd3NcIj5cbiAgPG5nLXRlbXBsYXRlIGxldC1yb3cgcFRlbXBsYXRlPVwiaXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aS1nLTEyIHVpLW1kLTkgY2FyLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1aS1nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWctMiB1aS1zbS02XCI+TnVtYmVyOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0xMCB1aS1zbS02XCI+e3tyb3cubnVtYmVyfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0yIHVpLXNtLTZcIj5OYW1lOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktZy0xMCB1aS1zbS02XCI+e3tyb3cubmFtZX19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L3AtZGF0YUxpc3Q+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBvcHRpb25zOiBEYXRhZ3JpZE9wdGlvbnM7XG4gIHJvd3M6IGFueVtdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm93cyA9IHRoaXMub3B0aW9ucy5yb3dzO1xuICB9XG5cbn1cbiJdfQ==