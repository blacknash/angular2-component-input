import {Component} from 'angular2/core';
import {Hello} from './hello';

@Component({
    selector : 'app',
    template : `
        <hello name="Batman" age="4"></hello>
        <hello *ngFor="#user of users" name="{{user.name}}" age="{{user.age}}"></hello>
        `,
    directives :[Hello]
})

export class AppComponent{
   public users = [
       {name: 'Superman', age:4},
       {name: 'Spiderman', age:5},
       {name: 'Robin', age:10}
   ];
}