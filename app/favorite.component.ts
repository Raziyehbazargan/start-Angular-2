import { Component, Input, Output, EventEmitter } from "angular2/core";

@Component({
  selector: 'favorite',
  template: `
    <i class="glyphicon"
       [class.glyphicon-star-empty]="!isFavorite"
       [class.glyphicon-star]="isFavorite"
       (click)="onClick()"></i>
  `
})

export class FavoriteComponent {
  @Input() isFavorite = false;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}
