import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Todo} from "./todo.model";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post<Todo>('...', todo).map(r => r);
  }

  getTodos() {
    return this.http.get<Todo>('...').map(r => r);
  }

  getTodosPromise() {
    return this.http.get('...').map(r => r).toPromise();
  }

  delete(id) {
    return this.http.delete('...').map(r => r);
  }
}
