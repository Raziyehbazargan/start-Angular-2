import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './author.component'
@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }
               
