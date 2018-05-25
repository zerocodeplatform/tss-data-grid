import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'app';
  

  options = {
    col:[{field: 'Model',header:"Sno"},{field: 'Name',header:"Sname"},{field: "Description",header:"Description"}],
    rows:[{Model:"1",Name:"Benz",Description:"Nice Car"}]
  }

}
