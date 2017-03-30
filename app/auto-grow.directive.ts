import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[authoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AuthoGrowDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  onfocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')
  }

  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120')
  }
}