import { Component } from "angular2/core";

@Component({
  selector: 'favorite',
  template: `
    <i class="glyphicon"
       [class.glyphicon-start-empty]="!isFavorite"
       [class.glyphicon-star]="isFavorite"
       (click)="onClick()"
  `
})

export class FavoriteComponent {
  isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
