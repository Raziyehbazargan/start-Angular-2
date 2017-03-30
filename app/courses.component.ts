import {Component} from 'angular2/core'
import {CourseService} from './course.service';
import {AuthoGrowDirective} from './auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
    <h2> Courses </h2>
    {{ title }}  
    <input type="text" authoGrow />
    <ul>
      <li *ngFor="#course of courses"> {{ course }} </li> 
    </ul>
    `,
    providers: [CourseService, AuthoGrowDirective]
})

export class CoursesComponent {
  title = "The title of courses page";
  courses;

  constructor(courseService: CourseService) {
     this.courses = courseService.getCourse();
  }
}

// to render title, we use {{}}, we call it Interpolation
// #coursea : it's a way to declare a local variable in our template