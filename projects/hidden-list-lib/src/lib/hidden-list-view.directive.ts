import {AfterViewChecked, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[HiddenListView]'
})
export class HiddenListViewDirective {
  @Input('resizeMode') resizeMode: 'default' | '' = 'default';

  private isShow = false;
  set show(v: boolean) {
    this.isShow = v;
    if (v) {
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    } else {
      this.el.nativeElement.style.height = '0px';
    }
  }
  get show(): boolean {
    return this.isShow;
  }

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.height = '0px';
  }
}
