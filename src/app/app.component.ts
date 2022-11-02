import { Component } from '@angular/core';

//decorator which tells its not a normal class its a component
@Component({
  selector: 'app-root', //custom html tag to represent this component (check index.html)
  templateUrl: './app.component.html', //html template for app-root component
  styleUrls: ['./app.component.css'] //css files which are used with html template
})
export class AppComponent {
  title = 'Angular Project';

  public myname = "Ian in parent component";
  public message = "";
}