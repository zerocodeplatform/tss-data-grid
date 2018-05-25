import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  @Input() options: any;
  rows: any[];
  constructor() { }

  ngOnInit() {
    this.rows = this.options.rows;
  }

}
