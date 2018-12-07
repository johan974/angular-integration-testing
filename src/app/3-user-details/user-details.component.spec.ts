import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserDetailsComponent} from './user-details.component';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

// TEST-STUB: Router
class RouterStub {
  navigate( params) { // enige zoals in comp aangroepen wordt
  }
}
class ActivatedRouteStub {
  params: Observable<any> = Observable.empty(); // enige zoals in comp aangroepen wordt
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub},
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('after saving navigate to users page', () => {
    let router = TestBed.get( Router);
    let spy = spyOn( router, 'navigate'); // het is AL een STUF !!

    component.save(); // which will navigate to the 'users' page

    expect(spy).toHaveBeenCalledWith( ['users']);
  });
});
