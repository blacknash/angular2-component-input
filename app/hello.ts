import {Component,Input} from 'angular2/core';

@Component({
    selector : 'hello',
    template : `<div>Hello {{name}}, {{n}}</div>`
})

export class Hello{
    @Input() name: string;
    @Input('age') n : number;
}