import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './author.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange()"></favorite>
    <like [totalLikes]="tweet.totalLikes"></like>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    totalLikes: 10,
    iLike: false
  }
  
  onFavoriteChange($event) {
    console.log($event);

  }
}
               
