# start-Angular-2
A Single Page Application using Angular 2.0 and TypeScript

Angular 2:
- Angular 2 is compatible with diffrent languages
  - one of the biggest changes with Angualr 2 is multi language support
    - Dart
    - TypeScript
    - ES6
    - ES5
- It has way less concepts to learn than Angular 1.x
- HTMl syntax is lighter and does not have any ng- prefixes
- It uses a new change detection mechanism ( with the help pf Zone.js) that removes the need for $scope.$apply() or $timeout workarounds from 1.x
- Writing directives was complex in Angular 1.0 - it becomes much easier in Angular 2, where directives are called components.
- Scopes are bindings are also easier to understand.
- it is much faster than 1 ( 3 to 5 times faster)
- It's a brand new code base - Angular 1 started in 2008
- Better caching and pre-compilation of templates
- The new component router is both, more powerful and more flexible
- Simpler APIs and learning curve
- Plays well with Angular 1.x

 Note: The double curly braces are Angular's interpolation binding syntax.

- Create a new component: courses.component.ts

```
import {Component} from 'angular2/core';  // we call {Component} a decorator. Decorators are function so we need to call them.

@Component({
  selector: 'courses', 
  template: '<h2>This are my Courses</h2>' 
})

export class CoursesComponent {}
```

- Using Components:

```
import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses>',
    directives: [CoursesComponent] // it's an array, we need to specifiy any component/directive that we used inside this template
})
export class AppComponent { }
```


- Directive: a class that allows us to extend or control Document Object Model. we can define:
  - custom attribute directive
  - custom element directive
  - Every compoentn is a directive. the diffrence is that component has a template and directive doesn't.


- Template:
```
import {Component} from 'angular2/core'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}  // to render title, we use {{}}, we call it Interpolation
    `
})

export class CoursesComponent {
  title: string = "The title of courses page";
}

```

- Service and Dependency Injection:

```
export class CourseService {
  getCourse(): string[] {
    return ["Course1", "Course2", "Course3"];
  }
}

```

```
import {Component} from 'angular2/core'
import {CourseService} from './course.service';
@Component({
  selector: 'courses',
  template: `
    <h2> Courses </h2>
    {{ title }}  
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li> 
    </ul>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
  title = "The title of courses page";
  courses;

  constructor(courseService: CourseService) {
     this.courses = courseService.getCourse();
  }
}

```


- Directive: it's just a class that has that has the directive decorator.

```
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
  onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')
  }

  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120')
  }
}
```
```
import {Component} from 'angular2/core'
import {CourseService} from './course.service';
import {AuthoGrowDirective} from './auto-grow.directive';

@Component({
  selector: 'courses',
  template: `
    <h2> Courses </h2>
    {{ title }}  
    <input type="text authoGrow />
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
```

- Two-way binding : 
[(ngModel)] is the Angular syntax to bind the hero.name property to the textbox. Data flow in both directions:
- from the property to the textbox;
- and from the textbox back to the property.
- NgModel is a valid Angular directive, it isn't available by default. It belongs to the optional FormsModule. You must opt-in to using that module. ``` import { FormsModule }   from '@angular/forms'; // <-- NgModel lives ```

```
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"> // Two-way binding
  </div>
```

- Multiple Components (Master / detail):
