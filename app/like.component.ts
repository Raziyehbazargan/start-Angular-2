import { Component, Input, Output } from 'angular2/core';

@Component({
  selector: 'like',
  template: `
    <i
      class="glyphicon glyphicon-heart"
      [class.highlighted]="iLike"
      (click)="onClick()">
    </i>
    <span>{{ totalLikes }} </span>
  `,
  styles: [`
    .glyphicon-heart {
      color: #ccc;
      cursor: pointer;
    }
    .highlighted {
      color: deeppink;
    }
    `]
})

export class LikeComponent {
 @Input() totalLikes = 0;
 @Output() iLike = false;

  onclick() {
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }

}
