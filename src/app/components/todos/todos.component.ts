import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [ 
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }
 
  // method  toggleDone
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  // method delete
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
 
 // method addTodo
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }

}


