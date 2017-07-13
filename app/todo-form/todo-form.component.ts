import {Component} from '@angular/core';
import {Todo} from '../shared/todo';
import {todos} from '../shared/data';


@Component({
    moduleId : module.id,
    selector: 'todo-form',
    templateUrl : 'todo-form.component.html',
    styleUrls : ['todo-form.component.css']
})

export class TodoFormComponent {

    public newTodoTitle:string = "";
    public todos = todos;

    create() {

        event.preventDefault();
        this.todos.push(new Todo(this.newTodoTitle));

    }

}