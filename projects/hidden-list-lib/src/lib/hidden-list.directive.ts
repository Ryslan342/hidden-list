import {ContentChild, Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

import { HiddenListViewDirective } from './hidden-list-view.directive';
import { HiddenListControllerDirective } from './hidden-list-controller.directive';
import {GroupService} from './group.service';

@Directive({
  selector: '[HiddenList]'
})
export class HiddenListDirective {
  @Input('group') group: string;
  @ContentChild(HiddenListControllerDirective, { static: false })
  set controller(v: HiddenListControllerDirective) {
    v.listDirective = this;
  }
  get controller() {
    return null;
  }

  private _view: HiddenListViewDirective;
  @ContentChild(HiddenListViewDirective,   { static: false })
  set view(v: HiddenListViewDirective) {
    this._view = v;
    if (typeof  this.startValue === 'boolean') {
      this.view.show = this.startValue;
    }
  }
  get view() {
    return this._view;
  }

  private startValue: boolean;
  @HostBinding('class.show')
  @Input('show')
  set show(v: boolean) {
    if (this.group && v) {
      if (this.groupProv.groups[this.group]) {
        this.groupProv.groups[this.group].show = false;
      }
      this.groupProv.groups[this.group] = this;
    }

    if (this.view) {
      this.view.show = v;
    } else {
      this.startValue = v;
    }
  }

  get show(): boolean {
    if (this.view) {
      return this.view.show;
    } else {
      return null;
    }
  }

  constructor(private el: ElementRef, private groupProv: GroupService) {}

}
