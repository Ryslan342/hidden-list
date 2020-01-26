import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[HiddenListController]'
})
export class HiddenListControllerDirective {
  @Input('list') listDirective: any; // HiddenListDirective;
  constructor(public el: ElementRef) {}

  @HostListener('click') click = () => {
    if (this.listDirective) {
      this.listDirective.show = !this.listDirective.show;
    }
  }

}
