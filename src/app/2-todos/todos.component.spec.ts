import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TodosComponent} from './todos.component';
import {TodoService} from "./todo.service";
import {HttpClientModule} from "@angular/common/http";
import { Observable} from "rxjs";
import {Todo} from "./todo.model";

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      providers: [ TodoService],
      imports: [ HttpClientModule]
    })
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // Deze hier niet doen: vaak te vroeg !!
    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load todos on init', () => {
    // Dependency INDIEN dit in de Module.ngModule is in de providers: [ ... ]
    //   Dan heb je maar 1 service via een singular.
    let service = TestBed.get( TodoService);
    // Methode 2 - haal de dependency uit de provider van de component
    // let service = fixture.debugElement.injector.get( TodoService);

    let todos: Todo[] = [];
    todos.push( new Todo( "one", "now"));
    todos.push( new Todo( "two", "tomorrow"));

    spyOn( service, 'getTodos').and.returnValue( Observable.from( todos));
    fixture.detectChanges();

    expect( todos.length).toBe( 2);
    expect( component.todos.length).toBe( 2);
  });
});
