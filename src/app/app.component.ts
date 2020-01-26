import {AfterViewChecked, Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hidden-list';
  items: any = [1, 2, 3, 4, 5, 6];
  constructor() {}
}
