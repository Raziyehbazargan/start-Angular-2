//Custom Directive

import {Directive, ElementRef, Renderer} from 'angular2/core';
//ElementRef: gives us access to the host element, for instance input element
//Render: a service which we use to modify that Element, for instance changing width of input element
@Directive({
    //css selector - if an element has an attribute 'autoGrow', this directive is going to be apply on that element
  selector: '[authoGrow]',
    //host: we use host to subscribe to events from this element
  host: {
    // name of event: (focus), onFocus() name of method
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
