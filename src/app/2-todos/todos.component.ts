import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'
import {Todo} from "./todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  message = 'none';

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => {
      console.log( 'GetTodos - subscribe: ' + t.toString());
      this.todos.push( t);
  });
  }
  add() {
    const newTodo = new Todo( 'three', 'yesterday');
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }


  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}
