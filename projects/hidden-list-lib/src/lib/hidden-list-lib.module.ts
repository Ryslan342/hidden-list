import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HiddenListDirective } from './hidden-list.directive';
import { HiddenListViewDirective } from './hidden-list-view.directive';
import { HiddenListControllerDirective } from './hidden-list-controller.directive';



@NgModule({
  declarations: [HiddenListDirective, HiddenListViewDirective, HiddenListControllerDirective],
  imports: [
  ],
  exports: [HiddenListDirective, HiddenListViewDirective, HiddenListControllerDirective],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HiddenListLibModule { }
