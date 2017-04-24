import { Component, Input, Output, EventEmitter } from "angular2/core";

@Component({
  selector: 'favorite',
  templateUrl: 'app/favorite.template.html'
})

export class FavoriteComponent {
  @Input() isFavorite = false;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}
